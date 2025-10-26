// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
function initMap() {
    const home = { lat: 51.41440159227802, lng: -0.007830720535929274 };

    const martinb = { lat: 43.26694601928382, lng: -2.0156468200988975};

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: home,
    });
    const homeContentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Home</h1>';

    const homeInfoWindow = new google.maps.InfoWindow({
        content: homeContentString,
        ariaLabel: "Home",
    });
    const homeMarker = new google.maps.Marker({
        position: home,
        map,
        title: "Home",
    });
    homeMarker.addListener("click", () => {
        homeInfoWindow.open({
            anchor: homeMarker,
            map,
        });
    });

    const martinbContentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Restaurante Martin Berasategui</h1>' +
        '<div id="bodyContent">' +
        "Also referred to as Martin B, Three Star Michelin restaurant in " +
        "San Sebastian visited on 22 October 2025 for Steven's 50th birthday organised by Kathryn" +
        "</div>" +
        "</div>";

    const martinbInfoWindow = new google.maps.InfoWindow({
        content: martinbContentString,
        ariaLabel: "Martin B",
    });
    const martinbMarker = new google.maps.Marker({
        position: martinb,
        map,
        title: "Martin B",
    });
    martinbMarker.addListener("click", () => {
        martinbInfoWindow.open({
            anchor: martinbMarker,
            map,
        });
    });
}

window.initMap = initMap;