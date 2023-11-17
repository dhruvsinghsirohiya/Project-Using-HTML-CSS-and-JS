const arrayOfSentences = [
    "  But whether the sentence is grammatically correct isn’t nearly as important as whether the sentence is fun or beautiful.",
    "I think any sentence more than 100 words is almost guaranteed to be complex, complicated, and enormous.",
    "It's often said that a long sentence is just two or more sentences merged together using a conjunction like and, or, or but.",
    "Thirty words is a long sentence and should be considered the maximum. Short sentences can quickly and reliably relay information."
]
const msg = document.querySelector("#msg");
const typeWords = document.querySelector("#myWords");
const btn = document.querySelector("#btn");
let startTime;
let endTime;

const playGame = () => {
    const randomNum = Math.floor(Math.random() * arrayOfSentences.length);
    // console.log(randomNum);
    msg.textContent = arrayOfSentences[randomNum];
    let date = new Date();
    startTime = date.getTime();
    btn.textContent = "Done";
}

const wordCounter = (str) =>{
    let response  = str.split(" ").length;
    // console.log(response);
    return response;
}

const endGame = () =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime - startTime)/ 1000)
    // console.log(totalTime);
    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round(wordCount / totalTime *60);
    

};

btn.addEventListener("click", function () {
    if (this.innerText === "Start") {
        typeWords.disabled = false;
        typeWords.value = "";
        playGame();
    } else if (this.innerText === "Done"){
        typeWords.disabled = true;
        btn.textContent = "Start";
        endGame();
    }
}
)