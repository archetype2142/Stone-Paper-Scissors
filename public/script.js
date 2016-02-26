
function f1(){
	var name = prompt("Allo! your name please? ");
	var comparename = function(choice1, choice2){
		var score1 = 0;
		if (choice1 === choice2){
			alert("The result is a tie!"); 
		}   

		else if (choice1 === "paper") {
			if (choice2 === "rock"){
				alert(name + " won with " + choice1 + " Hurray!");
				score1 = 1;
			}
			else if(choice2 === "scissors"){
				alert("computer won with " + choice2);
				score1 = -1;
			}
		}

		else if(choice1 === "scissors"){
			if(choice2 === "rock"){
				alert("computer won with " + choice2);
				score1 = -1;
			}
			else if(choice2 === "paper"){
				alert(name + " won with " + choice1 + " Hurray!");
				score1 = 1;
			}
		}

		else if(choice1 === "rock"){
			if(choice2 === "paper"){
				alert("computer won with " + choice2);
				score1 = -1;
			}
			else if(choice2 === "scissors"){
				alert(name + " won with " + choice1 + " Hurray!");
				score1 = 1;
			}
		}
		else{
			alert(choice1 + " Dosen't look like 'rock, paper or scissors',you sure you're not blind?");
		}
		return score1;
	};
	do{
		console.log(score);
		var userChoice = prompt(name + " choose one, rock, paper or scissors?");
		var computerChoice = Math.random();
		if (computerChoice < 0.34) {
			computerChoice = "rock";
		} else if(computerChoice <= 0.67) {
			computerChoice = "paper";
		} else {
			computerChoice = "scissors";
		} alert("Computer chose " + computerChoice);
		var score += comparename (userChoice, computerChoice);
		var playAgain = prompt("type retry to play again btw your score is " + score);
	}while(playAgain == "retry");

	$("#score").html(score);
}
function f2(){
	$("#score").html(0);
	score = 0;
}