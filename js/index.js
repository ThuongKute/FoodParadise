window.onscroll = () => {
  navbar.classList.remove("active");
  shoppingCart.classList.remove("active");
};

// header:see-heart
let shoppingCart = document.querySelector(".see-heart");
document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
  navbar.classList.remove("active");
};

let login = document.querySelector(".login");
document.querySelector("#login-btn").onclick = () => {
  login.classList.toggle("active")
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
};

// header:menu-btn
let navbar = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  shoppingCart.classList.remove("active");
};

// new-product 
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1024: {
      items: 4,
    },
    1440: {
      items: 5,
    },
  },
});




