//Build a function to count the number of clicks


var i = 0;

$('#target').click(function(e) {

	$('#counter').remove();
	i++;
	$('body').append('<div id="counter">You clicked this cat '+ i +' time(s)</div>');
});