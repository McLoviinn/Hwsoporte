function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";


    var x = document.getElementById("nav");
    x.className = "";
}

//menu responsive

function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//estadisticas

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.numero');
    const circles = document.querySelectorAll('.circle');

    counters.forEach((counter, index) => {
        const target = +counter.getAttribute('data-target'); 
        counter.innerText = '0';
        circles[index].style.strokeDasharray = '0, 100';

        const updateCounter = () => {
            const current = +counter.innerText;
            const increment = target / 200;

            if (current < target) {
                counter.innerText = `${Math.ceil(current + increment)}`;
                circles[index].style.strokeDasharray = `${(current / target) * 100}, 100`; 
                setTimeout(updateCounter, 85);
            } else {
                counter.innerText = target;
                circles[index].style.strokeDasharray = `${target}, 100`; 
            }
        };

        updateCounter();
    });
});


//whatsapp

document.addEventListener('DOMContentLoaded', function() {
    const whatsappFloat = document.querySelector('.whatsapp-float');
    const whatsappToast = document.getElementById('whatsapp-toast');
    const closeToast = document.getElementById('close-toast');

    whatsappFloat.style.transition = 'transform 0.3s';
    
    whatsappFloat.addEventListener('mouseenter', function() {
        whatsappFloat.style.transform = 'scale(1.1)';
    });
    
    whatsappFloat.addEventListener('mouseleave', function() {
        whatsappFloat.style.transform = 'scale(1)';
    });

    closeToast.addEventListener('click', function() {
        whatsappToast.style.display = 'none';
        localStorage.setItem('whatsappToastClosed', 'true');
    });

    // Mostrar notificación después de 10 segundos
    setTimeout(function() {
        whatsappToast.style.display = 'block';
    }, 10000);

    // Ocultar notificación después de 30 segundos
    setTimeout(function() {
        whatsappToast.style.display = 'none';
    }, 40000);
});


//scroll sobre nosotros

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.numero');
    const circles = document.querySelectorAll('.circle');
    let countingStarted = false; 

    const startCounting = () => {
        if (countingStarted) return; 
        countingStarted = true; 

        counters.forEach((counter, index) => {
            const target = +counter.getAttribute('data-target'); 
            counter.innerText = '0';
            circles[index].style.strokeDasharray = '0, 100';

            const updateCounter = () => {
                const current = +counter.innerText;
                const increment = target / 200;

                if (current < target) {
                    counter.innerText = `${Math.ceil(current + increment)}`;
                    circles[index].style.strokeDasharray = `${(current / target) * 100}, 100`; 
                    setTimeout(updateCounter, 85);
                } else {
                    counter.innerText = target;
                    circles[index].style.strokeDasharray = `${target}, 100`;
                }
            };

            updateCounter();
        });
    };

    const checkVisibility = () => {
        const section = document.getElementById('sobremi');
        const rect = section.getBoundingClientRect();

        if (rect.top < window.innerHeight && rect.bottom > 0) {
            startCounting(); 
            window.removeEventListener('scroll', checkVisibility);
        }
    };

    window.addEventListener('scroll', checkVisibility); 
});


