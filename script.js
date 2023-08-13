//make bubble dynamically
function makeBubble()
{
    var clutter = "";
    for (let i = 1; i <=135; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".pbtm").innerHTML = clutter;
}
makeBubble();

//timer function 
var timer = 60;
function dicreaseTime()
{
   var timeFn = setInterval(function()
   {
    if(timer > 0)
    {
        timer--;
        document.querySelector("#timeVal").innerText = timer;
    }
    else 
    {
      document.querySelector(".pbtm").innerHTML = `<h1>Time Over <br> Your Score is ${score} <br> <a href='javascript:void(0)' onclick='window.location.reload()'>Restart</a></h1>`;  
      clearInterval(timeFn);
    }
   },1000);
}
dicreaseTime();

//hit function
var hitNum;
function randomHit()
{
    hitNum = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").innerText = hitNum;
}
randomHit();

//let's increase score 10+
var score = 0;
function increaseScore()
{
    score += 10;
    document.querySelector("#scoreVal").innerText = score;
}

//event bubling
document.querySelector(".pbtm").addEventListener("click",function(event)
{
    var clickedNum = Number(event.target.innerText);
    if(hitNum === clickedNum)
    {
        increaseScore();
        makeBubble();
        randomHit();
    }
})

