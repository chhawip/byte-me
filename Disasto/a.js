$(document).ready(function(){

	$('.sbutton').click(function(){

		var city=$("#city").val();

		if (city != ''){

			$.ajax({

				url:"http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=27e9637de1e40c687d79f2de6185a0d8",
				type: "GET",
				dataType: "jsonp",
				success: function(data){
					var widget = show(data);
					$("#show").html(widget);

					$("#city").val('');
				}
			});

		}else{
			$("#error").html('Field cannot be empty');
		}
	});
});

function show(data){
		return "<h2>Current Weather for " + data.name + ", " + data.sys.country +"</h2>" +
	       "<h3>Humidity: " + data.main.humidity + "%</h3>" +
	        "<h3>Weather: " + data.weather[0].main +"</h3>"+
	       "<h3>Description:<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'>  "+ data.weather[0].description +"</h3>"+
	       "<h3>Temperature: " + data.main.temp + "&deg;C</h3>" +
	       "<h3>Pressure: " + data.main.pressure + "hPa</h3>" +	     
	       "<h3>Min.Temperature: " + data.main.temp_min + "&deg;C</h3>" +
	       "<h3>Max.Temperature: " + data.main.temp_max + "&deg;C</h3>" +
	       "<h3>Wind Speed: " + data.wind.speed +"m/s</h3>" ;
	  
}