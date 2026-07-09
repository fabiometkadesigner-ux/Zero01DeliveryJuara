// 1. Animação de entrada para os botões (Estilo Behance/Premium)
document.addEventListener('DOMContentLoaded', () => {
    const ctaButtons = document.querySelector('.cta-buttons');
    ctaButtons.style.opacity = '0';
    ctaButtons.style.transition = 'opacity 1s ease-in-out';
    
    setTimeout(() => {
        ctaButtons.style.opacity = '1';
    }, 500);
});

// 2. Lógica para detectar dispositivo e redirecionar (Opcional, mas útil)
function detectarLoja() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // Se estiver no Android
    if (/android/i.test(userAgent)) {
        return "https://play.google.com/store/apps/details?id=SEU_ID_AQUI";
    }
    
    // Se estiver no iPhone (iOS)
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "https://apps.apple.com/app/SEU_ID_AQUI";
    }
    
    return "#"; // Caso não detecte, mantém o link padrão
}

// 3. Rastreamento simples de cliques para saber se o app está atraindo pessoas
const links = document.querySelectorAll('.btn-store');
links.forEach(link => {
    link.addEventListener('click', () => {
        console.log("Usuário clicou para baixar o app!");
        // Aqui você poderia integrar com Google Analytics no futuro
    });
});
