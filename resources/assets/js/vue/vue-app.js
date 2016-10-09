var app = new Vue({
    el: '#test',
    data: {
        pos: {},            //A user's coordinates in format { lat, lng }
        nodes: [],
        map: {},
        infoWindow: {},
        events: [
          {title: "test"},
          {title: "test"},
          {title: "test"},
          {title: "test"},
          {title: "test"},
        ],
        message: 'test',
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
        /**
         * @return adds a new node to the array of nodes
        */
        pollPosition: function(navigator) {

        },
        callback: function(position) {
              var pos = {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
              };

              console.log('Your position detected');
              console.log(pos);

              //Create a new google map, set center to current location
              var map = new google.maps.Map(document.getElementById('map'), {
                  center: { lat: pos.lat, lng: pos.lng },
                  zoom: 6
              });
              var infoWindow = new google.maps.InfoWindow({ map: map });

              infoWindow.setPosition(pos);
              infoWindow.setContent('Location lat: '+pos.lat+' lng: '+pos.lng);
              map.setCenter(pos);

              console.log(navigator);

              //Map worker to continue retriving location in background
              function startWorker() {
                  if(typeof(Worker) !== "undefined") {
                      if(typeof(w) == "undefined") {
                          //Create a new counting worker
                          w = new Worker("/js/map/mapworker.js");
                      }
                      w.onmessage = function(event) {
                          console.log(event.data);
                      };
                  } else {
                      document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
                  }
              }

          }, function() {
              this.handleLocationError(true, infoWindow, map.getCenter());
        },
    },
});
