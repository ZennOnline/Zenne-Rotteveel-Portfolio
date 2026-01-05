// Tabs functionality
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
      });
});

// Poster sliders
  const slides = document.querySelectorAll('.poster-slider img');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
  }

  next.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  prev.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});

// Gallery sliders
const leftArrow = document.querySelector('.gallery-arrow.left');
const rightArrow = document.querySelector('.gallery-arrow.right');
const galleryGrid = document.querySelector('.gallery-grid');
const pages = document.querySelectorAll('.gallery-page');
let currentPage = 0;
const totalPages = pages.length;

function updateGallery() {
  galleryGrid.style.transition = 'transform 0.5s ease';
  galleryGrid.style.transform = `translateX(-${currentPage * 100}%)`;
}

// Infinite looping logic
  rightArrow.addEventListener('click', () => {
    currentPage++;
      if (currentPage >= totalPages) {
        currentPage = 0;
        galleryGrid.style.transition = 'none';
        galleryGrid.style.transform = `translateX(0%)`;
      void galleryGrid.offsetWidth;
      galleryGrid.style.transition = 'transform 0.5s ease';
  } else {
    updateGallery();
  }
  });
  leftArrow.addEventListener('click', () => {
    currentPage--;
    if (currentPage < 0) {
      currentPage = totalPages - 1;
      galleryGrid.style.transition = 'none';
      galleryGrid.style.transform = `translateX(-${currentPage * 100}%)`;
      void galleryGrid.offsetWidth;
      galleryGrid.style.transition = 'transform 0.5s ease';
  } else {
    updateGallery();
  }
});

// Initialize
updateGallery();