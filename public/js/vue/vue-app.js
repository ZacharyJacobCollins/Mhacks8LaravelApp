var app = new Vue({
    el: '#app',
    data: {
        pos: {},            //A user's coordinates in format { lat, lng }
        nodes: [],
        map: {},
        infoWindow: {},
        nodes: [
          {title: "test", filter: ''},
          {title: "test", filter: ''},
          {title: "test", filter: ''},
          {title: "test", filter: ''},
        ],
        message: { test: 'test' },
    },
    ready: function() {
        console.log('map component loaded');
    },
    methods: {
        //Initialize google map
        init: function() {
            // Try HTML5 geolocation.
            if (navigator.geolocation) {
                  //Retrieve and update location
                  this.updatePosition();
            //START OF ELSE STATEMENT
            } else {
                  // Browser doesn't support Geolocation
                  this.handleLocationError(false, infoWindow, map.getCenter());
            }
        },
        updatePosition: function() {
          navigator.geolocation.getCurrentPosition(this.callback)
        },
        //Initialize google map
        handleLocationError: function(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                'Error: The Geolocation service failed.' :
                'Error: Your browser doesn\'t support geolocation.');
        },
        callback: function(position) {
              var pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
              };

              //set initial location
              this.pos = pos;

              console.log('Your position detected');
              console.log(pos);

              //Create a new google map, set center to current location
              var map = new google.maps.Map(document.getElementById('map'), {
                  center: { lat: pos.lat, lng: pos.lng },
                  zoom: 20
              });
              var infoWindow = new google.maps.InfoWindow({ map: map });

              infoWindow.setPosition(pos);
              infoWindow.setContent('Location lat: '+pos.lat+' lng: '+pos.lng);
              map.setCenter(pos);

              //Function to call the web worker
              function startWorker() {
                  if(typeof(Worker) !== "undefined") {
                      if(typeof(w) == "undefined") {
                          w = new Worker("/js/map/mapworker.js");
                      }
                      w.onmessage = function(event) {
                          console.log(JSON.parse(event.data));
                          this.pos = JSON.parse(event.data).location;   //Also returns an accuracy if wanted
                          console.log('updated position: ');
                          console.log( this.pos );
                      };
                  } else {
                      console.log("No Web Worker support.");
                  }
              }

              //Boot the worker
              startWorker();

          }, function() {
              this.handleLocationError(true, infoWindow, map.getCenter());
        },
    },
});
