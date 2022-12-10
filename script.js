// Initialize variables for elements
const autoElement = document.getElementById('autocomplete');
const mapElement = document.getElementById("map");

let autocomplete;

function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    autoElement,
    {
      types: ['establishment'],
      componentRestrictions: {'country': ['us']},
      fields: ['place_id', 'geometry', 'name']
    });

  // The input field changed
  autocomplete.addListener('place_changed', onPlaceChanged);
}

// Place on input field changed
function onPlaceChanged() {
  // Create a PlaceResult object
  var place = autocomplete.getPlace();

  // The inputted text doesn't exist on the map
  if (!place.geometry) {
    autoElement.placeholder = 'Enter a location';
  }else {
    console.log("NAME: ", place.name);
    // console.log("ADDRESS: ", place.adr_addres.getDetails);
    map = new google.maps.Map(mapElement, {zoom: 16, center: place.geometry.location});
    marker = new google.maps.Marker( { position: place.geometry.location, map: map } );
    console.log("GEOMETRY: ", place.geometry.location);
  }
}

const center = { lat: 33.669445, lng: -117.823059};

// Initialize and add map
function initializeMap() {
	// Generate map centered at the starting location
	const map = new google.maps.Map(mapElement, {zoom: 10, center: center});

	const marker = new google.maps.Marker( { position: center, map: map } );
  
  initAutocomplete();
};

window.initMap = initializeMap;