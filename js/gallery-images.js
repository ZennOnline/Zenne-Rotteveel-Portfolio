document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const closeBtn = document.querySelector('.image-modal .close');

  document.querySelectorAll('.media-wrapper img').forEach(img => {
    img.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = img.src;
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Dynamic page splitting (3 items per page)
  const galleryGrid = document.querySelector('.gallery-grid');
  let pages = [];
  if (galleryGrid) {
    const allItems = Array.from(galleryGrid.querySelectorAll('.gallery-item'));
    const itemsPerPage = 3;

    // Clear existing pages
    galleryGrid.innerHTML = '';

    // Create pages
    for (let i = 0; i < allItems.length; i += itemsPerPage) {
      const page = document.createElement('div');
      page.classList.add('gallery-page');
      allItems.slice(i, i + itemsPerPage).forEach(item => page.appendChild(item));
      galleryGrid.appendChild(page);
    }

    // Store pages for slider
    pages = Array.from(galleryGrid.querySelectorAll('.gallery-page'));
  }

  // Slider functionality
  if (pages.length > 1) {
    let currentPage = 0;

    const leftArrow = document.querySelector('.gallery-arrow.left');
    const rightArrow = document.querySelector('.gallery-arrow.right');

    function showPage(index) {
      pages.forEach((page, i) => {
        page.style.display = i === index ? 'grid' : 'none';
      });
    }

    leftArrow?.addEventListener('click', () => {
      currentPage = (currentPage - 1 + pages.length) % pages.length;
      showPage(currentPage);
    });

    rightArrow?.addEventListener('click', () => {
      currentPage = (currentPage + 1) % pages.length;
      showPage(currentPage);
    });

    // Initialize first page
    showPage(currentPage);
  } else if (pages.length === 1) {
  }
});