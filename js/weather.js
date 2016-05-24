// JavaScript Document

$(document).ready(function() {
	var c;
	$('.forecast').hide();
	$.get("http://ipinfo.io", function (response) {	
	$.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+response.city+"%2C%20"+response.country+"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function(data){
		$('.tempVal').html(data.query.results.channel.item.condition.temp);
		$('.tempDeg').html("º");
		$('.tempUnit').html(data.query.results.channel.units.temperature);
		$('.weatherText').html(data.query.results.channel.item.condition.text);
		$('.city').html(response.city);
		$('#iconClass').addClass(yahooWeather[data.query.results.channel.item.condition.code].icon);
		
			forecast(data);
    });
}, "jsonp");

	function forecast(data) {
		var i;
		for (i = 0; i < 5; i++) {
			$('.forecast ul').append("<li>"+ data.query.results.channel.item.forecast[i].date.substring(0,6) +"</li>");
		}
		for (i = 0; i < 5; i++) {
			$('.forecast ul').append("<li>"+ data.query.results.channel.item.forecast[i].day +"</li>");
		}
		for (i = 0; i < 5; i++) {
			var avgTemp = (parseInt(data.query.results.channel.item.forecast[i].high) + parseInt(data.query.results.channel.item.forecast[i].low))/2;
			$("<li>"+ Math.round(avgTemp) +"º".sup()+"F</li>").css({
					backgroundColor: '#ffffff',
					color: '#333333',
					opacity: '0.5'
			}).appendTo($('.forecast ul'));

		}
		for (i = 0; i < 5; i++) {
			$('.forecast ul').append("<li><div class=\"forecastIcon\"><i id=\"#iconClass\" class=\"wi "+ yahooWeather[data.query.results.channel.item.forecast[i].code].icon +"\"></i></div></li>");
		}

		for (i = 0; i < 5; i++) {
			$('.forecast ul').append("<li style=\"line-height:30px\">"+ data.query.results.channel.item.forecast[i].text +"</li>");
		}
	}

	$('.weather').click(function() {
		$('#calendarDiv').toggle();
		$('#clockDiv').toggle();
		$('#weatherDiv').toggleClass('bigger');
		$('.today').toggle();
		$('.forecast').toggle();
	});
	
	var yahooWeather = 
	[	{
			"code" : "0",
			"description" : "tornado",
			"icon" : "wi-tornado"
		},
		{
			"code" : "1",
			"description" : "tropical storm",
			"icon" : "wi-wu-chancetstorms"
		},
		{
			"code" : "2",
			"description" : "hurricane",
			"icon" : "wi-hurricane"
		},
		{
			"code" : "3",
			"description" : "severe thunderstorms",
			"icon" : "wi-storm-showers"
		},
		{
			"code" : "4",
			"description" : "thunderstorms",
			"icon" : "wi-thunderstorm"
		},
		{
			"code" : "5",
			"description" : "mixed rain and snow",
			"icon" : "wi-rain-mix"
			
		},
		{
			"code" : "6",
			"description" : "mixed rain and sleet",
			"icon" : "wi-rain-mix"
		},
		{
			"code" : "7",
			"description" : "mixed snow and sleet",
			"icon" : "wi-rain-mix"
		},
		{
			"code" : "8",
			"description" : "freezing drizzle",
			"icon" : "wi-sprinkle"
		},
		{
			"code" : "9",
			"description" : "drizzle",
			"icon" : "wi-sprinkle"
		},
		{
			"code" : "10",
			"description" : "freezing rain",
			"icon" : "wi-rain"
		},
		{
			"code" : "11",
			"description" : "showers",
			"icon" : "wi-showers"
		},
		{
			"code" : "12",
			"description" : "showers",
			"icon" : "wi-showers"
		},
		{
			"code" : "13",
			"description" : "snow flurries",
			"icon" : "wi-wu-flurries"
		},
		{
			"code" : "14",
			"description" : "light snow showers",
			"icon" : "wi-rain-mix"
		},
		{
			"code" : "15",
			"description" : "blowing snow",
			"icon" : "wi-snow-wind"
		},
		{
			"code" : "16",
			"description" : "snow",
			"icon" : "wi-snow"
		},
		{
			"code" : "17",
			"description" : "hail",
			"icon" : ".wi-hail"
		},
		{
			"code" : "18",
			"description" : "sleet",
			"icon" : "wi-sleet"
		},
		{
			"code" : "19",
			"description" : "dust",
			"icon" : ".wi-dust"
		},
		{
			"code" : "20",
			"description" : "foggy",
			"icon" : "wi-fog"
		},
		{
			"code" : "21",
			"description" : "haze",
			"icon" : "wi-wu-hazy"
		},
		{
			"code" : "22",
			"description" : "smoky",
			"icon" : "wi-smoke"
		},
		{
			"code" : "23",
			"description" : "blustery",
			"icon" : "wi-snow-wind"
		},
		{
			"code" : "24",
			"description" : "windy",
			"icon" : "wi-windy"
		},
		{
			"code" : "25",
			"description" : "cold",
			"icon" : "wi-snowflake-cold"
		},
		{
			"code" : "26",
			"description" : "cloudy",
			"icon" : "wi-cloudy"
		},
		{
			"code" : "27",
			"description" : "mostly cloudy (night)",
			"icon" : "wi-night-cloudy"
		},
		{
			"code" : "28",
			"description" : "mostly cloudy (day)",
			"icon" : "wi-night-cloudy"
		},
		{
			"code" : "29",
			"description" : "partly cloudy (night)",
			"icon" : "wi-forecast-io-partly-cloudy-night"
		},
		{
			"code" : "30",
			"description" : "partly cloudy (day)",
			"icon" : "wi-forecast-io-partly-cloudy-day"
		},
		{
			"code" : "31",
			"description" : "clear (night)",
			"icon" : "wi-night-clear"
		},
		{
			"code" : "32",
			"description" : "sunny",
			"icon" : "wi-wu-sunny"
		},
		{
			"code" : "33",
			"description" : "fair (night)",
			"icon" : "wi-forecast-io-clear-night"
		},
		{
			"code" : "34",
			"description" : "fair (day)",
			"icon" : "wi-forecast-io-clear-day"
		},
		{
			"code" : "35",
			"description" : "mixed rain and hail",
			"icon" : "wi-rain-mix"
		},
		{
			"code" : "36",
			"description" : "hot",
			"icon" : "wi-hot"
		},
		{
			"code" : "37",
			"description" : "isolated thunderstorms",
			"icon" : "wi-thunderstorm"
		},
		{
			"code" : "38",
			"description" : "scattered thunderstorms",
			"icon" : "wi-storm-showers"
		},
		{
			"code" : "39",
			"description" : "scattered thunderstorms",
			"icon" : "wi-thunderstorm"
		},
		{
			"code" : "40",
			"description" : "scattered showers",
			"icon" : "wi-storm-showers"
		},
		{
			"code" : "41",
			"description" : "heavy snow",
			"icon" : "wi-snow"
		},
		{
			"code" : "42",
			"description" : "scattered snow showers",
			"icon" : "wi-snow-wind"
		},
		{
			"code" : "43",
			"description" : "heavy snow",
			"icon" : "wi-snow"
		},
		{
			"code" : "44",
			"description" : "partly cloudy",
			"icon" : "wi-cloud"
		},
		{
			"code" : "45",
			"description" : "thundershowers",
			"icon" : "wi-storm-showers"
		},
		{
			"code" : "46",
			"description" : "snow showers",
			"icon" : "wi-rain-mix"
		},
		{
			"code" : "47",
			"description" : "isolated thundershowers",
			"icon" : "wi-storm-showers"
		},
		{
			"code" : "3200",
			"description" : "not available",
			"icon" : "wi-wu-unknown"
		}
		
	];
});