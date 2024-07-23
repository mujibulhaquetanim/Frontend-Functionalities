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

tackleOTPboxes()