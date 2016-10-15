$(document).ready function(){
	var computerChoice = 1 + Math.floor(Math.random() *99);
	var userChoices= 0;
	var crystalValue = [17,8,5,1];

	function startGame(){
		computerChoice = 1 + Math.floor(Math.random() * 99);
		crystalValue = [];
		confirm('Are You Ready To Play?');
	}
		$('#number').text(computerChoice);
		for (var i = 0; i < numbers.length; i++) {
				var imageCrystal = $('#picks');
				imageCrystal.attr('data-num', crystalValue[i]);
				imageCrystal.attr(
					'src',
					'http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=40626367',
					'https://s-media-cache-ak0.pinimg.com/originals/7b/d6/05/7bd605f59a9cd4907a448f8e197bffde.jpg',
					'https://s-media-cache-ak0.pinimg.com/originals/3b/d4/bf/3bd4bf428abb2c0051bb85913c6872b0.jpg',
					'http://www.rocks-fossils.com/myblog/wp-content/uploads/2014/07/citrine002.gif'
					);
				imageCrystal.attr('alt', 'crystals');
				imageCrystal.addClass('crystalImage');
				$('#picks').append(imageCrystal);
			}


$('#button').on(
				'click', function(event) {
					userChoices = crystalValue + parseInt($(this).data('num'));

		$('#yourScore').text(userChoices);

			if(userChoices == computerChoice){
				alert('Great Job! You are the crystal master');
			}
			if(userChoices > computerChoice){
				alert('Too High! Now into the crystal abyss you go!');
			}

}
}
}