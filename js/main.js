// PRELOADER

window.onload = () => {
  setTimeout(() => {
    document.querySelector(".loader").style.opacity = "0";
    document.querySelector(".loader").style.display = "none";
  }, 2000);
};

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
const socialsIcons = document.querySelector(".sticky-socials");

// for (let i = 0; i < images.length; i++) {
//   images[i].addEventListener("click", () => {
//     console.log(`you clicked number ${i}`);
//   });
// }

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
const someElement = document.querySelector(".gallery-container");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.pageYOffset >= section.scrollHeight) {
    socialsIcons.style.position = "fixed";
    socialsBG.style.opacity = "1";
    socialIcons.classList.add("horizontal");
  } else {
    socialsIcons.style.position = "absolute";
    socialsBG.style.opacity = "0";
    socialIcons.classList.remove("horizontal");
  }

  //TOP
  if (someElement.getBoundingClientRect().top >= 0) {
    console.log("TRIGGER: top of div reached.");
  }
  //BOTTOM
  if (someElement.getBoundingClientRect().bottom <= 0) {
    console.log("TRIGGER: bottom of div reached.");
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
const gallery = document.querySelectorAll(".mySlides");
const photoCaption = document.querySelector("#caption");
var slideIndex = 0;
showSlides(slideIndex);

captionText = gallery[slideIndex - 1].firstElementChild.dataset.title;
photoCaption.style.opacity = "1";
photoCaption.innerHTML = `<span>&#128248; </span> ${captionText}`;

function plusSlides(n) {
  document.querySelector("#section2").style.background = "black";
  document.querySelector("#section2").firstElementChild.style.opacity = "0";
  document.querySelector(".caption-container").style.opacity = "1";
  showSlides((slideIndex += n));
  let captionText = gallery[slideIndex - 1].firstElementChild.dataset.title;
  photoCaption.textContent = captionText;
  photoCaption.style.opacity = "0";
  photoCaption.style.opacity = "1";

  photoCaption.innerHTML = ` 
      
      <p id="caption"><span>&#128248; </span>${captionText}</p>
      
  `;
  if (slideIndex === 8) {
    document.querySelector("#section2").style.background =
      "linear-gradient(to right, #474747 0%, #212149 100%)";
    document.querySelector("#section2").firstElementChild.style.opacity = "1";
    document.querySelector(".caption-container").style.opacity = "0";
    modal2.style.display = "block";

    if ((modal2.style.display = "block")) {
      setTimeout(() => {
        modal2.style.display = "none";
      }, 5000);
    }
  }
  console.log(slideIndex);
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

// gallery.forEach((item, index) => {
//   console.dir(item.childNodes[1].attributes[1].value);
//   const data = item.childNodes[1].attributes[1].value;
//   photoCaption.textContent = slideIndex.value;
// });

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
// chuckFacts();

const footer = document.querySelector("#footer-last");
const footerQuote = document.querySelector(".quote");
const closeBtn = document.querySelector(".close");
const closeBtn2 = document.querySelector(".close2");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal2");

closeBtn2.addEventListener("click", function () {
  modal2.style.display = "none";
});

const closeModal = (e) => {
  overlay.classList.toggle("active");
  overlay.classList.remove("active");
  overlay.classList.add("inactive");
};

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    console.log("click");
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

// Element shake
const input = document.querySelector(".contact-container");
const submit = document.querySelector(".app-form-button");
const elementsFadeOut = document.querySelectorAll(".fading");

console.log(elementsFadeOut);

const observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      input.classList.toggle("shake");
    }
  },
  { threshold: [1] }
);

observer.observe(document.querySelector(".contact-container"));

// Type Writter
// ES6 Class
class TypeWritter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  // Type Method
  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];
    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}<span class="blinking-cursor">|</span></span>`;

    // Initial type Speed
    let typeSpeed = 150;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init on DOM  Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWritter
  new TypeWritter(txtElement, words, wait);
}
