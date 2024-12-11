/* CARRUSEL */
const track = document.getElementById('carouselTrack');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;

const updateCarousel = () => {
  const width = track.offsetWidth / track.children.length;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
};

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : track.children.length - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < track.children.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);




