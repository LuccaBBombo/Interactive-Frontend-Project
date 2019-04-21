 $(document).ready(function() {
    
    
    $("#autocompleteId").val('');  
    
    // Function for clearing out the location input when the user selects a different country
    
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