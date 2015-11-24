function geoSuccess() {
    //Code to be ran if user's location fits the defined parameters

}
function geoFail() {
    //Code to be ran if user's location does NOT fit the defined parameters

}
function geoNoSupport() {
    //Code to be ran if user's browser does not support GeoLocation

}


function squareGeofence(lat1, lat2, lon1, lon2) {
    //Check to see if browser supports geolocation
    if (navigator.geolocation) {
        //run function with location stored in 'position'
        navigator.geolocation.getCurrentPosition(function(position){
            var latitude = parseFloat(position.coords.latitude),
                longitude = parseFloat(position.coords.longitude);
            
            console.log(latitude + " " + longitude);
            //Check to see if current position sits between range defined in function
            if (latitude < lat1 && latitude > lat2) {
                if (longitude < lon1 && longitude > lon2) {
                    geoSuccess();
                } else {
                    geoFail();
                }
            } else {
                geoFail();
            }
        }); 
    } else {
        geoNoSupport();
    }
}

//Function checks to see if current position is within range of latitude and longitude coordinates passed to it. Distance is based on degrees
function radialGeofence(lat,lon, distance) {
    //Check to see if browser supports geolocation
    if (navigator.geolocation) {
        //run function with location stored in 'position'
        navigator.geolocation.getCurrentPosition(function(position){
            //get distance between current position and position defined in function call
            var d = haversine(lat, lon, position.coords.latitude, position.coords.longitude);
            if (d < distance) {
                geoSuccess();
            } else {
                geoFail();
            }
        }); 
    } else {
        geoNoSupport();
    }
}

//convert number to radians
function toRad(i) {
   return i * Math.PI / 180;
}

//Calculate distance (kilometers) between two sets of coordinates
function haversine(lat1, lon1, lat2, lon2) {
    var R = 6371, //Radius of earth in Kilometers
        x = toRad(lat2-lat1), 
        y = toRad(lon2-lon1),
        a = Math.sin(x/2) * Math.sin(x/2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(y/2) * Math.sin(y/2),
        c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)),
        d = R * c;

    return d;   
}
