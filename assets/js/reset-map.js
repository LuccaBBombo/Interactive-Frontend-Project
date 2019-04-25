function resetMap() {

// clears the inout field for the cities
    document.getElementById("locationField").reset();

// makes the map zoom out on the country selected and clears all markers
    var country = document.getElementById('country').value;
    if (country == 'all') {
        autocomplete.setComponentRestrictions({ 'country': [] });
        map.setCenter({ lat: 15, lng: 0 });
        map.setZoom(2);
    }
    else {
        autocomplete.setComponentRestrictions({ 'country': country });
        map.setCenter(countries[country].center);
        map.setZoom(countries[country].zoom);
    }
    clearResults();
    clearMarkers();
}