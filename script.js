// Muestra un mensaje en la consola cuando la página carga
console.log("¡Bienvenido a la página de contacto de Miguel Salcedo!");

// Ejemplo: mostrar un mensaje al hacer clic en el botón "Regresar"
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector('.btn-regresar');
    if (btn) {
        btn.addEventListener('click', function() {
            alert('Vas a regresar al inicio.');
        });
        btn.addEventListener('mouseenter', function() {
            btn.classList.add('animar');
        });
        btn.addEventListener('mouseleave', function() {
            btn.classList.remove('animar');
        });
    }
});

// Partículas animadas alrededor de la foto
document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('particulas-cv');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        const particles = [];
        const numParticles = 18;

        for (let i = 0; i < numParticles; i++) {
            const angle = (2 * Math.PI / numParticles) * i;
            particles.push({
                baseRadius: 80 + Math.random() * 15,
                angle: angle,
                speed: 0.008 + Math.random() * 0.008,
                size: 3 + Math.random() * 2,
                color: ['#ffffff83', '#000000', '#ffffff83'][i % 3]
            });
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.angle += p.speed;
                const x = 100 + Math.cos(p.angle) * p.baseRadius;
                const y = 100 + Math.sin(p.angle) * p.baseRadius;
                ctx.beginPath();
                ctx.arc(x, y, p.size, 0, 2 * Math.PI);
                ctx.fillStyle = p.color;
                ctx.shadowColor = p.color;
                ctx.shadowBlur = 5;
                ctx.fill();
                ctx.shadowBlur = 0;
            });
            requestAnimationFrame(animateParticles);
        }
        animateParticles();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const titulo = document.querySelector('header h1');
    if (titulo) {
        titulo.style.opacity = 0;
        titulo.style.transform = "translateY(-40px)";
        setTimeout(() => {
            titulo.style.transition = "all 1s";
            titulo.style.opacity = 1;
            titulo.style.transform = "translateY(0)";
        }, 400);
    }
});

// Efecto nav: cambia el fondo al hacer scroll
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 30) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});
