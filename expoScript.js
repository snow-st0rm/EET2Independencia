
// Countdown
var botones = document.querySelectorAll(".boton");

botones.forEach(function(boton) {
  boton.addEventListener("click", function() {
    var contenido = this.parentNode.parentNode.querySelector(".contenido");
    var overlay = this.parentNode.parentNode;
    if (contenido.style.display === "none") {
      contenido.style.display = "block";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    } else {
      contenido.style.display = "none";
      overlay.style.backgroundColor = "transparent";
    }
  });
});

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