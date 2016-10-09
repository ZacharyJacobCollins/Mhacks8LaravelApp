var mapsApiKey = "AIzaSyBpTlJjnqhIO1wVlMC503Gm9XeDn2U7hfI";

function pollPosition() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      postMessage(this.responseText);
    }
  };
  xhttp.open("POST", "https://www.googleapis.com/geolocation/v1/geolocate?key="+mapsApiKey, true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("");
  // setTimeout("pollPosition()",2000);
}

pollPosition();
