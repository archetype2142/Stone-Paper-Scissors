var score = 0;
var name;

function disp(wl, c1, c2){
	if(wl == "loss"){
		$("#welcome_here").append("<div id = 'result'>" + "<h1>You lost <br>( ͡° ʖ̯ ͡°)</h1>" + "<br>Computer chose: " + c2 + "<br>You chose: " + c1); 
			score--
	}
	else if(wl == "won"){
		$("#welcome_here").append("<div id = 'result'>" + "<h1>You WON! <br>ᕦ( ͡° ͜ʖ ͡°)ᕤ</h1>" + "<br>Computer chose: " + c2 + "<br>You chose: " + c1); 
		score++
	}
	else{
		$("#welcome_here").append("<div id = 'result'>" + "<h1>IT'S A TIE! <br>( ͠° ͟ʖ ͡°)</h1>" + "<br>Computer chose: " + c2 + "<br>You chose: " + c1); 
	}
	  $('#score').text(score);
}

function compare(choice1, choice2){
	if(choice1 == "stone"){
		if(choice2 == "paper")
			disp("loss", choice1, choice2);
		else if(choice2 == "scissors")
			disp("won", choice1, choice2);
		else
			disp("tie", choice1, choice2);
	}
	else if(choice1 == "paper"){
		if(choice2 == "stone")
			disp("won", choice1, choice2);
		else if(choice2 == "scissors")
			disp("loss", choice1, choice2);
		else
			disp("tie", choice1, choice2);
	}
 	else{
 		if(choice2 == "stone")
 			disp("loss", choice1, choice2);
 		else if(choice2 == "paper")
 			disp("won", choice1, choice2);
 		else
 			disp("tie", choice1, choice2);
 	}
}

$("#hide_for_now").hide();
$("#retry").hide();
$("#reset").hide();
$("#submit").hide();

$("#play").click(function(){
	$(".lead").hide();
	$("#name").hide();
	name = $("#name").val();
	$("#welcome_here").append("<div id = 'wel_msg'> <h1>Hi, " + name + "</h1>" + "<p>Welcome to stone paper scissors, Choose one of the following to start playing! </p> </div>");
	console.log("clicked");
	$("#hide_for_now").slideToggle("fast", function(){
	});
})

$(".div_put").click(function(event){
	var status = $(this).attr('id');
	if(status == "stone")
		var userChoice = "stone";
	else if(status == "paper")
		var userChoice = "paper";
	else
		var userChoice = "scissors";
		$(".div_put").hide();
	$("#wel_msg").hide();
	game();

	function game(){
		var computerChoice = Math.random();
		if (computerChoice < 0.34) {
			computerChoice = "stone";
		} else if(computerChoice <= 0.67) {
			computerChoice = "paper";
		} else {
			computerChoice = "scissors";
		} 

		console.log("computer ji ka choice: " + computerChoice + " Insaan ka choice: " + userChoice);
		compare(userChoice, computerChoice);
		
	}
	
	$("#retry").show();
	$("#reset").show();
	$("#submit").show();

	$("#retry").click(function(){
		$("#result").remove();
		$(".div_put").show();
		$(".div_put").click(function(event){
			var status = $(this).attr('id');
			if(status == "stone")
				var userChoice = "stone";
			else if(status == "paper")
				var userChoice = "paper";
			else
				var userChoice = "scissors";
			
			$(".div_put").hide();
		});
	});

	$("#reset").click(function(){
		score = 0;
		$('#score').text(score);
	});
});

$("#submit").click(function(){
	$.post('/test', {name: name, score: score});
	alert('Score submitted! Ask Ritwick ( ͡° ͜ʖ ͡°)');

	location.reload();
});
