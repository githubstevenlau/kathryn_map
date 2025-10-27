function initMap() {
    const home = { lat: 51.41440159227802, lng: -0.007830720535929274 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: home,
    });

    //
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

    // First date 10 Dec 2022
    const boccaSocial = { lat: 51.408444990057625, lng: -0.025301557502771018 };

    const boccaSocialContentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Bocca Social</h1>' +
        '<div id="bodyContent">' +
        "First date with Kathryn on 10 Dec 2022. Italian restaurant on Beckenham High Street." +
        "</div>" +
        "</div>";

    const boccaSocialInfoWindow = new google.maps.InfoWindow({
        content: boccaSocialContentString,
        ariaLabel: "Bocca Social",
    });
    const boccaSocialMarker = new google.maps.Marker({
        position: boccaSocial,
        map,
        title: "Bocca Social",
    });
    boccaSocialMarker.addListener("click", () => {
        boccaSocialInfoWindow.open({
            anchor: boccaSocialMarker,
            map,
        });
    });

    // San Sebastian October 2025
    const villaFavorita = { lat: 43.31700809564674, lng: -1.9858997367605542 };

    const villaFavoritaContentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Hotel Villa Favorita</h1>' +
        '<div id="bodyContent">' +
        "The beautiful hotel where we stayed 19-20 October 2025" +
        " that Kathryn organised for Steven's 50th birthday. The view of" +
        " the beach and sea from the window was stunning." +
        "</div>" +
        "</div>";

    const villaFavoritaInfoWindow = new google.maps.InfoWindow({
        content: villaFavoritaContentString,
        ariaLabel: "Hotel Villa Favorita",
    });
    const villaFavoritaMarker = new google.maps.Marker({
        position: villaFavorita,
        map,
        title: "Hotel Villa Favorita",
    });
    villaFavoritaMarker.addListener("click", () => {
        villaFavoritaInfoWindow.open({
            anchor: villaFavoritaMarker,
            map,
        });
    });

    const martinb = { lat: 43.26694601928382, lng: -2.0156468200988975 };
    const martinbContentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">Restaurante Martin Berasategui</h1>' +
        '<div id="bodyContent">' +
        "Also referred to as Martin B, Three Star Michelin restaurant in " +
        "San Sebastián visited on 22 October 2025 for lunch to celebrate " +
        "Steven's 50th birthday organised by Kathryn. We had the tasting menu and " +
        "half wine pairing. It was amazing!" +
        "</div>" +
        "</div>";

    const martinbInfoWindow = new google.maps.InfoWindow({
        content: martinbContentString,
        ariaLabel: "Martin Berasategui",
    });
    const martinbMarker = new google.maps.Marker({
        position: martinb,
        map,
        title: "Martin Berasategui",
    });
    martinbMarker.addListener("click", () => {
        martinbInfoWindow.open({
            anchor: martinbMarker,
            map,
        });
    });
}

window.initMap = initMap;