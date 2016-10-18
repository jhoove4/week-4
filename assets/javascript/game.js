 $(document).ready (function(){
  	var computerChoice = 19 +Math.floor(Math.random() *101);
 	var userChoices= 0;
 	var crystalValue = [12,8,5,1];
 	var win = 0;
 	var loss = 0;
 	var yourScore=0;
  

  	confirm('Are You Ready To Play?');
 	function startGame(){
	computerChoice = 19 +Math.floor(Math.random() * 101);
		yourScore =0;
		userChoices=0;
		$('#yourScore').html(yourScore);
		$('#number').text(computerChoice);
	}

 	
 
 	$('button').on('click', function(){
  		var buttonValue = $(this).attr('value');
  		console.log(typeof buttonValue);
  		console.log(typeof yourScore);
  		buttonValue=parseInt(buttonValue);
  		yourScore = yourScore + buttonValue;
  		console.log(yourScore);
  			$('#yourScore').html(yourScore);
  			if(yourScore == computerChoice){
 				win++;
 				$('#wins').html(win);
 				startGame();
				alert('Great Job! You are the crystal master');
				 	confirm('Are You Ready To Play?');

			}
			if(yourScore > computerChoice){
				loss++;
				$('#losses').html(loss);
				startGame();
				alert('You LOSE! Now into the crystal abyss you go!');
				 	confirm('Do You Dare To Play Again?');

		}
  	});
  	
 		$('#number').text(computerChoice);
 		console.log(computerChoice);


		$('#yourScore').text(userChoices);
		console.log(userChoices);
	});
