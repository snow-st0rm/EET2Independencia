// NavBar Button
document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".bttnz");

    buttons.forEach(function(button) {
        button.addEventListener("mousedown", function() {
            console.log("Button clicked");
            button.classList.add("active");
        });

        button.addEventListener("mouseup", function() {
            console.log("Button released");
            button.classList.remove("active");
        });
    });
});

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.bttnz');
    buttons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault(); 
            var sectionId = this.dataset.section; 
            scrollToSection(sectionId); 
        });
    });
});

// Card Button
document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".crdbttnz");

    buttons.forEach(function(button) {
        button.addEventListener("mousedown", function() {
            console.log("Button clicked");
            button.classList.add("active");
        });

        button.addEventListener("mouseup", function() {
            console.log("Button released");
            button.classList.remove("active");
        });
    });
});

//Countdown
function updateCountdown(elementId, endTime) {
    const countdownElement = document.getElementById(elementId);
    if (!endTime) {
        countdownElement.innerHTML = "¡No hay eventos!";
        return;
    }

    const targetDate = new Date(endTime).getTime();
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            countdownElement.innerHTML = "¡El evento está sucediendo ahora!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}

updateCountdown('countdown1', '2024/09/05 8:00:00');
updateCountdown('countdown2', '2024/10/10 14:00:00');
updateCountdown('countdown3', '2024/11/15 8:00:00');

// Form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const sbjct = document.getElementById('sbjct');
    const msg = document.getElementById('msg');
    const phone = document.getElementById('phone');

    let valid = true;
    let warnings = '';

    if (!name.checkValidity()) {
        valid = false;
        warnings += 'Nombre: ' + name.title + '\n';
    }

    if (!email.checkValidity()) {
        valid = false;
        warnings += 'Email: ' + email.title + '\n';
    }

    if (!sbjct.checkValidity()) {
        valid = false;
        warnings += 'Asunto: ' + sbjct.title + '\n';
    }

    if (!msg.checkValidity()) {
        valid = false;
        warnings += 'Cuerpo: ' + msg.title + '\n';
    }

    if (!valid) {
        alert('Verifique los siguientes problemas:\n' + warnings);
    } else {
        alert('Form submitted successfully!');
        this.submit();
    }
});

// Contact Button
document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".cntcbttnz");

    buttons.forEach(function(button) {
        button.addEventListener("mousedown", function() {
            console.log("Button clicked");
            button.classList.add("active");
        });

        button.addEventListener("mouseup", function() {
            console.log("Button released");
            button.classList.remove("active");
        });
    });
});

//Footer Button
window.onscroll = function() {scrollFunction()};
        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("back-to-top").style.display = "block";
            } else {
                document.getElementById("back-to-top").style.display = "none";
            }
        }
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
