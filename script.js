var timer = 6;
var score = 0;
var hitrn = 0;
function increaseScore(){
      score += 10;
      document.querySelector("#scrval").textContent = score;
}




function getNewHit(){
   hitrn =  Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent = hitrn;  
}



function makeBubble() {
   var curtter  = "";

for (let i = 1; i <=105 ; i++) {
   var rn = Math.floor(Math.random()*10);
   curtter += `<div class="bubble">${rn}</div>`;
    
}
document.querySelector("#pbtm").innerHTML = curtter;
}
document.querySelector("#timerval")

function runTime(params) {
  var timers = setInterval( function()  {
      if(timer > 0){
         timer--;
         document.querySelector("#timerval").textContent = timer;
      }
      else{
         clearInterval(timers);
         document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>`;
      }
   }, 1000 );
   
}
document.querySelector("#pbtm")
.addEventListener("click" ,function (dets){
 var clickNumber  = (Number(dets.target.textContent))
 if(clickNumber === hitrn){
   increaseScore();
   makeBubble()
getNewHit()
 }

})
runTime()
makeBubble()
getNewHit()