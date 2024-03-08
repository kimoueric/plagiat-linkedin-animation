const previous = document.querySelector(".previous");
const btnNext = document.querySelector(".next");
const container = document.querySelector(".container");
const items = document.querySelector(".items");
let allImages = [];
let currentIndex = 0;
let lastIndex = null;
let currentElem = null;
document.querySelectorAll(".sub-text").forEach((image) => {
  allImages.push(image);
});

btnNext.addEventListener("click", next);
previous.addEventListener("click", prev);

function updateImage(index) {
  lastIndex = currentIndex;
  currentIndex = index;

  if (currentIndex >= allImages.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = allImages.length - 1;
  }

  currentElem = allImages[currentIndex];

  container.style.background =
    "url('/assets/images/fond-" +
    currentElem.getAttribute("data-im") +
    ".jpg') center/cover";

  allImages.forEach((image) => image.classList.remove("image-active"));
  currentElem.classList.add("image-active");
}

function next() {
  updateImage(currentIndex + 1);
  items.appendChild(allImages[lastIndex]);
}

function prev() {
  updateImage(currentIndex - 1);
  items.insertBefore(allImages[currentIndex], allImages[lastIndex]);
}
