document.addEventListener('DOMContentLoaded', () => {
  const profiles = document.querySelectorAll('.profile');

  profiles.forEach(profile => {
    profile.addEventListener('click', (e) => {
      e.preventDefault(); // ⬅️ CRITICAL

      const profileType = profile.dataset.profile;
      const target = profile.getAttribute('href');

      localStorage.setItem('activeProfile', profileType);

      // Force navigation AFTER storage
      window.location.assign(target);
    });
  });
});
