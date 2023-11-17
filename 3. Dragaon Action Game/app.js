let manCharacter = document.querySelector(".man-character");
let gameOver = document.querySelector(".gameOver");
let dragaonCharacter = document.querySelector(".dragaon-character");
let updateCon = document.querySelector(".updateScore");
let finalScore = document.querySelector(".finalScore");
let startBtn = document.querySelector(".startBtn");
let newAudio = new Audio('music.mp3');
let overAudio = new Audio('gameover.mp3');
let cross = true;
let score = 0;



function gamePlay() {
    newAudio.play();
    score = 0;
    const ScoreInt = setInterval(
        () => {
            score += 1;
            updateCon.textContent = `Your Score : ${score}`;
        },
        3000
    )
    gameOver.style.visibility = "hidden";
    dragaonCharacter.classList.add("dragaonCharacterAnimate");
    document.onkeydown = function (e) {
        // console.log("the keycode is", e.keyCode)
        if (e.keyCode === 38) {
            manCharacter.classList.add("manCharacterAnimate");
            setTimeout(
                () => {
                    manCharacter.classList.remove("manCharacterAnimate");
                },
                700
            )
        }
        if (e.keyCode === 39) {
            let manX = parseInt(window.getComputedStyle(manCharacter, null).getPropertyValue("left"));
            manCharacter.style.left = manX + 50 + "px"
        }
        if (e.keyCode === 37) {
            let manX = parseInt(window.getComputedStyle(manCharacter, null).getPropertyValue("left"));
            manCharacter.style.left = manX + -50 + "px"
        }
    }
    setInterval(
        () => {
            let mx = parseInt(window.getComputedStyle(manCharacter, null).getPropertyValue("left"));
            let my = parseInt(window.getComputedStyle(manCharacter, null).getPropertyValue("top"));

            let dx = parseInt(window.getComputedStyle(dragaonCharacter, null).getPropertyValue("left"));
            let dy = parseInt(window.getComputedStyle(dragaonCharacter, null).getPropertyValue("top"));

            let offsetX = Math.abs(mx - dx);
            let offsetY = Math.abs(my - dy);

            // console.log(offsetX , offsetY)
            if (offsetX < 77 && offsetY < 50) {
                newAudio.pause();
                gameOver.style.visibility = "visible";
                overAudio.play();
                clearInterval(ScoreInt);
                setTimeout(
                    () => {
                        overAudio.pause();
                    },
                    1000
                )
                document.onkeydown = function (e) {
                    // console.log("the keycode is", e.keyCode)
                    if (e.keyCode === 38) {
                        setTimeout(
                            () => {
                                manCharacter.classList.remove("manCharacterAnimate");
                            },
                            700
                        )
                    }
                }

                manCharacter.classList.remove("manCharacterAnimate");
                dragaonCharacter.classList.remove("dragaonCharacterAnimate");

            }
        },
        100
    );



}


