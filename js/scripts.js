
// click button, capture zip field
$('#getZip').click(function() {
  
  // stop default, <form> from submitting data
  event.preventDefault();
  
  // get and store data
	var zip = $('#zip').val();
  console.log(zip);  
  
  // Get Weather
  $.simpleWeather({
    
    location: zip, 
    unit: 'f',
    success: function(weather) {

			
      // get weather OK? 
      console.log(weather);

      $('.temp').text(weather.temp); 
      $('.currently').text(weather.currently);
      $('.city').text(weather.city);
    
    },  
    error: function(error) {
      $('body').html('<p>' + error + '</p>');
    }
  
  });
  
  // clear zip
  $('#getWeather').val('');
  
});




//Time Display
  
    var d = new Date();
  var time = d.getHours();

    //console.log(time);

  if ( time >= 6 && time <= 18 ){
  $('#time').addClass('day');
  }else {
    $('#time').addClass('night');
  }










	
	

	
