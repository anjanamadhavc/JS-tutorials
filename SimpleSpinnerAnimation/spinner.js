const spinner = document.querySelector('div');
let isSpinning = true;
let rotateCount = 0;
let startTime = null;
let rAF;
let rotateCounter;


startRotateCounter = () =>{
    rotateCounter= setInterval(() => {rotateCount+=15}, 60)
}

document.body.addEventListener('click',() => {
    if(!isSpinning) {
        console.log("starting at:", rotateCount);
        startRotateCounter();
        draw();
        isSpinning = true;
    }
    else {
        cancelAnimationFrame(rAF);
        clearInterval(rotateCounter);
        console.log("stopping at:",rotateCount);
        isSpinning = false;
        
    }
});

let draw = () => {
    if (rotateCount > 359) {
        rotateCount %= 360;
   }

      spinner.style.transform = `rotate(${rotateCount}deg)`;
    
      rAF = requestAnimationFrame(draw);
}

startRotateCounter();
draw();
