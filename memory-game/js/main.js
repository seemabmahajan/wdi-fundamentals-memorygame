
let cards = ["queen","queen","king","king"];
let cardsInPlay = [];

function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match! ");
	}
	else{
		console.log("Sorry, Try Again. ");
	}
}

function flipCard(cardId){
	cardsInPlay.push(cards[cardId]);
	console.log("User Pushed : " + cards[cardId]);
	
	if(cardsInPlay.length === 2){
	checkForMatch();
    }
}

flipCard(0);
flipCard(1);

