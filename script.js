/* Scroll desde el botón */
document.getElementById('scroll').onclick = () => window.scrollTo({ top: window.innerHeight - 70, behavior: 'smooth' });

/* Animación al hacer scroll */
const observer = new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'));
}, { threshold: .2 });
document.querySelectorAll('section').forEach(s => observer.observe(s));

/* Lista dinámica de videos */
const videos = [
    { id: 'hK-5XOwraQo', title: 'Speculative Realism (2013) – European Graduate School' },
    { id: '1RuJQPdiqSE', title: 'Conferencia UABC 2019' },
    { id: 'QJ0GR9bf00g', title: 'Course: Speculative Realism – IAI' },
    { id: '0qIHUWMvzoc', title: 'Taller “Harman y el arte” (SPTC)' },
    { id: 'FL6ChtPrVm4', title: 'Art in the Age of AI (2023)' }
];
const list = document.getElementById('videoList');
videos.forEach(v => {
    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `<iframe loading="lazy" src="https://www.youtube.com/embed/${v.id}" allowfullscreen></iframe><h4>${v.title}</h4>`;
    list.appendChild(card);
});
