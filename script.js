// Small interaction layer: highlights the section currently in view.
// The site intentionally stays lightweight and dependency-free for GitHub Pages.

const links = [...document.querySelectorAll('nav a')];
const sections = [...document.querySelectorAll('main section[id]')];

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => link.classList.toggle(
        'active', link.getAttribute('href') === `#${entry.target.id}`
      ));
    }
  });
}, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

sections.forEach(section => observer.observe(section));
