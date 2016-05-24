// JavaScript Document

$(document).ready(function() {
	var time;
	var period;
	var hours;
	var minutes;
	var seconds;
	
	function clock() {
		time = new Date();
		
		period = "AM";
		
		hours = time.getHours();
		
		if (hours >= 12) {
			period = "PM";
			hours = hours % 12;
		}
		
		minutes = time.getMinutes();
		
		seconds = time.getSeconds();
		
		$('.hand-second').css ({
			transform: "rotate("+seconds * 6+"deg)"			
		});
		$('.hand-minute').css ({
			transform: "rotate("+minutes * 6+"deg)"			
		});
		$('.hand-hour').css ({
			transform: "rotate("+hours * 30+"deg)"			
		});
		$('.digitDiv.time').html(formatTime(hours) + " : " + formatTime(minutes));
		if ($('#clockDiv').hasClass('bigger')) {
			$('.digitDiv.time').append(" : " + formatTime(seconds));
		}

		$('.digitDiv.period').html(period);
	  
	}
	setInterval(clock, 1000);
	
	function formatTime(timeUnit) {
		if (timeUnit < 10) {
			timeUnit = '0' + timeUnit;
		}
		return timeUnit;
	}


	function drawNumbers(inc, angle) {
		var container = $('.numbers');
		$('.numbers ul').html("");
		for(var i = 0; i < 13; i+=inc) {
			if (i === 0) {
				continue;
			}
			$('<li>' + i + '</li>').appendTo($('.numbers ul'));
		}
		
		var radius = 120;
    	var numbers = $('.numbers ul li'),
        width = container.width(), height = container.height(),
        step = (2*Math.PI) / numbers.length;
    	numbers.each(function() {
			var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
			var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
			$(this).css({
				left: x + 'px',
				top: y + 'px'
			});
			angle += step;
   		});
	}
	drawNumbers(3, 0);


	$('.clock').click(function() {
		$('#calendarDiv').toggle();
		$('#weatherDiv').toggle();
		$('#clockDiv').toggleClass('bigger');
		if ($('#clockDiv').hasClass('bigger')) {
			$('.digitDiv.time').append(" : " + formatTime(seconds));
			drawNumbers(1, 200);
		}
		else {
			$('.digitDiv.time').html(formatTime(hours) + " : " + formatTime(minutes));
			drawNumbers(3, 0);
		}
	});
	
});
