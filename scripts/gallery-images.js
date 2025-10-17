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
});