document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    hero.style.opacity = '0';
    hero.style.transition = 'opacity 1s ease-in-out';
    
    setTimeout(() => {
        hero.style.opacity = '1';
    }, 200);

    const links = document.querySelectorAll('.btn-store');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log("Usuário interessado em baixar!");
        });
    });
});
