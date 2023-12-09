// Import stylesheets
import './style.css';

const starRating = document.getElementById('starRating');
const ratingMessage = document.getElementById('ratingMessage');
const maxStars = 5;
let currentRating = 0;

// Create stars dynamically
for (let i = 1; i <= maxStars; i++) {
  const star = document.createElement('span');
  star.className = 'star';
  star.innerHTML = '&#x2606;';
  star.setAttribute('data-rating', i);
  starRating.appendChild(star);

  function updateStars(hoverRating) {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
      if (index < (hoverRating || currentRating)) {
        star.classList.add('active');
      } else {
        star.classList.remove('active');
      }
    });
  }

  function updateRatingMessage() {
    ratingMessage.textContent = `You rated it ${currentRating} stars!`;
  }

  star.addEventListener('click', function () {
    currentRating = i;
    updateRatingMessage();
    updateStars();
  });

  star.addEventListener('mouseover', function () {
    updateStars(i);
  });

  star.addEventListener('mouseout', function () {
    updateStars();
  });
}
