const MAPBOX_ACCESS_TOKEN =
  'pk.eyJ1Ijoic3VubWVuZ3l1ZSIsImEiOiJja2owY3o0Z3Ywa3E5MnhrbGV2a3M3aDM4In0.uK5_xMb75lXraq02u0Htjg';

/* Go to our exact location */
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function setUpMap(centerPosition) {
  const map = new mapboxgl.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: centerPosition,
    zoom: 15,
  });

  //   const nav = new mapboxgl.NavigationControl();

  const directionControls = new MapboxDirections({
    accessToken: MAPBOX_ACCESS_TOKEN,
  });

  map.addControl(directionControls, 'top-left');
}

function successLocation(position) {
  setUpMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setUpMap([-2.24, 53.48]);
}

/* Create Directions on Map */
