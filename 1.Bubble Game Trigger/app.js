var timmer = 60;
var rnhit = "";
var score = 0;

function scoreHandler() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function bubblesHandler() {
    var clutter = "";
    for (var i = 0; i <= 159; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += ` <div class="w-[40px] h-[40px] cursor-pointer hover:text-red-600 hover:bg-white font-[700] duration-500 text-[white] flex justify-center items-center bg-red-600 rounded-full">${rn}</div>`
    }
    document.querySelector("#bottomElem").innerHTML = clutter;

}

function timmerHandler() {
    const timmerInt = setInterval(
        () => {
            if (0 < timmer) {
                timmer--;
                document.querySelector("#timeVal").textContent = timmer;
            } else {
                clearInterval(timmerInt);
                document.querySelector("#bottomElem").innerHTML = `<div class="text-white text-center text-[30px]"> Game over </br> Your score is ${score}
                <div onclick="playAgain()" class="bg-white text-black text-[16px] font-[800] cursor-pointer hover:text-white hover:bg-[#f52e57]  rounded-xl px-1 py-2"> Play Again </div>
                </div>`
            }
        },
        1000
    )

    return setInterval(timmerInt);
}

function hitHandler() {
    rnhit = Math.floor(Math.random() * 10)
    document.querySelector("#hitVal").innerText = rnhit;

}

document.querySelector("#bottomElem").addEventListener(
    "click",
    function (dets) {
        var clickNum = Number(dets.target.textContent);
        if (clickNum === rnhit) {
            scoreHandler();
            hitHandler();
            bubblesHandler();
        }
    }
)

function play(){
   if(score == 0 && rnhit == 0 && timmer == 60){
       hitHandler();
       bubblesHandler();
       timmerHandler();
   }
    
}

function playAgain() {
    if ( timmer == 0 ) {
        rnhit = 0;
        score = 0;
        timmer = 60;
        play();
    }

}



