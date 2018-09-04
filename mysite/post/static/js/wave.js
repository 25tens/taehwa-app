var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var resolution = window.devicePixelRatio || 1;

var waves = [];
var resized = false;

var vw, vh;
resizeCanvas();

var wave1 = createWave(context, {
  amplitude: 50,
  duration: 4,
  fillStyle: "rgba(103,58,183,0.8)",
  frequency: 2.5,
  width: vw,
  height: vh,
  segments: 100,
  waveHeight: vh * 0.25
});

var wave2 = createWave(context, {
  amplitude: 100,
  duration: 2,
  fillStyle: "rgba(63,81,181,0.7)",
  frequency: 1.5,
  width: vw,
  height: vh,
  segments: 100,
  waveHeight: vh * 0.25
});

waves.push(wave1, wave2);

TweenMax.to(waves, 10, {
  waveHeight: vh / 2,
  ease: Sine.easeInOut,
  repeat: -1,
  repeatDelay: 1,
  yoyo: true
});

TweenMax.to(wave1, 6, {
  amplitude: 10,
  ease: Sine.easeInOut,
  repeat: -1,
  yoyo: true
});

TweenMax.to(wave2, 7, {
  amplitude: 25,
  ease: Sine.easeInOut,
  repeat: -1,
  yoyo: true
});

window.addEventListener("resize", function() {
  resized = true;
});

TweenLite.ticker.addEventListener("tick", update);

function update() {
  
  var len = waves.length;
  
  if (resized) {
    
    resizeCanvas();
    
    for (var i = 0; i < len; i++) {
      waves[i].resize(vw, vh);
    }
    
    resized = false;
  }
  
  context.clearRect(0, 0, vw, vh);  
  context.globalCompositeOperation = "soft-light";
  
  for (var i = 0; i < len; i++) {
    waves[i].draw();
  }
}
// make some waves.
var ocean = document.getElementById("ocean"),
    waveWidth = 10,
    waveCount = Math.floor(window.innerWidth/waveWidth),
    docFrag = document.createDocumentFragment();

for(var i = 0; i < waveCount; i++){
  var wave = document.createElement("div");
  wave.className += " wave";
  docFrag.appendChild(wave);
  wave.style.left = i * waveWidth + "px";
  wave.style.webkitAnimationDelay = (i/100) + "s";
}

ocean.appendChild(docFrag);


