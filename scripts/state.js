
 const gameAudio = new Audio('audio/bicho_power_up.mp3');

 function initializeGameAudio() {
      gameAudio.volume = 0.6;
 }

 window.onload = function() {
        initializeGameAudio();
 };

window.addEventListener('gameStateChange', function(event) {
	    const gameState = event.detail.state;
	    if (gameState === 'start') {
	        gameAudio.play().catch(error => console.error("Audio play failed: ", error));
	    } else if (gameState === 'over') {
	        gameAudio.pause();
	        gameAudio.currentTime = 0;
	    }
});

window.addEventListener('unload', function () {
	gameAudio.pause();
	gameAudio.currentTime = 0;
});