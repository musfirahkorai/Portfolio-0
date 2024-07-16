document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });

            link.classList.add('pop');
            setTimeout(() => {
                link.classList.remove('pop');
            }, 300);
        });
    });

    const sections = document.querySelectorAll('section');
    const navListItems = document.querySelectorAll('nav ul li');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 82;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navListItems.forEach(li => {
            li.classList.remove('active');
            const link = li.querySelector('a');
            if (link && link.getAttribute('href').substring(1) === current) {
                li.classList.add('active');
            }
        });
    });

    // Typewriter effect
    const text = document.querySelector('.typewriter h1');
    const textContent = text.textContent;
    text.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < textContent.length) {
            text.textContent += textContent.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }
    typeWriter();
});
