
$( document ).ready(function(){
$(function(){
	$(".devour").on("click", function(event){
		var id = $(this).data("id");
		var newDevour = $(this).data("newdevour");

		var updateDevour = {
			devoured: newDevour
        };
        
	    $.ajax("/api/burgers/" + id, {
	    	type: "PUT",
	    	data: updateDevour
	    }).then(
	    function() {
	    	console.log("testing devour feature", newDevour);
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
	    	console.log("burger deleted", id);
	        location.reload();
	    }
	    );
	});
});
});