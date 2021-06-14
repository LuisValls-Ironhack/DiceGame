	// Player name
	var player1 = "Player 1";
	var player2 = "Player 2";

	// Function to change the player name
	function editNames() {
		player1 = prompt("Change Player1 name");
		

		document.querySelector("p.Player1").innerHTML = player1;
	
	}

	// Function to roll the dice
	function rollTheDice() {
		setTimeout(function () {
			var randomNumber1 = Math.floor(Math.random() * 6) + 1;
			
        createNewPlayer()
		
			
			}
		,2500)};
	
/*I need to think about how to add state to the objects that compose        
this array of objects. 
/* ITERATION 5
function createProduct() {
    const newProductName = document.querySelector('.create-product .input-name');
    const newProductPrice = document.querySelector(
    '.create-product .input-price'
    );
    const cart = document.querySelector('#cart');
    const newRow = document.createElement('tr');*/
