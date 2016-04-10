// function initialize() {
// 	var locations = [
// 		['home', 38.9860367, 76.9389547, 2],
// 		['user', 38.8976805, 77.0387238, 1]
// 	]
// 	var bound = new google.maps.LatLngBounds();
// 	for (i = 0; i<locations.length; i++) {
// 		bound.extend(new google.maps.LatLng(locations[i][2], locations[i][3]));
// 	}
// 	console.log(bound.getCenter());

// 	var mapProp = {
// 		center: bound.getCenter(),
// 		zoom: 15,
// 		mapTypeId: google.maps.MapTypeId.ROADMAP
// 	};
// 	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
// }
// google.maps.event.addDomListener(window, 'load', initialize);

var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    	center: {lat: 39.244881, lng: -77.266147},
      	zoom: 8
    });
}