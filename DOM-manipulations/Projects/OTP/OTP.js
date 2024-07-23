function tackleOTPboxes() {
    const boxes = document.getElementById("otp-box-list-id");

    boxes.addEventListener('input', (inputEvnt) => {
        const target = inputEvnt.target;
        const value = target.value;

        if (isNaN(value)) {
            target.value = ""
            return;
        }
        const nextElement = target.nextElementSibling;

        if (nextElement) {
            nextElement.focus();
        }
    })
}

function generateOTP() {
    const genOTP = Math.floor(1000 + Math.random() * 9000)
    const otpElem = document.getElementById("generated-otp-id")

    otpElem.innerText = `Your OTP: ${genOTP}`
}
tackleOTPboxes()
generateOTP();