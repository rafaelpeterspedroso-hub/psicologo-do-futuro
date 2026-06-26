const button = document.getElementById('tech-btn');
const textContent = document.getElementById('text-content');

const futuroTexto = "O psicólogo do futuro unirá a sensibilidade humana à tecnologia avançada, utilizando inteligência artificial, realidade virtual e análise de dados para personalizar terapias, diagnosticar com precisão e tratar fobias em ambientes imersivos, sem perder a empatia, a escuta ativa e o acolhimento, que continuam sendo o verdadeiro diferencial humano.";

button.addEventListener('click', () => {
    textContent.style.opacity = 0;
    
    setTimeout(() => {
        textContent.innerText = futuroTexto;
        textContent.style.color = '#38bdf8';
        textContent.style.opacity = 1;
    }, 300);
    
    button.style.display = 'none';
});
