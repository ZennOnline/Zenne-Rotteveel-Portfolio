document.addEventListener("DOMContentLoaded", () => {

// Process thumbnails and handle iframe errors
  const wrappers = document.querySelectorAll(".media-wrapper");

  wrappers.forEach(wrapper => {
    const iframe = wrapper.querySelector("iframe");
    const src = iframe?.getAttribute("src");
    if (!src) return;

    const match = src.match(/embed\/([a-zA-Z0-9_-]{11})/);
    if (!match) return;

    const videoId = match[1];
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    wrapper.style.backgroundImage = `url(${thumbnailUrl})`;
    wrapper.style.backgroundSize = "cover";
    wrapper.style.backgroundPosition = "center";
    wrapper.style.backgroundRepeat = "no-repeat";
    wrapper.style.backgroundColor = "rgba(20,20,20,0.9)";

    let loaded = false;

    // When YouTube iframe finishes rendering
    iframe.addEventListener("load", () => {
      loaded = true;
      wrapper.classList.add("loaded");
    });

    // Handle iframe errors (e.g., Error 153)
    iframe.addEventListener("error", () => {
      iframe.remove(); // remove broken iframe

      // Make wrapper clickable
      wrapper.style.cursor = "pointer";
      wrapper.addEventListener("click", () => {
        window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
      });

      // Add overlay icon like your CSS ::after
      const overlay = document.createElement("div");
      overlay.textContent = "🎬";
      overlay.style.position = "absolute";
      overlay.style.top = "50%";
      overlay.style.left = "50%";
      overlay.style.transform = "translate(-50%, -50%)";
      overlay.style.fontSize = "2rem";
      overlay.style.color = "white";
      overlay.style.opacity = "0.7";
      overlay.style.transition = "opacity 0.6s ease";
      overlay.style.zIndex = "2";
      wrapper.appendChild(overlay);

      // Fade overlay on hover
      wrapper.addEventListener("mouseenter", () => overlay.style.opacity = "0");
      wrapper.addEventListener("mouseleave", () => overlay.style.opacity = "0.7");
    });

    // Backup fade if iframe is slow
    setTimeout(() => {
      if (!loaded) wrapper.classList.add("loaded");
    }, 3000);
});

// Dynamic page splitting (6 items per page)
  const galleryGrid = document.querySelector('.gallery-grid');
  let pages = [];
  if (galleryGrid) {
    const allItems = Array.from(galleryGrid.querySelectorAll('.gallery-item'));
    const itemsPerPage = 6;

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

// Detect single-video pages
  pages.forEach(page => {
    const items = page.querySelectorAll('.gallery-item');
    if (items.length === 1) {
      page.classList.add('single-video');
    }
});

// Slider functionality
  if (pages.length > 1) {
    let currentPage = 0;

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
    // Only one page, just show it
    pages[0].style.display = 'grid';
  }

});
