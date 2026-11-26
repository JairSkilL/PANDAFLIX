// Función para abrir la ventana de información (Modal)
function abrirModal(archivo, titulo, descripcion, capitulo = "Cap. 1") {
    const modal = document.getElementById('modal');
    const imgElement = document.getElementById('modal-img');
    const videoElement = document.getElementById('modal-video');
    
    // Limpiamos el video anterior si es que había uno
    videoElement.pause();
    videoElement.currentTime = 0;

    // Comprobamos si el archivo es un video
    if (archivo.endsWith('.mp4') || archivo.endsWith('.webm') || archivo.endsWith('.mov')) {
        imgElement.style.display = "none"; 
        videoElement.style.display = "block"; 
        
        videoElement.src = archivo;
        
        // Propiedades para autoplay y bucle
        videoElement.loop = true;      
        videoElement.muted = true;     
        videoElement.autoplay = true;  

        let playPromise = videoElement.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("El navegador bloqueó el autoplay.");
            });
        }
    } else {
        videoElement.style.display = "none"; 
        imgElement.style.display = "block"; 
        imgElement.src = archivo;
    }
    
    // Actualizamos los textos
    document.getElementById('modal-title').innerText = titulo;
    document.getElementById('modal-desc').innerText = descripcion;
    
    // Actualizamos el capítulo
    const tagCapitulo = document.querySelector('.modal-tags .tag-text');
    if (tagCapitulo) {
        tagCapitulo.innerText = capitulo;
    }

    modal.style.display = "block";
}

// Función para cerrar el Modal
function cerrarModal() {
    const modal = document.getElementById('modal');
    const videoElement = document.getElementById('modal-video');
    
    if (videoElement) {
        videoElement.pause(); // Pausamos el video al cerrar
    }
    modal.style.display = "none";
}

// --- SOLUCIÓN AL CLIC FUERA ---
// Escuchamos el clic en toda la ventana
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    
    // Si el clic fue exactamente en el fondo oscuro (el contenedor del modal)
    if (event.target === modal) {
        cerrarModal();
    }
});

// Pequeña sorpresa para el botón de reproducir
function alertaPlay() {
    alert("¡Felicidades por nuestro 1 año y 6meses!  Mi Pandita Hermosa❤️ \n\nPrepárate, porque lo mejor de nuestra serie apenas comienza...");
}