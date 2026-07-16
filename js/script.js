// SCROLL ANIMATION
const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

// MODAL
function openModal(title) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modal-title").innerText = title;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
console.log("CrownLab 2.0 🚀");