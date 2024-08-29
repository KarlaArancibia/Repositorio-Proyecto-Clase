document.addEventListener('DOMContentLoaded', function() {
    const notas = document.querySelectorAll('.nota-informativa');
    let indiceActual = 0;

    function mostrarNotaAleatoria() {
        let indiceNuevo;
        
        
        do {
            indiceNuevo = Math.floor(Math.random() * notas.length);
        } while (indiceNuevo === indiceActual);
        
        
        notas[indiceActual].classList.remove('visible');
        
        
        notas[indiceNuevo].classList.add('visible');
        
        
        indiceActual = indiceNuevo;
    }

    
    mostrarNotaAleatoria();

    setInterval(mostrarNotaAleatoria, 6000);
});
