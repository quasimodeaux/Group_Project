var coordinates = [];
var array = ["this", "this"];

$( document ).ready(function() {
    console.log( "ready!" );

// do this on click



$("#add-food").on("click", function() {
      event.preventDefault();
          console.clear();
      var value = $('#foody_input').val();
      var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=601&entity_type=city&apikey=c3268e89927f3e51654afc5f7b0c4f4b&count=3&q=" + value;
      console.log(value);

        $.ajax({
          url: queryURL
        }).done(function  (response){
           console.log(response); 
        for (var i = 0; i < response.restaurants.length; i++) {
          var latitude = response.restaurants[i].restaurant.location.latitude;
          var longitude = response.restaurants[i].restaurant.location.longitude;
          var name = response.restaurants[i].restaurant.name;
          var address = response.restaurants[i].restaurant.location.address;
          var locality_verbose = response.restaurants[i].restaurant.location.locality_verbose;
          var cost = response.restaurants[i].restaurant.average_cost_for_two;
          console.log('name:', name);
          console.log('address:', address);
          console.log('city:', locality_verbose);
          console.log('cost for two:', cost);
          console.log('latitude:', latitude);
          console.log('longitude:', longitude);

    //      console.log('url:', response.restaurants[i].restaurant.url);
        if (response.restaurants[i].restaurant.has_online_delivery == 0){
          console.log("no delivery");
        }
        else if (response.restaurants[i].restaurant.has_online_delivery == 1)
        { console.log("has delivery");

          }


      var wellSection = $("<div>");
      wellSection.addClass("well");
      wellSection.attr("id", "article-well-");
      $("#well-section").append(wellSection);

      // Confirm that the specific JSON for the article isn't missing any details
      // If the article has a headline include the headline in the HTML
      if (name !== "null") {
        $("#article-well-")
          .append(
            "<h3 class='articleHeadline'><span class='label label-primary'>" +
            name + "</span><strong> " +
            address + "</strong></h3>" + "<h2 id='lat'>"+latitude+"</h2>" + "<h2 id='long'>"+longitude+"</h2>"
          );

        // Log the first article's headline to console
        console.log(name);
      }



      coordinates.push(latitude, longitude);









          };










          initMap();
        });


});


});
if(name !== "null"){

  function initMap() {

    event.preventDefault();
      for (var i = 0; i < coordinates.length; i++) {
        console.log(name);
      }
      var uluru = {lat: parseInt($("#lat").html()), lng: parseInt($("#long").html())};
      var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
     });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });




};

};




