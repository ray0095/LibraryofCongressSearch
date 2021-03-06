var searchBtn = $('#search-button');
var apiUrl = "https://www.loc.gov/search/"

$('.btn').on('click', function(event){
    event.preventDefault();
    var inputForm = $('#searchterm').val().trim();
    var categoryInput = $('.form-select').val();
    console.log(inputForm);
    console.log(categoryInput);
    apiUrl = apiUrl+categoryInput+'/'+ '?q=' +inputForm +'&fo=json';
    console.log(apiUrl);
});



