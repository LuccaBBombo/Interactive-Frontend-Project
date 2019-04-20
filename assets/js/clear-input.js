$(document).ready(function() {
    
    
    $("#autocompleteId").val('');  
    // Function for clearing out the location input when a new country is selected
    let autoComplete = document.querySelector("#autocomplete");
    let country = document.querySelector('#country');
    country.addEventListener('change', () => {
        autoComplete.value = '';
    });
    
    // Function for clearing markers when user selects a different country
    
    $('select[id="country"]').on('click', function(e) {
        clearMarkers();
        markers= [];
    });
});