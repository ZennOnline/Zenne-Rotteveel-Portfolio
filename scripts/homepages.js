const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.project-filters button');
const projectCards = document.querySelectorAll('.card[data-taggs]');

let activeFilter = 'all';

function filterProjects() {
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

// Zoekveld
searchInput.addEventListener('input', filterProjects);

// Filterknoppen
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    activeFilter = button.dataset.filter;
    filterProjects();
  });
});


const profileButton = document.getElementById('profileButton');
const profileMenu = document.getElementById('profileMenu');

profileButton.addEventListener('click', () => {
  profileMenu.style.display =
    profileMenu.style.display === 'block' ? 'none' : 'block';
});

// Close when clicking outside
document.addEventListener('click', (e) => {
  if (!profileButton.contains(e.target) && !profileMenu.contains(e.target)) {
    profileMenu.style.display = 'none';
  }
});
