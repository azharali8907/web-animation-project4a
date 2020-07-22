var sceneryFrames =   [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }
  ];
  
var sceneryTiming = {
    duration: 36000,
    iterations: Infinity,
    playbackRate: -1
  };

  var fishFrames =   [
    { transform: 'translateX(-100%)' },
    { transform: 'translateX(100%)' }
  ];
  
var fishTiming = {
    duration: 36000,
    iterations: Infinity,
    playbackRate: -1
  };

  var background = document.getElementById("cloudes-div");
  var background2 = document.getElementById("fish-div");

  var backgroundMovement = background.animate(sceneryFrames, sceneryTiming);
  var background2Movement = background2.animate(fishFrames, fishTiming);

  backgroundMovement.currentTime = backgroundMovement.effect.getTiming().duration / 2;
  background2Movement.currentTime = background2Movement.effect.getTiming().duration / 2;

  setInterval( function() {
    if (backgroundMovement.playbackRate > 0.4) {
        backgroundMovement.playbackRate *= .7
    }
    if (background2Movement.playbackRate > 0.4) {
        background2Movement.playbackRate *= .7
    }
}, 3000)

  var goFaster = function() {
    backgroundMovement.playbackRate *= 1.2
    background2Movement.playbackRate *= 1.1
}

document.addEventListener("click",goFaster);
