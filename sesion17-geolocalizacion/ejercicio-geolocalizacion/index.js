let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: 41.89039789000691, 
        lng: 12.492155797900198,
      },
      map,
      title: "Colosseum",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 51.50152420200044,
        lng:  -0.14187928381170337,
      },
      map,
      title: "Buckingham Palace",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 51.497773496289916, 
        lng: -0.11823314340424954,
      },
      map,
      title: "Lambeth Palace Library",
    })
  );
}