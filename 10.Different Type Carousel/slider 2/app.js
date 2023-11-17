const slide = document.querySelectorAll(".slide");
var counter = 0;

// console.log(slide);
slide.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`;
    }
)


function prev() {
    if (counter > 0) {
        counter--;
        console.log(counter);
        slideHandler()
    } else {
        counter = slide.length - 1;
        slideHandler()
    }

}

function next() {
    if (counter < slide.length - 1) {
        counter++;
        console.log(counter);
        slideHandler()
    } else {
        counter = 0;
        slideHandler()
    }
}



const slideHandler = () => {
    slide.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}
