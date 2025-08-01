const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

function hideAllSections() {
  sections.forEach(sec => sec.style.display = 'none');
}

function showSection(id) {
  hideAllSections();
  const section = document.querySelector(id);
  if(section) section.style.display = 'block';
}

showSection('#experience');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); 
    const target = link.getAttribute('href'); 
    showSection(target);
  });
});
