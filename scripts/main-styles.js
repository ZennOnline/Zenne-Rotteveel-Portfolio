// Header 
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  if (header) {
    if (!header.querySelector('h1')) {
      const link = document.createElement('a');
      const isIndex = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' ;

      if (!isIndex) {
        link.href = "../index.html";
        link.style.textDecoration = "none";
        link.style.color = "#e50914";
        link.style.cursor = "pointer";
      } else {
        link.href = "#"; // dummy link on index page
        link.style.textDecoration = "none";
        link.style.cursor = "default";
      }

      const h1 = document.createElement('h1');
      h1.textContent = "Zenne Rotteveel";
      h1.style.fontSize = "1.4rem";
      h1.style.fontWeight = "700";
      h1.style.letterSpacing = "0.5px";
      h1.style.margin = "0";

      link.appendChild(h1);
      header.prepend(link);
    }
  }
});

// ===== Header profile switcher (Netflix-style) =====
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  if (!header) return;

  // Avoid duplicates
  if (document.getElementById('profileSwitcher')) return;

  const activeProfile = localStorage.getItem('activeProfile') || 'business';

  // Map profile → image
  const profileImages = {
    business: 'media/profile-business.png',
    personal: 'media/profile-personal.png',
    developer: 'media/profile-developer.png'
  };

  const profileSwitcher = document.createElement('img');
  profileSwitcher.id = 'profileSwitcher';
  profileSwitcher.src = profileImages[activeProfile] || profileImages.business;
  profileSwitcher.alt = 'Switch profile';

  header.appendChild(profileSwitcher);

  // Click → go to profile selector
  profileSwitcher.addEventListener('click', () => {
    window.location.href = 'index.html'; // profile selector
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