//Build a function to count the number of clicks


// ============================== Model ============================ 
var model = {
	currentCat: null,
	Cats:[{
		CatName: 'Matoux',
		CatUrl: 'images/cat1.jpg',
		CatCount: 0},

		{
		CatName: 'Gustav',
		CatUrl: 'images/cat2.jpg',
		CatCount: 0},

		{
		CatName: 'Ingo',
		CatUrl: 'images/cat3.jpg',
		CatCount: 0},
	
		{
		CatName: 'Emil',
		CatUrl: 'images/cat4.jpg',
		CatCount: 0},
	
		{
		CatName: 'Gunther',
		CatUrl: 'images/cat5.jpg',
		CatCount: 0
	}]
};




// ============================== Octopus ============================ 

var octopus = {
	init: function() {
		//Take the first cat for install
		model.currentCat = model.Cats[0];

		catListview.init();
		catView.init();
	},

	getCat: function(){
		return model.currentCat;
	},

	getCats: function(){
		return model.Cats;
	},

	addCount: function(cat){
		cat.CatCount++;
	},

	setCat: function(cat) {
		model.currentCat = cat;

	}
};



// ============================== Views ============================ 

	// -------------------- Cat View -------
var catView = {

	init: function() {
		this.render();
		$('#cattarget').click(function(e) {
			octopus.addCount(model.currentCat);
			catView.render();
		});
	},

	render: function() {
		cat = octopus.getCat();

		$('#catheader').text('This pretty cat is called ' + cat.CatName);
		$('#cattarget').attr('src', cat.CatUrl);
		$('#catcount').text('It was clicked ' + cat.CatCount + ' time(s).');
	}

};

	// -------------------- Cat List View -------

var catListview = {

	init: function() {
		this.render(); 
		this.move();
	},

	render: function() {
		var cats = octopus.getCats();
		var i = 0;

		cats.forEach(function(cat) {
			var catId = 'cat' + i;
			$('#cat-list').append('<li id="'+ catId +'"> This cat is called ' + cat.CatName +'</li>');
			i++;
		});
	},

	move: function(){
		var cats = octopus.getCats();
		var i = 0;

		cats.forEach(function(cat) {
			var catId = '#cat' + i;
		
			$(catId).click(function(e){
				octopus.setCat(cat);
				catView.render();				
			});
			i++;


		});

		console.log('catListview.move')
	}
};


octopus.init();