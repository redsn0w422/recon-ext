console.log(window.location.href);
// console.log(window.location.href.split("/"));
url_items = window.location.href.split("/");
if (url_items.length == 5) {
	console.log(url_items.length);
	repo_name = url_items[url_items.length - 1];
	owner_name = url_items[url_items.length - 2];
	console.log(repo_name);
	console.log(owner_name)

	// var sheet = document.createElement("style");
	// var inner = ".star-ratings-css {";
	// inner += "unicode-bidi: bidi-override;";
	// inner += "color: #c5c5c5;";
	// inner += "font-size: 25px;";
	// inner += "height: 25px;";
	// inner += "width: 100px;";
	// inner += "margin: 0 auto;";
	// inner += "position: relative;";
	// inner += "padding: 0;";
	// inner += "text-shadow: 0px 1px 0 #a2a2a2;";
	// inner += "&-top {";
	// inner += "color: #e7711b;";
	// inner += "padding: 0;";
	// inner += "position: absolute;";
	// inner += "z-index: 1;";
	// inner += "display: block;";
	// inner += "top: 0;";
	// inner += "left: 0;";
	// inner += "overflow: hidden;";
	// inner += "}";
	// inner += "&-bottom {";
	// inner += "padding: 0;";
	// inner += "display: block;";
	// inner += "z-index: 0;";
	// inner += "}";
	// inner += "}";
	// sheet.innerHTML = inner;
	// document.body.appendChild(sheet);

	$('.public').css('width', '100%');
	$('.public').append("<div id=\"loading\" style=\"font-size: 15.5px\">Waiting for score</div>")
	$.ajax({
	    url: "https://localhost:5000/score",
	    type: 'GET',
	    dataType: 'json',
	    data: {
	    	'owner': owner_name,
	    	'repo': repo_name
	    },
	    success: function (result) {
			console.log(result);
			var score = result.score;
			console.log(score);
			var rating = score * 5;

			var item = "<div class='star-ratings-css'>";
  			item += "<div class='star-ratings-css-top' ";
  			item += "style='width: " + Math.round(score * 100) + "%";
  			console.log(Math.round(score * 100));
  			item += "'><span>★</span><span>★</span><span>★</span>";
  			item += "<span>★</span><span>★</span></div>";
  			item += "<div class='star-ratings-css-bottom'>";
  			item += "<span>★</span><span>★</span><span>★</span>";
  			item += "<span>★</span><span>★</span></div>"
  			item += "</div>";
  			console.log(item);

  			$('#loading').remove();
			$(".public").append("<div id='rateYo-wrapper' style=\"margin-top: 2px\"><div id='rateYo' style=\"margin-left: -5px; float: left;\"></div></div>");
			$("#rateYo").rateYo({
				rating: score * 5,
				readOnly: true,
				starWidth: "20px",
				ratedFill: "#0366d6"
			});

			var color = "";

			var roundedScore = Math.round(score * 1000) / 1000;
			roundedScore *= 100;
			roundedScore = Math.round(roundedScore * 1000) / 1000
			var scorediv = "<div style=\"font-size: 15.5px; margin-top: -3px;\">" + roundedScore + "%" + "</div>"
			$(".public").append(scorediv);
	    },
	    error: function (error) {
	    	console.log("ERROR");
			console.log(error);
	    }
	});
} 
else {
	console.log("Bad URL.")
}
