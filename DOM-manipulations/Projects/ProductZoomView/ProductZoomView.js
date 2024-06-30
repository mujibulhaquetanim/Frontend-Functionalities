let imgZoom = document.getElementById("imgZoom");

imgZoom.addEventListener("mousemove", (event) => {
    imgZoom.style.setProperty("--display", "block");
    let pointer = {
        x: (event.offsetX * 100) / imgZoom.offsetWidth,
        y: (event.offsetY * 100) / imgZoom.offsetHeight
    }
    imgZoom.style.setProperty("--zoom-x", `${pointer.x}%`);
    imgZoom.style.setProperty("--zoom-y", `${pointer.y}%`);
});

imgZoom.addEventListener("mouseleave", () => {
    imgZoom.style.setProperty("--display", "none");
})