function toggleNav() {
  let sidebar = document.getElementById("mySidebar");
  let toggleButton = document.querySelector("button");
  let overlayEffect = document.querySelector(".overlay-effect");

  if (sidebar.style.width === "406px") {
    sidebar.style.width = "0";
    toggleButton.classList.remove("close");
    overlayEffect.classList.remove("overlay-visible");
  } else {
    sidebar.style.width = "406px";
    toggleButton.classList.add("close");
    overlayEffect.classList.add("overlay-visible");
  }
}

/*----------------line-animation----------------------*/

let prevScrollPos = window.scrollY || window.pageYOffset;
const alphabetLine = document.querySelector(".animation-scroll");
let currentTranslate = 0;
let originalText = alphabetLine.textContent.trim();
console.log(originalText);

window.addEventListener("scroll", function () {
  const currentScrollPos = window.scrollY || window.pageYOffset;

  if (currentScrollPos > prevScrollPos) {
    // Scrolling down
    currentTranslate -= getRandomValue();
  } else {
    // Scrolling up
    currentTranslate += getRandomValue();
  }

  const loopedText = getLoopedText(originalText);
  alphabetLine.textContent = loopedText;
  alphabetLine.style.transform = `translate3d(${currentTranslate}vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;

  prevScrollPos = currentScrollPos;
});

function getRandomValue() {
  return Math.floor(Math.random() * (10 - 5 + 1)) + 5;
}

function getLoopedText(text) {
  const loopedText = text + " " + text;
  return loopedText;
}



/*----------------sroll-animation------------------*/
$(document).ready(function () {
  var roOtate = Math.PI / 2;

  $(window).scroll(function () {
    var rotation = $(window).scrollTop() / 200 % (2 * Math.PI);
    $('.inside-circle img:nth-child(2)').css({ transform: 'rotate(' + (rotation - roOtate) + 'rad)' });
  });
});
