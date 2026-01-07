// Header go back button
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  if (!header) return;

  // Wrapper so the h1 becomes clickable
  const backButton = document.createElement('button');
  backButton.className = 'header-back-button';
  backButton.setAttribute('aria-label', 'Go back');

  const h1 = document.createElement('h1');
  h1.textContent = 'Zenne Rotteveel';
  h1.style.margin = '0';
  h1.style.background = 'transparant';

  // Insert h1 inside button
  backButton.appendChild(h1);

  // Go-back behavior
  backButton.addEventListener('click', () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  });

  header.prepend(backButton);
});


// ===== Header profile switcher =====
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  console.log('activeProfile =', localStorage.getItem('activeProfile'));
  if (!header) return;

  // Avoid duplicates
  if (document.getElementById('profileSwitcher')) return;

  const activeProfile = localStorage.getItem('activeProfile') || 'business';

  // Map profile → image
  const profileImages = {
    stalker: '../media/profile-icon1.png',
    business: '../media/profile-icon2.png',
    friend: '../media/profile-icon4.png',
    recruiter: '../media/profile-icon3.png'
  }; 

  const profileSwitcher = document.createElement('img');
  profileSwitcher.id = 'profileSwitcher';
  profileSwitcher.src = profileImages[activeProfile] || profileImages.business;
  profileSwitcher.alt = 'Switch profile';

  header.appendChild(profileSwitcher);

  // Click → go to profile selector
  profileSwitcher.addEventListener('click', () => {
    window.location.href = '../index.html';
  });
});        

// Footer 
document.addEventListener('DOMContentLoaded', () => {
  let footer = document.querySelector('footer');
  
  if (!footer) {
    footer = document.createElement('footer');
    document.body.appendChild(footer);
  }

  footer.classList.add('auto-footer');
  footer.textContent = "© 2025 Zenne Rotteveel — Created by me, inspired by Netflix";
});