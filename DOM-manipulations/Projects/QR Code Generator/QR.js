const QRcontent = document.getElementById("QRcontent");
const btnCreate = document.getElementById("btnCreate");
const image = document.getElementById("image");

btnCreate.onclick = () => {
    if (QRcontent.value) {
        image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${QRcontent.value}`;
    }
}