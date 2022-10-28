var map;

// Initialize and add map
function initializedMap() {
	// Starting location of Irvine
	const startLoc = { lat: 33.669445, lng: -117.823059 };

	// Generate map centered at the starting location
	map = new google.maps.Map(document.getElementById("map"), {zoom: 10, center: startLoc});

	const marker = new google.maps.Marker( { position: startLoc, map: map } );
}


// const service = new google.maps.PlacesService(map);



window.initMap = initializedMap;

console.log("YO");