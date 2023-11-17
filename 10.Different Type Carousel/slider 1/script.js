"use strict"
let slides = document.querySelectorAll('.slider');
let flag = 0;

slides[flag].style.display = "block";
function controller1(x) {
   flag += x;
   if (flag == slides.length) {
      flag = 0;
   }
   if (flag < 0) {
      flag = slides.length - 1;
   }
   for (let y of slides) {
      y.style.display = "none"
   }
   slides[flag].style.display = "block";

}

