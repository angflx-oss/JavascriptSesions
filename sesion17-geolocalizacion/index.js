let marker, map;

function initMap(){
    const posicion  = {
        lat: -25.363,
        lng: 131.044
    }

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })

    
const marker = new google.maps.Marker({
    position: posicion,
    map: map,
    title: "Posición inicial"
})

geoPosiciona()

}

function geoPosiciona() {
    if(navigator.geolocation){
        const geoLoc = navigator.geolocation
        const watchPos = geoLoc.watchPosition(centrarMapa, onError, options)

    }else{
        alert:("Navegdor no admite Geolocalización")
    }
    
}

function centrarMapa(position){
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }

    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error){

}



