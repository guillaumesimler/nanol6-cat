//Build a function to count the number of clicks


// ============================== Model ============================ 
var model = {
	currentCat: null,
	AdminMode: false,
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
		AdminView.init();
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

	},

	setAdmin: function() {
		if (model.AdminMode) {
			model.AdminMode = false;
		} else {
			model.AdminMode = true;
		}
	},

	saveAdmin: function() {
		model.currentCat.CatName = $("#cat-I-Name").val();
		model.currentCat.CatUrl= 'images/' +  $("#cat-I-Url").val();
		model.currentCat.CatCount =	$("#cat-I-Count").val();

		model.AdminMode = false;
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
		var cat = octopus.getCat();

		$('#catheader').text('This pretty cat is called ' + cat.CatName);
		$('#cattarget').attr('src', cat.CatUrl);
		$('#catcount').text('It was clicked ' + cat.CatCount + ' time(s).');

		AdminView.render();
	}

};

	// -------------------- Cat List View -------

var catListview = {

	init: function() {
		$('#cat-list').children().remove();

		this.render(); 
		
	},

	render: function() {
		var cats = octopus.getCats();
		var i = 0;

		cats.forEach(function(cat) {
			var catId = 'cat' + i;
			$('#cat-list').append('<li id="'+ catId +'"> This cat is called ' + cat.CatName +'</li>');
			i++;
		});

		this.move();
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
	}
};

	// -------------------- Admin View -------

var AdminView = {

	init: function(){
		this.render();

		//Use the admin Button

		$('#AdminButton').click(function(e){
			octopus.setAdmin();
			AdminView.render();
		});

		// Use the cancel Button

		$('#cat-B-Cancel').click(function(e) {
			octopus.setAdmin();
			AdminView.render();
		});

		// Use the saveButton

		$('#cat-B-Save').click(function(e) {
			octopus.saveAdmin();

			$('#cat-list').children().remove();
			
			catListview.render();
			catView.render();
			AdminView.render();
		});
		
	},

	render: function(){

		var cat = model.currentCat;

		if (model.AdminMode) {
			var RenderUrl = cat.CatUrl.replace('images/','');

			$("#cat-I-Name").attr("value", cat.CatName);
			$("#cat-I-Url").attr("value", RenderUrl);
			$("#cat-I-Count").attr("value", cat.CatCount);
			$("#AdminDisplay").show();
		} else {
			$("#AdminDisplay").hide();
		}
	}

};


// =================================== Running the program
octopus.init();