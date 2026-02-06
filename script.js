document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.menu-list a');
    const sections = document.querySelectorAll('.readme-section');
    const scrollContainer = document.getElementById('content-area');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('data-section');
            
            if (!targetId) return;
            
            e.preventDefault();

            navLinks.forEach(l => l.classList.remove('is-active'));
            link.classList.add('is-active');

            sections.forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(targetId).classList.add('active');

            scrollContainer.scrollTop = 0;
        });
    });
});