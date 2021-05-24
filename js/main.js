AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

// PRELOADER

window.onload = () => {
  setTimeout(() => {
    document.querySelector(".loader").style.opacity = "0";
    document.querySelector(".loader").style.display = "none";
  }, 1500);
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

  //BOTTOM
  // if (someElement.getBoundingClientRect().bottom <= 0) {
  //   console.log("TRIGGER: bottom of div reached.");
  // }
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

// FOOTER with CHUCK QUOTE
const urlAPI = "https://api.chucknorris.io/jokes/random";

async function chuckFacts() {
  const res = await fetch(urlAPI);
  const data = await res.json();

  footerQuote.textContent = data.value;
}
chuckFacts();

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
// document.addEventListener("DOMContentLoaded", init);

// Init App
// function init() {
// const txtElement = document.querySelector(".txt-type");
// const words = JSON.parse(txtElement.getAttribute("data-words"));
// const wait = txtElement.getAttribute("data-wait");
// Init TypeWritter
// new TypeWritter(txtElement, words, wait);
// }

// Famous Quotes on the loader

const preloader = document.querySelector("#preload-container");
const preloaderMessage = document.querySelector("#message");

const urlFamous = "https://quote-garden.herokuapp.com/api/v3/quotes";

async function getFamousQuotes() {
  const res = await fetch(urlFamous);
  const data = await res.json();
  let randomNum = Math.floor(Math.random() * 9) + 1;

  document.querySelector(".famous-quote").innerHTML = `
  <h4><em>"${data.data[randomNum].quoteText}"</em></h4>
  <h5><em>- ${data.data[randomNum].quoteAuthor}</em></h5>
  
  `;
}
getFamousQuotes();

// Contact Form Validator
const form = document.getElementById("form");
const formName = document.getElementById("form-name");
const formEmail = document.getElementById("form-email");
const terminal = document.querySelector(".contact-container");
const nameError = document.querySelector(".name-error");
const emailError = document.querySelector(".email-error");
const formText = document.querySelector("#form-message");
const messageError = document.querySelector(".message-error");

// Show input error message
function showError(input, message) {
  const formControl = formName.parentElement;
  formControl.className;
}

// Event listeners
form.addEventListener("submit", function (e) {
  if (formName.value === "") {
    terminal.classList.toggle("vibrate-terminal");
    nameError.classList.add("error");
    nameError.textContent = "You don't have a name?";

    setTimeout(() => {
      nameError.classList.remove("error");
    }, 2000);

    e.preventDefault();
  }

  if (formEmail.value === "") {
    terminal.classList.toggle("vibrate-terminal");
    emailError.classList.toggle("error");
    emailError.textContent = "No email for me to reply?";

    setTimeout(() => {
      emailError.classList.remove("error");
    }, 2000);

    e.preventDefault();
  }

  if (formText.value === "") {
    terminal.classList.toggle("vibrate-terminal");
    messageError.classList.add("error");
    messageError.textContent = "Forgot your message?";

    setTimeout(() => {
      messageError.classList.remove("error");
    }, 2000);

    e.preventDefault();
  }
});

console.log(
  `%c ________________________________________
< Howdy, Hope you are not stealing code! :)  >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`,
  "font-family:monospace"
);

// PORTFOLIO TABS
const tabs = document.querySelector(".tabs"),
  ulContainer = document.querySelector(".ul__container"),
  photoTab = document.querySelector(".photo__tab"),
  videoTab = document.querySelector(".video__tab"),
  videoContent = document.querySelector("#videos"),
  fotorama = document.querySelector(".fotorama");
websitesTab = document.querySelector(".websites__tab");

photoTab.style.borderBottom = "2px solid #d4334b";

videoTab.addEventListener("click", () => {
  if (videoContent.classList.contains("active") === false) {
    fotorama.style.display = "none";
    videoContent.classList.toggle("active");
    photoTab.style.borderBottom = "";
    videoTab.style.borderBottom = "2px solid #d4334b";
    videoTab.style.color = "#d4334b";
  } else {
    return;
  }
});

photoTab.addEventListener("click", () => {
  console.log("clicked photo tab");
  videoContent.classList.remove("active");
  videoTab.style.borderBottom = "";
  photoTab.style.borderBottom = "2px solid #d4334b";
  fotorama.style.display = "block";
});
