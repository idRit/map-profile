let lat = new URL(window.location.href).searchParams.get("lat");
let lng = new URL(window.location.href).searchParams.get("lng");

var mymap = L.map('mapid').setView([lat, lng], 12);
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png', {
    maxZoom: 20,
}).addTo(mymap);

let navIcon = L.icon({
    iconUrl: 'baseline_location_on_white_18dp.png'
});

L.marker([lat, lng], {icon: navIcon}).addTo(mymap);

//http://localhost:5500/?lat=18.9750&lng=72.8258
