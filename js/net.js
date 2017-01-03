var net = {
    insertPage: function(path) {
	    josh.clearPrompt();

	    var form = document.getElementById("tv");
    	var page = document.createElement("div");
    	
	    document.body.appendChild(page);
	    form.parentNode.insertBefore(page, form);
	
	    console.log(path);
	
	    $.ajax({
	        type: 'GET',
	        url: path,
	        success: function() {
	            $(page).load(path);
	        },
	        error: function() {
	            $(page).load("nope.html");
	        }
	    });
    }
}