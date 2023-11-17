let qrImg = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

document.addEventListener('keydown', function(event) {
   if(event.keyCode == 13){
    generateQr();
   }
});

const generateQr = () => {
 if(qrText.value.length >0){
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
    console.log(qrImg.src);
    qrImg.classList.add("showImg");
 }else{
    qrText.classList.add("textAnimate")
    setTimeout(
        ()=>{
    qrText.classList.remove("textAnimate")

        },
        1000
    )
 }
};
