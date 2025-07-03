const toggleBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const crossbtn = document.getElementById('crossbtn');
const ham = document.getElementById('ham');
const track = document.getElementById('review-track');
let menuOpen = false;

toggleBtn.addEventListener('click', () => {
  menuOpen = !menuOpen;

  if (menuOpen) {
    mobileMenu.classList.remove('hidden', 'scale-y-0');
    mobileMenu.classList.add('scale-y-100');
    
    ham.classList.add('hidden');
    crossbtn.classList.remove('hidden');
  } else {
    mobileMenu.classList.add('scale-y-0');
    setTimeout(() => mobileMenu.classList.add('hidden'), 300); // wait for animation
    mobileMenu.classList.remove('scale-y-100');
    crossbtn.classList.add('hidden');
    ham.classList.remove('hidden');
  }
});
function filterMenu(category) {
    const cards = document.querySelectorAll('.menu-card');
    cards.forEach(card => {
      if (card.classList.contains(category)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  let index = 0;
  const totalSlides = track.children.length;

  setInterval(() => {
    index = (index + 1) % totalSlides;
    track.style.transform = `translateX(-${index * 100}%)`;
  }, 4000); 

  document.addEventListener("DOMContentLoaded", function() {
      const cartPanel = document.getElementById("cart-panel");
      const openCartBtn = document.getElementById("cart-icon");
      const closeCartBtns = document.querySelectorAll("#cart-close-btn");

      openCartBtn?.addEventListener("click", () => {
        cartPanel.classList.remove("right-[-100%]");
        cartPanel.classList.add("right-0");
      });

      closeCartBtns.forEach(btn => {
        btn.addEventListener("click", () => {
          cartPanel.classList.remove("right-0");
          cartPanel.classList.add("right-[-100%]");
        });
      });
    });