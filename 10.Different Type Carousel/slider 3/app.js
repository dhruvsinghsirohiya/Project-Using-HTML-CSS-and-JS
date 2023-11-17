var slider = document.querySelectorAll('.slide');
var images = [
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg"
]
var i = 0;

function slides() {
    // console.log(i);
    slider[0].src = images[i];
    // console.log(images[i])
    if (i < (images.length - 1)) {
        i++;
    } else {
        i = 0;
    }
}
setInterval(slides, 2000);