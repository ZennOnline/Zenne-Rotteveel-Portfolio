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

// ===== Profile icon + dropdown (fully JS, no HTML changes) =====
const header = document.querySelector('header');

if (header && !document.getElementById('profile-container')) {
  // Container
  const profileContainer = document.createElement('div');
  profileContainer.id = 'profile-container';
  profileContainer.style.position = 'relative';

  // Profile icon
  const profileButton = document.createElement('img');
  profileButton.id = 'profileButton';
  profileButton.src = 'media/profile-icon.png'; // replace with your icon path
  profileButton.alt = 'Profile';
  profileButton.style.width = '36px';
  profileButton.style.height = '36px';
  profileButton.style.borderRadius = '50%';
  profileButton.style.cursor = 'pointer';

  // Menu
  const profileMenu = document.createElement('div');
  profileMenu.id = 'profileMenu';
  profileMenu.style.position = 'absolute';
  profileMenu.style.top = '45px';
  profileMenu.style.right = '0';
  profileMenu.style.backgroundColor = '#1f1f1f';
  profileMenu.style.borderRadius = '6px';
  profileMenu.style.boxShadow = '0 4px 12px rgba(0,0,0,0.5)';
  profileMenu.style.display = 'none';
  profileMenu.style.zIndex = '20';

  // Buttons
  const businessBtn = document.createElement('button');
  businessBtn.textContent = 'Recruiter';
  businessBtn.dataset.target = '../profile/business.html';
  const personalBtn = document.createElement('button');
  personalBtn.textContent = 'Friend';
  personalBtn.dataset.target = '../profile/personal.html';

  [businessBtn, personalBtn].forEach(btn => {
    btn.style.display = 'block';
    btn.style.width = '100%';
    btn.style.padding = '10px 20px';
    btn.style.border = 'none';
    btn.style.background = 'none';
    btn.style.color = '#fff';
    btn.style.textAlign = 'left';
    btn.style.cursor = 'pointer';
    btn.addEventListener('mouseenter', () => btn.style.backgroundColor = '#333');
    btn.addEventListener('mouseleave', () => btn.style.backgroundColor = 'transparent');
    btn.addEventListener('click', () => {
      window.location.href = btn.dataset.target;
    });
    profileMenu.appendChild(btn);
  });

  // Build DOM
  profileContainer.appendChild(profileButton);
  profileContainer.appendChild(profileMenu);
  header.appendChild(profileContainer);

  // Toggle menu on click
  profileButton.addEventListener('click', () => {
    profileMenu.style.display = profileMenu.style.display === 'block' ? 'none' : 'block';
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!profileButton.contains(e.target) && !profileMenu.contains(e.target)) {
      profileMenu.style.display = 'none';
    }
  });
}


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