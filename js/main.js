//Build a function to count the number of clicks


function CatCliker() {
	var i = 0;

	CatDisplay(i); 

	$('#target').click(function(e) {
		i = ClickCounter(i);
	} );

}

function ClickCounter(counter) {
	counter++;
	$('#counter').text('You clicked the cats '+ counter+' time(s)');
	CatDisplay(counter);
	return counter;
}

function CatDisplay(counter) {
	var CatImg= ['images/cat.jpg', 'images/siamese.jpg'];
	var CatName = ['Matoux', 'Gustav'];

	var Cat = counter % 2;

	$("#target").attr("src", CatImg[Cat]);
	$("#catheader").text("Let's click on this beautiful cat, " + CatName[Cat] +'!');

}

	

CatCliker();
