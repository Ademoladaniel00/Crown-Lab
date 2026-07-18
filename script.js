// ✅ Put it right at the top

// MAKE SURE JS IS CONNECTED
console.log("JS Connected ✅");

// FADE-IN ON LOAD
window.addEventListener("load", () => {
  document.querySelector(".hero-content").classList.add("show");
});
// FADE IN ANIMATION
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

elements.forEach(el => observer.observe(el));

// MODAL
function openModal(title, desc) {
  document.getElementById('modal').style.display = 'flex';
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-desc').innerText = desc;
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
console.log("CrownLab 2.0 🚀");