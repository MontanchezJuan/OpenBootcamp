let marker, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: posicion,
  });

  marker = new google.maps.Marker({
    position: posicion,
    map,
    title: "You!",
  });

  marker1 = new google.maps.Marker({
    position: {
    lat: 43.000000,
    lng: -75.000000,
  },
    map,
  });

  marker2 = new google.maps.Marker({
    position: {
    lat: 46.204391,
    lng: 6.143158,
  },
    map,
  });

  marker3 = new google.maps.Marker({
    position: {
    lat: 35.652832,
    lng: 139.839478,
  },
    map,
  });

  geoPosiciona();
}

function geoPosiciona() {
  if (navigator.geolocation) {
    const geoLoc = navigator.geolocation;
    const options = { timeout: 60000 };
    const watch = geoLoc.watchPosition(centraMapa, onError, options);
  } else {
    alert("Tu navegador no permite la geolocalización");
  }
}

function centraMapa(posicion) {
  const newPos = {
    lat: posicion.coords.latitude,
    lng: posicion.coords.longitude
  };
  marker.setPosition(newPos)
  map.setCenter(newPos)
}

function onError(error) {
    console.error(error);
}

window.initMap = initMap;
