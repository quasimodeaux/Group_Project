var coordinates = [];
var array = ["this", "this"];
var names = [];
var addresses = [];
var cities = [];
var prices = [];

$(document).ready(function() {
    console.log("ready!");

    // do this on click
    $("#add-food").on("click", function() {
        event.preventDefault();
        console.clear();
        var value = $('#foody_input').val();
        var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=601&entity_type=city&apikey=c3268e89927f3e51654afc5f7b0c4f4b&count=3&q=" + value;
        console.log(value);


        $.ajax({
            url: queryURL
        }).done(function(response) {
             names = [];
             addresses = [];
             cities = [];
             prices = [];
            console.clear();
            event.preventDefault();
            console.log(response);
            $("#well-section").html("");
            coordinates = [];
           
            for (var i = 0; i < response.restaurants.length; i++) {
                // Initializes our variables to utilize the API's properties
                var latitude = response.restaurants[i].restaurant.location.latitude;
                var longitude = response.restaurants[i].restaurant.location.longitude;
                var name = response.restaurants[i].restaurant.name;
                var address = response.restaurants[i].restaurant.location.address;
                var locality_verbose = response.restaurants[i].restaurant.location.locality_verbose;
                var cost = response.restaurants[i].restaurant.average_cost_for_two;
                // Logs each of the restuarant's information.
                console.log('name:', name);
                console.log('address:', address);
                console.log('city:', locality_verbose);
                console.log('cost for two:', cost);
                console.log('latitude:', latitude);
                console.log('longitude:', longitude);

                //   Logs if the restaurant has delivery but I don't think this works on the API itself. Always get no.
                if (response.restaurants[i].restaurant.has_online_delivery == 0) {
                    console.log("no delivery");
                } else if (response.restaurants[i].restaurant.has_online_delivery == 1) {
                    console.log("has delivery");

                }

// Appends the reponse information to the top results div i.e. our article well.

                var wellSection = $("<div>");

                wellSection.addClass("well");
                wellSection.attr("id", "article-well-");
                wellSection.empty();
                $("#well-section").append(wellSection);

                // If there is a restaurant name append it's information to the page.

                if (name !== "null") {
                    $("#article-well-")
                        .append(
                            "<h3 class='articleHeadline'><span class='label label-primary'>" +
                            name + "</span><strong> " +
                            address + "</strong></h3>" + "<h2 id='lat'>" + latitude + "</h2>" + "<h2 id='long'>" + longitude + "</h2>"
                        );

                
                }



                
                }


// Pushes the response information into their respective arrays

                coordinates.push(latitude, longitude);
                names.push(name);
                addresses.push(address);
                cities.push(locality_verbose);


            };
//Calls initialize map function
            initMap();
        });


    });


});


function initMap() {

    var uluru = {
        lat: parseInt($("#lat").html()),
        lng: parseInt($("#long").html())
    };
    var map = new google.maps.Map(document.getElementById('map'), {

        zoom: 8,




        center: uluru
    });
    var marker, i;

    var infowindow = new google.maps.InfoWindow();

    for (i = 0; i < coordinates.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(coordinates[i], coordinates[i + 1]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(names[i] + "<br>" + addresses[i] + "<br>" + cities[i] + "<br>" +  coordinates[i] + "<br>" + coordinates[i+1]);

                infowindow.open(map, marker);
            }
        })(marker, i));
    }




};
/*
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB-IcM0mrkbjxEb2g04rQFvnsvZV23YLtU&callback=initMap">
    </script>

};

*/

