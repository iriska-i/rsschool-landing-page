const track = document.getElementById('slider-track');
const prevBtn = document.getElementById('slider-prev');
const nextBtn = document.getElementById('slider-next');
const dotsBox = document.getElementById('slider-dots');
const slides = track.querySelectorAll('.slide');

let current = 0;
const total = slides.length;

// create dots
slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.type = 'button';
  dot.className = 'slider__dot';
  dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
  dot.addEventListener('click', () => goTo(i));
  dotsBox.appendChild(dot);
});
const dots = dotsBox.querySelectorAll('.slider__dot');

function goTo(index) {
  current = (index + total) % total; // loop
  track.style.transform = `translateX(-${current * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('slider__dot--active', i === current));
}

prevBtn.addEventListener('click', () => goTo(current - 1));
nextBtn.addEventListener('click', () => goTo(current + 1));

// swipe (mobile)
let startX = 0;
track.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
}, { passive: true });

track.addEventListener('touchend', (e) => {
  const diff = e.changedTouches[0].clientX - startX;
  if (Math.abs(diff) > 50) goTo(diff < 0 ? current + 1 : current - 1);
});

// keyboard arrows
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') goTo(current - 1);
  if (e.key === 'ArrowRight') goTo(current + 1);
});

goTo(0);