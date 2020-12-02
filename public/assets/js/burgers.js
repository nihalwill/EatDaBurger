$(function(){
	$(".devour").on("click", function(event){
		var id = $(this).data("id");
		var eatBurger = $(this).data("newdevour");

		var devouredBurger = {
			devoured: eatBurger
		};

	    $.ajax("/api/burgers/" + id, {
	    	type: "PUT",
	    	data: devouredBurger
	    }).then(
	    function() {
	    	console.log("changed devoured to", eatBurger);
	        location.reload();
	    }
    	);
	});

	$("#add-burger").on("submit", function(event){
		event.preventDefault();

		var newBurger = {
			name: $("#burger").val().trim(),
		};

	    $.ajax("/api/burgers", {
	    	type: "POST",
	    	data: newBurger
	    }).then(
	    function() {
	    	console.log("new burger");
	        location.reload();
	    }
	    );
	});

	$(".delete").on("click", function(event) {
		var id = $(this).data("id");

	    $.ajax("/api/burgers/" + id, {
	    	type: "DELETE",
	    }).then(
	    function() {
	    	console.log("deleted burger", id);
	        location.reload();
	    }
	    );
	});
});