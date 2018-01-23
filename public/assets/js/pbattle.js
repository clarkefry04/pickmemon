//update both to pull user data and elements

let player = {
	//pickme:fire
	swag:100,
	power:20


};

let opponent = {
	//pickme:grass
	swag:100,
	power:20
	
};

const attack = () => {
	let attackButton = document.getElementById("attack-button");
	let restartButton = document.getElementById("restart-button");
	let gameMessage = document.getElementById("game-message");

	let playerattack = determineAttack(player.power);
	opponent.swag -= playerattack;
	printToScreen();

	if (isGameOver(opponent.swag)){
		endGame("Captured Opponent!!!");
		return;
	}

	attackButton.disabled = true;
	gameMessage.innerText = "Opponent has declared an attack!";

	setTimeout(() =>{
	let opponentattack =determineAttack(opponent.power);
	player.swag -= opponentattack;
	printToScreen();

	if (isGameOver(player.swag)){
		endGame("You've Been Defeated!!!");
		return;
	}
	attackButton.disabled = false;
		}, 400);
	}

const endGame = (message) =>{
	document.getElementById("game-message").innerText = message;
	document.getElementById("attack-button").hidden = true;
	document.getElementById("restart-button").hidden = false;
}

//var pickadvantage = function (player.pickmemon, opponent.pickmemon) {
//	If(player.pickmemon==="fire"){
//		if(opponent.pickmemon==="grass"){
//			playerattack + 5;
//		gameMessage.innerText = "SUPER EFFECTIVE!"
//		}
//
//	}
//}

const determineAttack = (power) => {
	return Math.floor(Math.random() * power);
	
}

const isGameOver = (swag) => {
	return swag <= 0;
}

const restart = () => {
	let attackButton = document.getElementById("attack-button");
	player.swag = 100;
	opponent.swag = 100;
	document.getElementById("game-message").innerText = "";
	attackButton.disabled = false;
	attackButton.hidden = false;
	document.getElementById("restart-button").hidden = true;
	printToScreen();
}



const printToScreen = () => {
	document.getElementById("opponent-swag").innerText = opponent.swag;

	document.getElementById("player-swag").innerText = player.swag;
};

printToScreen();