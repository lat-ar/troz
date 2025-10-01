
document.addEventListener("DOMContentLoaded", function () {
  // Redirección al hacer clic en el botón "Start experience"
  const startBtn = document.getElementById("start-experience");
  if (startBtn) {
    startBtn.addEventListener("click", function () {
      window.open("https://lens.snap.com/experience/c6c9e24c-5828-437a-b9a8-8ca6fe518550", "_blank");
    });
  }
});


