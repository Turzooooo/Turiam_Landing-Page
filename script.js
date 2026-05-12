
// SEARCH FUNCTION


const searchInput = document.querySelector(".search");

searchInput.addEventListener("keyup", function () {
  console.log("Searching for:", searchInput.value);
});



// NAVIGATION ACTIVE EFFECT

const navItems = document.querySelectorAll(".nav li");

navItems.forEach((item) => {
  item.addEventListener("click", function () {

    navItems.forEach((nav) => {
      nav.style.color = "#000";
      nav.style.fontWeight = "400";
    });

    item.style.color = "#ff5a36";
    item.style.fontWeight = "700";
  });
});


// HERO BUTTON

const heroBtn = document.querySelector(".hero-left button");

heroBtn.addEventListener("click", function () {
  alert("Welcome to Shop!");
});


// PRODUCT CARD HOVER EFFECT

const productCards = document.querySelectorAll(".product-card");

productCards.forEach((card) => {

  card.addEventListener("mouseenter", function () {
    card.style.transform = "translateY(-10px)";
    card.style.transition = "0.3s";
  });

  card.addEventListener("mouseleave", function () {
    card.style.transform = "translateY(0)";
  });

});

// ADD TO CART BUTTON

const cartButtons = document.querySelectorAll(".add-to-cart");

cartButtons.forEach((button) => {

  button.addEventListener("click", function () {

    const product =
      button.parentElement.querySelector(".product-name").innerText;

    alert(product + " added to cart!");
  });

});

// CATEGORY CLICK

const categories = document.querySelectorAll(".category");

categories.forEach((category) => {

  category.addEventListener("click", function () {

    const categoryName =
      category.querySelector("h4").innerText;

    alert("You clicked " + categoryName);
  });

});

// TABS SWITCHING

const tabs = document.querySelectorAll(".tabs span");

tabs.forEach((tab) => {

  tab.addEventListener("click", function () {

    tabs.forEach((t) => {
      t.classList.remove("active");
    });

    tab.classList.add("active");
  });

});


// COUNTDOWN TIMER

let days = 8;
let hrs = 6;
let mins = 6;
let secs = 8;

const countdown = document.querySelector(".countdown");

setInterval(() => {

  secs--;

  if (secs < 0) {
    secs = 59;
    mins--;
  }

  if (mins < 0) {
    mins = 59;
    hrs--;
  }

  if (hrs < 0) {
    hrs = 23;
    days--;
  }

  countdown.innerHTML = `
    <span><strong>${days}</strong> Day</span>
    <span class="sep">|</span>
    <span><strong>${hrs}</strong> Hrs</span>
    <span class="sep">|</span>
    <span><strong>${mins}</strong> Mnts</span>
    <span class="sep">|</span>
    <span><strong>${secs}</strong> Sec</span>
  `;

}, 1000);


// IMAGE SLIDER DOTS

const dots = document.querySelectorAll(".dot");

dots.forEach((dot, index) => {

  dot.addEventListener("click", function () {

    dots.forEach((d) => {
      d.classList.remove("active");
    });

    dot.classList.add("active");

    console.log("Slide:", index + 1);

  });

});


// SCROLL TO TOP BUTTON

const topBtn = document.createElement("button");

topBtn.innerText = "↑";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px 15px";
topBtn.style.border = "none";
topBtn.style.background = "#ff5a36";
topBtn.style.color = "#fff";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";

window.addEventListener("scroll", function () {

  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

});

topBtn.addEventListener("click", function () {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});