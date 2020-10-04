let lat = new URL(window.location.href).searchParams.get("lat");
let lng = new URL(window.location.href).searchParams.get("lng");

var mymap = L.map('mapid').setView([lat, lng], 19);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
}).addTo(mymap);

let navIcon = L.icon({
    iconUrl: 'baseline_navigation_black_18dp.png'
});

L.marker([lat, lng], {icon: navIcon}).addTo(mymap);

//http://localhost:5500/?lat=18.9750&lng=72.8258