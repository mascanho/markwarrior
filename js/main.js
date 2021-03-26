// NAVBAR initAnimation
$(".toggle-menu").click(function () {
  $(this).toggleClass("active");
  $("#menu").toggleClass("open");
});

// Smooth Scroll Mode
// window.scroll({
//   top: 2500,
//   left: 0,
//   behavior: "smooth",
// });

// Scroll certain amounts from current position
window.scrollBy({
  top: 0, // could be negative value
  left: 0,
  behavior: "smooth",
});

// Scroll to a certain element
// document.querySelector(".hello").scrollIntoView({
//   behavior: "smooth",
// });

// From the top
gsap.from("em,.sticky-socials", {
  opacity: 0,
  duration: 1,
  y: -1000,
});

//From the side
gsap.from(".anime", {
  opacity: 0,
  duration: 1,
  y: 1000,
});

//from the bottom
gsap.from(".animation", {
  opacity: 0,
  duration: 1,
  x: 1000,
});

// Section Arrow scroll
const arrows = document.querySelector(".arrows");
const arrowUp = document.querySelector(".arrow-up");
const arrowDown = document.querySelector(".arrow-down");
const menu = document.querySelector(".burger");
const socialIcons = document.querySelector("#socials");
const socialsBG = document.querySelector(".sticky-socials-bg");
const images = document.querySelectorAll("img");

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", () => {
    console.log(`you clicked number ${i}`);
  });
}

// Arrow Toggles
arrowUp.addEventListener("click", () => {
  window.scrollBy(0, -window.innerHeight);
});

arrowDown.addEventListener("click", () => {
  window.scrollBy(0, window.innerHeight);
});
setTimeout(() => {
  arrows.style.opacity = "1";
}, 2000);

// changing menu colour based on scroll
const section = document.querySelector("#section1");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.pageYOffset >= section.scrollHeight) {
    socialsBG.style.opacity = "1";
    socialIcons.classList.add("horizontal");
  } else {
    socialsBG.style.opacity = "0";
    socialIcons.classList.remove("horizontal");
  }
}

// Skill Bars
$(function () {
  var $bars = $(".skillbar-bar"),
    total = $bars.length,
    index = -1,
    timer = null,
    select = function (i) {
      var $bar = $bars.eq(i);
      $bar.css("width", $bar.parent().data("percent"));
      $bar.parent().addClass("complete");
    },
    action = function () {
      index++;
      if (index == total - 1) {
        clearTimeout(timer);
      }
      select(index);
      setTimeout(action, 500);
    };

  timer = setTimeout(action, 500);
});

// Progress Bars are$(document).ready(function(){
jQuery(document).ready(function () {
  jQuery(".skillbar").each(function () {
    jQuery(this)
      .find(".skillbar-bar")
      .animate(
        {
          width: jQuery(this).attr("data-percent"),
        },
        6000
      );
  });
});

// Image Gallery
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
  // captionText.innerHTML = dots[slideIndex - 1].alt;
}

// FOOTER with CHUCK QUOTE

const urlAPI = "https://api.chucknorris.io/jokes/random";

async function chuckFacts() {
  const res = await fetch(urlAPI);
  const data = await res.json();
  console.log(data.value);
  footerQuote.textContent = data.value;
}
chuckFacts();

const footer = document.querySelector("#footer-last");
const footerQuote = document.querySelector(".quote");
const closeBtn = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

const closeModal = (e) => {
  overlay.classList.toggle("active");
  overlay.classList.remove("active");
  overlay.classList.add("inactive");
};

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    false;
  } else {
    overlay.classList.remove("active");
  }
});

const openModal = (e) => {
  overlay.classList.add("active");
  modal.classList.add("active");
  footer.removeEventListener("mouseenter", openModal);
};

footer.addEventListener("mouseenter", openModal);
closeBtn.addEventListener("click", closeModal);

// githug
