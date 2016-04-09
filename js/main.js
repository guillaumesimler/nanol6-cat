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


var Cataction = CatActions();
	

var CatScore = CatScores();

var ClickStart = false;

	// Gunction to create the CatScore
function CatScores () {
	var Catnb = [];
	for (var i = 0; i < CatImg.length; i++) {
		Catnb.push(0);
	}
	return Catnb;
};

function CatActions() {
	var Catnb = [];
	for (var i = 0; i < CatImg.length; i++) {
		Catnb.push($('#Cat' +i));
	}
	return Catnb;
};

// Function to initialize the List of casts

function CatInitialize() {
	for (var i=0; i<CatImg.length;i++){
		$('#cat-list').append('<br> <li id="cat'+ i +'">The cat n°' + i + ' is called ' + CatName[i] + ' and clicked ' +CatScore[i] + ' time(s)</li>');
	}
	ClickStart = true;
};


// Update the score of the single cats

function CatUpdate(counter) {

	var Cat = counter % CatImg.length; 
	var $selector = $('#cat' + Cat);

 	CatScore[Cat] = CatScore[Cat]+ 1;

 	$selector.text('The cat n°' + Cat + ' is called ' + CatName[Cat] + ' and clicked ' + CatScore[Cat] + ' time(s)');	
}


// Simple function to add the TOTAL number of clicks 
function ClickCounter(counter) {
	//Udpate the image
	CatDisplay(counter);

	counter++;
	$('#counter').text('You clicked the cats '+ counter+' time(s)');

	
	return counter;
}


// Enables to load the image
function CatDisplay(counter) {
	var Cat = counter % CatImg.length; 

	$('#target').attr('src', CatImg[Cat]);
	$('#catheader').text("Let's click on this beautiful cat, " + CatName[Cat] +'!');

	// Update the value
	if (ClickStart) {
		CatUpdate(counter);
	}
}


// Starting the 
function CatCliker() {
	var i = 0;
	
	CatDisplay(i); 
	CatInitialize();
	
	$('#target').click(function(e) {
		i = ClickCounter(i);
	});

	Cataction.forEach(function(cat) {
		console.log(cat);
		cat.click(function(e){
			console.log(e);
		});
	});
	
	
}
	
// Run the progamm
CatCliker();
