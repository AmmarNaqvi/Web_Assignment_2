// JavaScript Document


$(document).ready(function() {
	
	"use strict";
	$('.month').hide();
	var dateObj = new Date();
	var year = dateObj.getFullYear();
	var date = dateObj.getDate();
	var monthIndex = dateObj.getMonth();
	var day = dateObj.getDay();
	var monthNames = [["january", 31],["feburary", 28],["march", 31],["april", 30],["may", 31],["june", 30],["july", 31],["august", 31],["september", 30],["october", 31],["november", 30],["december", 31]];
	var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	

	function drawDate() {
		$('.dateVal').html(date);
		if(date == 1) {
			$('.dateVal').append("st".sup());
		} else if(date == 1) {
			$('.dateVal').append("nd".sup());
		}else if(date == 1) {
			$('.dateVal').append("rd".sup());
		} else {
			$('.dateVal').append("th".sup());
		}
		
		$('.day').html(weekdays[day]);
	} drawDate();
	function drawCalendar() {
		var firstDay = new Date(year, monthIndex, 1).getDay();
		$('.monthName').html(monthNames[monthIndex][0] + " " + year);
		$('.weekdays ul').html("");
		for(var i = 0; i < 7; i++) {
			$('<li>' + weekdays[i].substring(0,3) + '</li>').appendTo($('.weekdays ul'));
		}
		$('.dates ul').html("");
		for(var k = 0; k < firstDay; k++) {
			$('<li>' + "-" + '</li>').appendTo($('.dates ul'));
		}
		if ((year % 4) === 0) {
			monthNames[1][1] = 29;
		}
		else {
			monthNames[1][1] = 28;
		}
		for(var j = 0; j < monthNames[monthIndex][1]; j++) {
			if (date === (j+1) && dateObj.getMonth() === monthIndex) {
				$('<li>' + (j + 1) + '</li>').css({
					backgroundColor: '#ffffff',
					color: '#333333',
					opacity: '0.5'
				}).appendTo($('.dates ul'));
			}
			else {
				$('<li>' + (j + 1) + '</li>').appendTo($('.dates ul'));
			}
		}
		for(var l = 0; l < (42-(firstDay+monthNames[monthIndex][1])); l++) {
			$('<li>' + "-" + '</li>').appendTo($('.dates ul'));
		}
	}
	drawCalendar();

	$('#left').click(function() {
		if (monthIndex === 0) {
			year--;
			monthIndex = 12;
		}
		monthIndex--;
		drawCalendar();
		event.stopPropagation();
	});
	
	$('#right').click(function() {
		monthIndex++;
		if (monthIndex === 12) {
			monthIndex = 0;
			year++;
		}
		drawCalendar();
		event.stopPropagation();
	});
	
	$('.calendar').click(function() {
		$('#clockDiv').toggle();
		$('#weatherDiv').toggle();
		$('#calendarDiv').toggleClass('bigger');
		$('.date').toggle();
		$('.month').toggle();
	});
	
});
