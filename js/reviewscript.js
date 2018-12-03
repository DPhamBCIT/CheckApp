	var review_array = new Array();
	var rating = 0;
	var fives = 0;
	var fours = 0;
	var threes = 0;
	var twos = 0;
	var ones = 0;
	
	function edit() {
		document.getElementById("star1").onmouseover = function() {starhover(1)};
		document.getElementById("star2").onmouseover = function() {starhover(2)};
		document.getElementById("star3").onmouseover = function() {starhover(3)};
		document.getElementById("star4").onmouseover = function() {starhover(4)};
		document.getElementById("star5").onmouseover = function() {starhover(5)};
		
		document.getElementById("star1").onmouseout = function() {starout()};
		document.getElementById("star2").onmouseout = function() {starout()};
		document.getElementById("star3").onmouseout = function() {starout()};
		document.getElementById("star4").onmouseout = function() {starout()};
		document.getElementById("star5").onmouseout = function() {starout()};
		
		document.getElementById("star1").onclick = function() {starclick(1)};
		document.getElementById("star2").onclick = function() {starclick(2)};
		document.getElementById("star3").onclick = function() {starclick(3)};
		document.getElementById("star4").onclick = function() {starclick(4)};
		document.getElementById("star5").onclick = function() {starclick(5)};
		
		function starhover(num) {
			if (num > 4) {
			document.getElementById("star5").src="./images/starfill.png";
			}
			if (num > 3) {
			document.getElementById("star4").src="./images/starfill.png";
			}
			if (num > 2) {
			document.getElementById("star3").src="./images/starfill.png";
			}
			if (num > 1) {
			document.getElementById("star2").src="./images/starfill.png";
			}
			if (num > 0) {
			document.getElementById("star1").src="./images/starfill.png";
			}
		}
		
		function starout() {
			if (rating < 5) {
				document.getElementById("star5").src="./images/star.png";
				if (rating < 4) {
					document.getElementById("star4").src="./images/star.png";
					if (rating < 3) {
						document.getElementById("star3").src="./images/star.png";
						if (rating < 2) {
							document.getElementById("star2").src="./images/star.png";
							if (rating < 1) {
								document.getElementById("star1").src="./images/star.png";
							}
						}
					}
				}
			}
		}
		
		function starclick(num) {
			if (num > 0)
				rating = num;
			starout();
		}
		
		function submitReview() {
			review_array.push(rating);
			average();
			reviewBars(rating);
		}
		document.getElementById("submit").onclick = function() {submitReview()};
		
		function average() {
		var average = 0;
		for (var i = 0; i < review_array.length; i++) {
			average = average + review_array[i];
			}
			average = average / review_array.length;
			average = average.toFixed(1);
			document.getElementById("reviewnum").innerHTML=average;
			reviewBars();
		}
		
		function reviewBars(rating) {
		var total = review_array.length;
			if (rating == 5)
				fives += 1;
			else if (rating == 4)
				fours += 1;
			else if (rating == 3)
				threes += 1;
			else if (rating == 2)
				twos += 1;
			else if (rating == 1)
				ones += 1;
			document.getElementById("bar5").style.width = (250 * (fives / total)) + "px";
			document.getElementById("bar4").style.width = (250 * (fours / total)) + "px";
			document.getElementById("bar3").style.width = (250 * (threes / total)) + "px";
			document.getElementById("bar2").style.width = (250 * (twos / total)) + "px";
			document.getElementById("bar1").style.width = (250 * (ones / total)) + "px";
			document.getElementById("totalnum").innerHTML=total;
		}
	
		document.write();
	}
	edit();