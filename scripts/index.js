document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM ready');

  const profiles = document.querySelectorAll('.profile');
  console.log('Profiles found:', profiles.length);

  profiles.forEach(profile => {
    profile.addEventListener('click', () => {
      console.log('Clicked profile');

      const profileType = profile.dataset.profile;
      const target = profile.dataset.target;

      console.log(profileType, target);

      localStorage.setItem('activeProfile', profileType);
      window.location.href = target;
    });
  });
});
