
function f1(){
	var YouChoice = prompt("Do you choose rock, paper or scissors?");
	var computerChoice = Math.random();
	if (computerChoice < 0.34) {
		computerChoice = "rock";
	} else if(computerChoice <= 0.67) {
		computerChoice = "paper";
	} else {
		computerChoice = "scissors";
	} alert("Computer chose " + computerChoice);

	var compare = function(choice1, choice2){
		if (choice1 === choice2){
			alert("The result is a tie!"); 
		}   

		else if (choice1 === "paper") {
			if (choice2 === "rock"){
				alert("You won with " + choice1 + " Hurray!");
			}
			else if(choice2 === "scissors"){
				alert("computer won with " + choice2);
			}
		}

		else if(choice1 === "scissors"){
			if(choice2 === "rock"){
				alert("computer won with " + choice2);
			}
			else if(choice2 === "paper"){
				alert("You won with " + choice1 + " Hurray!");
			}
		}

		else if(choice1 === "rock"){
			if(choice2 === "paper"){
				alert("computer won with " + choice2);
			}
			else if(choice2 === "scissors"){
				alert("You won with " + choice1 + " Hurray!");
			}
		}
		else{
			alert("You should definately learn to read, it helps a lot :)");
		}
	};
	compare(YouChoice, computerChoice);
}
