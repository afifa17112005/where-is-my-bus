var map = L.map('map').setView([13.0827, 80.2707], 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

var marker = L.marker([13.0827, 80.2707]).addTo(map);

firebase.database().ref("buses/BUS101").on("value", snapshot => {
    const data = snapshot.val();
    if (data) {
        marker.setLatLng([data.lat, data.lng]);
        map.setView([data.lat, data.lng]);

        document.getElementById("info").innerText =
            `Route: ${data.route} | Speed: ${data.speed} km/h | Updated: ${data.timestamp}`;
    }
});
