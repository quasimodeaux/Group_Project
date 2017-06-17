

$(document).ready(function(){
	console.log("ready!");

		

	$("#Pizza").on("click", function() {


navigator.geolocation.getCurrentPosition(initialise);






	var map;
	var service;

	function searchResult(result, status){
		console.log(result);
		for (var i=0; i<result.length; i++){
		  	var marker = new google.maps.Marker({
		  	position: result[i].geometry.location,
		  	map: map
		//  	icon: "result[i].icon"
  });
		}
	};



//----------------------
	function performSearch(){
		var request = {
			bounds : map.getBounds(),
			name: "Pizza"
		    }
		service.nearbySearch(request, searchResult);
	};





	




	function initialise(location){
		console.log(location);
		var currentLocation = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);

/*		  var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 28.6659654, lng: -81.3729372},
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });     */

		var options = {
		//	center: new google.maps.LatLng(28.6659654, -81.3729372),
			center: currentLocation,
			zoom: 12,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};    
     
  map = new google.maps.Map(document.getElementById("map"), options);
 
  	var marker = new google.maps.Marker({
  	position: currentLocation,
  	map: map,
  	icon: "asset/images/you.jpg"
  });  

 	service = new google.maps.places.PlacesService(map);
 	google.maps.event.addListenerOnce(map, "bounds_changed", performSearch);




  	$("refresh").click(performSearch);
  		var circle ={
  			fillcolor: "lightblue",
  			map:map,
  			center: new google.maps.LatLng(location.coords.latitude, location.coords.longitude),
  			radius: 3000
  		};
  		mycircle = new google.maps.Circle(circle);
	


};








	});


});