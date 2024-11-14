// Smooth scroll to sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// full screen images
function openFullscreen(img) {
    
    const fullscreenDiv = document.createElement('div');
    fullscreenDiv.classList.add('fullscreen-img');

    
    const fullscreenImage = document.createElement('img');
    fullscreenImage.src = img.src;
    fullscreenImage.alt = img.alt;

    
    fullscreenDiv.appendChild(fullscreenImage);

    
    document.body.appendChild(fullscreenDiv);

    
    fullscreenDiv.onclick = function() {
        document.body.removeChild(fullscreenDiv);
    }
}

