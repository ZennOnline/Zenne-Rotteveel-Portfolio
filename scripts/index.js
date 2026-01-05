// ===== Profile icon + dropdown (fully JS, no HTML changes) =====
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.profile').forEach(profile => {
    profile.addEventListener('click', () => {
      const target = profile.dataset.target;
      const profileType = profile.dataset.profile; // 👈 new

      // Save selected profile
      localStorage.setItem('activeProfile', profileType);

      // Go to selected page
      window.location.href = target;
    });
  });
});

// On profile selector page ONLY
const lastProfile = localStorage.getItem('activeProfile');
if (lastProfile) {
  window.location.href = lastProfile === 'personal'
    ? 'profile/personal.html'
    : 'profile/business.html';
}

