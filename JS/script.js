/* Sticky navigaion */

const topDecoEl = document.querySelector(".sticky-wrapper");
let topWrapper = (topDecoEl.clientHeight + convertRemToPixels(1)) * -1;
window.onresize = function (e) {
  topWrapper = (topDecoEl.clientHeight + convertRemToPixels(1)) * -1;
  console.log(topWrapper);
};

const sectionIntroEl = document.querySelector(".section-intro");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.querySelector(".sticky-wrapper").classList.add("is-sticky");
    }

    if (ent.isIntersecting) {
      document.querySelector(".sticky-wrapper").classList.remove("is-sticky");
    }
  },
  {
    root: null,
    rootMargin: topWrapper + "px",
    threshold: 0,
  }
);
obs.observe(sectionIntroEl);

/* Smooth scrolling animatoin */
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
      console.log(topWrapper);
    }
  });
});

/* section indicator */
const sectionEl = document.querySelectorAll("section");
const currentEl = document.querySelectorAll(".main-nav ul li");
console.log(currentEl);
const obss = [5];

function sectionIndicator() {
  for (let i = 0; i < 5; i++) {
    obss[i] = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];
        console.log(currentEl[i]);
        if (!ent.isIntersecting) {
          currentEl[i].classList.remove("current");
        }

        if (ent.isIntersecting) {
          currentEl[i].classList.add("current");
        }

        if (!ent.isIntersecting && i == 4) {
          document.querySelector(".section-contact").classList.remove("fill");
        }

        if (ent.isIntersecting && i == 4) {
          document.querySelector(".section-contact").classList.add("fill");
        }
      },
      {
        root: null,
        rootMargin: topWrapper + "px",
        threshold: 0.6,
      }
    );
  }
}
sectionIndicator();
obss[0].observe(sectionEl[1]);
obss[1].observe(sectionEl[2]);
obss[2].observe(sectionEl[3]);
obss[3].observe(sectionEl[4]);
obss[4].observe(sectionEl[5]);

/* Education animation  (mobile) */
$(document).ready(function () {
  $(".eduyear-mobile>.ed-yearnum--mobile").click(function () {
    $(this).next("ul").toggleClass("hide");
    var submenu = $(this).next("ul");
    if (submenu.is(":visible")) {
      submenu.slideUp();
      $(this).removeClass("pinkborder");
      $(this).children("ion-icon").css("transform", "rotate(0deg)");
      $(this).children("ion-icon").css("transition-duration", "0.3s");
    } else {
      submenu.slideDown();
      $(this).addClass("pinkborder");
      $(this).children("ion-icon").css("transform", "rotate(-180deg)");
      $(this).children("ion-icon").css("transition-duration", "0.3s");
    }
  });
});

/* fuction rem to px */
function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}
