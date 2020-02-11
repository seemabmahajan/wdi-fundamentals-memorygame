
let cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank:  "queen",
		suit:  "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage:  "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit:  "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}


];
let cardsInPlay = [];

function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match! ");
	}
	else{
		alert("Sorry, Try Again. ");
	};
}

function flipCard(cardId){
	cardsInPlay.push(cards[cardId].rank);
	console.log("User Pushed : " + cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	
	if(cardsInPlay.length === 2){
	checkForMatch();
	cardsInPlay = [];
    }
}

flipCard(1);
flipCard(3);

