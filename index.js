var usedNums = new Array(76);
Window.onload = newCard 
function newCard() {
	//Starting loop through each square card
	for(let i=0; i < 24; i++) {  
		setSquare(i);

	}
}

function setSquare(thisSquare) {
	let currSquare = "square"+thisSquare;
	let newNum;
	
	let colPlace =new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
	
	do {
		newNum =(colPlace[thisSquare] * 1) + getNewNum() + 1;
	}
	while (usedNums[newNum]);
	
	usedNums[newNum] = true;
	document.getElementById(currSquare).innerHTML = newNum;
}

function getNewNum() {
	return Math.floor(Math.random() * 75);
	
}

function anotherCard() {
	for(let i=1; i<usedNums.length; i++) {
	usedNums[i] = false;
	}
	
	newCard();
} 