// Wrap everything in DOMContentLoaded for safety
document.addEventListener('DOMContentLoaded', () => {

  /* ======================
     PROJECT FILTER + SEARCH
  ====================== */
  const searchInput = document.getElementById('searchInput');
  const filterButtons = document.querySelectorAll('.project-filters button');
  const projectCards = document.querySelectorAll('.card[data-taggs]');

  let activeFilter = 'all';

  function filterProjects() {
    if (!searchInput) return; // exit if searchInput doesn't exist

    const searchQuery = searchInput.value.toLowerCase();

    projectCards.forEach(card => {
      const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
      const tags = card.dataset.taggs?.toLowerCase() || '';

      const matchesSearch =
        title.includes(searchQuery) || tags.includes(searchQuery);

      const matchesFilter =
        activeFilter === 'all' || tags.includes(activeFilter);

      card.style.display = matchesSearch && matchesFilter ? 'block' : 'none';
    });
  }

  // Add event listener only if search input exists
  if (searchInput) {
    searchInput.addEventListener('input', filterProjects);
  }

  // Add filter buttons listeners only if buttons exist
  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        activeFilter = button.dataset.filter;
        filterProjects();
      });
    });
  }

  /* ======================
     PROFILE SWITCHER
  ====================== */
  const profileButton = document.getElementById('profileButton');
  const profileMenu = document.getElementById('profileMenu');

  if (profileButton && profileMenu) {
    profileButton.addEventListener('click', () => {
      profileMenu.style.display =
        profileMenu.style.display === 'block' ? 'none' : 'block';
    });
  }

});
