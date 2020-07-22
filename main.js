var cloudEl = document.getElementById("cloudes-div");

var animatedElem = cloudEl.animate([
    { transform: 'translate(100%,0)' },
    { transform: 'translate(-100%,0)' },
    
    
],
{
    duration: 8000,
    playbackRate: 1,
    iterations: Infinity
});

var boatEl = document.getElementById("bird2");

var boatAnimated = boatEl.animate([
    { transform: 'translate(1000px,0)' },
    
    
    
     
],
{
    duration: 12000,
    iterations: Infinity,
    playbackRate: 1,
    
});


var fishEl = document.getElementById("fish2");

var fishAnimated = fishEl.animate([
    { transform: 'translate(1000px,0)' },
    
    
    
],
{
    duration: 10000,
    iterations: Infinity,
    
    playbackRate: 1,
});


