document.querySelectorAll('.profile').forEach(profile => {
  profile.addEventListener('click', () => {
    const target = profile.dataset.target;
    window.location.href = target;
  });
});
