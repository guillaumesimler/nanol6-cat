//Build a function to count the number of clicks


// Variable declarations
var CatImg= [
	'images/cat1.jpg', 
	'images/cat2.jpg',
	'images/cat3.jpg',
	'images/cat4.jpg',
	'images/cat5.jpg',
	];

var CatName = [
	'Matoux', 
	'Gustav',
	'Ingo',
	'Emil',
	'Gunther'
	];


var CatScore = CatScores();

	// Gunction to create the CatScore
function CatScores () {
	Catnb = []
	for (var i = 0; i < CatImg.length; i++) {
		Catnb.push(0);
	}
	return Catnb
};

// Function to initialize the List of casts

function CatInitialize() {
	for (var i=0; i<CatImg.length;i++){
		$('#cat-list').append('<br><li id="cat'+ i +'">The cat n°' + i + ' is called ' + CatName[i] + ' and clicked <span id ="cat-score' + i +'">' +CatScore[i] + '</span> time(s)</li>');
	}	
};




function CatUpdate(counter) {
	selector = $('#cat-score' + counter);

	var Cat = counter % CatImg.length; 
 	CatScore[Cat]++;

 	selector.text(CatScore[Cat]);	
}

// Simple function to add the TOTAL number of clicks 
function ClickCounter(counter) {
	counter++;
	$('#counter').text('You clicked the cats '+ counter+' time(s)');

	//Udpate the image
	CatDisplay(counter);
	return counter;
}



function CatDisplay(counter) {
	var Cat = counter % CatImg.length; 

	$('#target').attr('src', CatImg[Cat]);
	$('#catheader').text("Let's click on this beautiful cat, " + CatName[Cat] +'!');

	CatUpdate(counter);
}


function CatCliker() {
	var i = 0;

	CatInitialize();
	CatDisplay(i); 

	$('#target').click(function(e) {
		i = ClickCounter(i);
	} );

}
	
// Run the progamm
CatCliker();
