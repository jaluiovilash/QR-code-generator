console.log("Program started");


function generateQR() {


    let imgQR = document.getElementById("imgQR");
    let qrImg = document.getElementById("qrImg");
    let qrText = document.getElementById("qrText");

    if (qrText.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgQR.classList.add("show-img");
    }
    else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}