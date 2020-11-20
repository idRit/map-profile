let lat = new URL(window.location.href).searchParams.get("lat");
let lng = new URL(window.location.href).searchParams.get("lng");

var mymap = L.map('mapid').setView([lat, lng], 12);
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    maxZoom: 19,
}).addTo(mymap);

let navIcon = L.icon({
    iconUrl: 'baseline_navigation_black_18dp.png'
});

L.marker([lat, lng], {icon: navIcon}).addTo(mymap);

//http://localhost:5500/?lat=18.9750&lng=72.8258
