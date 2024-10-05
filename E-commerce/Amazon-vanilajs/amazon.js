const imgs = document.querySelectorAll(".header-slider ul img");
const prevBtn = document.querySelector(".header-slider .control-prev")
const nextBtn = document.querySelector(".header-slider .control-next")

let n = 0;

function changeSlide() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none'
    }
    imgs[n].style.display = 'block'
}
changeSlide();

prevBtn.addEventListener('click', (event) => {
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeSlide()
})
nextBtn.addEventListener('click', (event) => {
    if (n < imgs.length - 1) {
        n++
    } else {
        n = 0
    }
    changeSlide()
})

const scrollContainers = document.querySelectorAll(".products");

scrollContainers.forEach(scrollContainer => {
    scrollContainer.addEventListener('wheel', (event) => {
        event.preventDefault(); // Prevent vertical scrolling
        scrollContainer.scrollLeft += event.deltaY; // Scroll horizontally
    });
});

// [products-slider-with-price]
// Function to calculate how many cards are visible in the slider based on container width.
document.addEventListener("DOMContentLoaded", () => {
  const sliderContainer = document.querySelector(".products-with-price");
  const productCards = document.querySelectorAll(".product-card");
  const prevBtn = document.querySelector(".products-slider-with-price .scroll-btn .control-prev");
  const nextBtn = document.querySelector(".products-slider-with-price .scroll-btn .control-next");

  let currentIndex = 0;
  let cardsPerView = calculateCardsPerView(); // Calculate the number of visible cards

  // Function to calculate how many cards are visible in the slider based on container width
  function calculateCardsPerView() {
    const containerWidth = sliderContainer.offsetWidth;
    const cardWidth = productCards[0].offsetWidth;
    return Math.floor(containerWidth / cardWidth);
  }

  // Function to update the slider position based on the current index
  function updateSlider() {
    const cardWidth = productCards[0].offsetWidth;
    const offset = -(cardWidth * currentIndex); // The amount by which to move the slider (negative because we're moving left)
    sliderContainer.style.transform = `translateX(${offset}px)`;
  }

  // Move to the next set of products
  function moveNext(event) {
    event.preventDefault(); // Prevent the page from scrolling up
    if (currentIndex + cardsPerView < productCards.length) {
      currentIndex += cardsPerView;
      updateSlider();
    }
  }

  // Move to the previous set of products
  function movePrev(event) {
    event.preventDefault(); // Prevent the page from scrolling up
    if (currentIndex > 0) {
      currentIndex -= cardsPerView;
      updateSlider();
    }
  }

  // Add event listeners to the buttons
  nextBtn.addEventListener("click", moveNext);
  prevBtn.addEventListener("click", movePrev);

  // Recalculate cards per view and update slider on window resize
  window.addEventListener("resize", () => {
    cardsPerView = calculateCardsPerView();
    updateSlider();
  });
});
