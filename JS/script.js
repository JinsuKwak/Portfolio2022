/* Sticky navigaion */

const topDecoEl = document.querySelector(".sticky-wrapper");
let topWrapper = (topDecoEl.clientHeight + convertRemToPixels(1)) * -1;
window.onresize = function (e) {
  topWrapper = (topDecoEl.clientHeight + convertRemToPixels(1)) * -1;
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
    }
  });
});

/* section indicator */
const sectionEl = document.querySelectorAll("section");
const currentEl = document.querySelectorAll(".main-nav ul li");
const obss = [5];

function sectionIndicator() {
  for (let i = 0; i < 5; i++) {
    obss[i] = new IntersectionObserver(
      function (entries) {
        const ent = entries[0];

        if (ent.isIntersecting && i == 4) {
          document.querySelector(".section-contact").classList.add("fill");
          if (!ent.isIntersecting && i == 4) {
            document.querySelector(".section-contact").classList.remove("fill");
          }
        }

        if (!ent.isIntersecting) {
          currentEl[i].classList.remove("current");
        }

        if (ent.isIntersecting) {
          currentEl[i].classList.add("current");
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

/* Education animation */
/* Education Texts */
const UofC = {
  years: [
    [
      ["Year 1", "2020~2021"],
      ["ENGG - 233", "ENGG - 225", "ENGG - 201", "MATH - 275", "MATH - 211"],
      ["ENGG - 200", "ENGG - 202", "MATH - 277", "PHYS - 259", "CHEM - 209"],
      ["&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
      ["ECON - 201", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
    ],
    [
      ["Year 2", "2021~2022"],
      ["ENSF - 337", "ENEL - 353", "ENDG - 319", "MATH - 375", "PHYS - 369"],
      ["ENSF - 409", "ENCM - 369", "ENEL - 327", "CPSC - 319", "MATH - 271"],
      ["PSYC - 200", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
      ["ECON - 209", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
    ],
    [
      ["Year 3", "2022~2023"],
      ["ENSF - 480", "ENCM - 511", "CPSC - 471", "CPSC - 441", "&nbsp"],
      ["SENG - 401", "SENG - 471", "SENG - 438", "CPSC - 457", "&nbsp"],
      ["INTERN", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
      ["INTERN", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
    ],
    [
      ["Year 4", "2023~2024"],
      ["INTERN", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
      ["INTERN", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
      ["INTERN", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
      ["INTERN", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
    ],
    [
      ["Year 5", "2024~2025"],
      ["&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
      ["&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
      ["&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
      ["&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
    ],
  ],
};

const year1 = {
  terms: [
    [
      ["ENGG - 233", "ENGG - 225", "ENGG - 201", "MATH - 275", "MATH - 211"],
      [
        ["FALL - 2020"],
        ["Computing For Engineers", "Grade: A+"],
        ["Fundamentals of Electrical Circuits & Machines", "Grade: A-"],
        ["Behaviour Of Liquids Gases & Soli", "Grade: B+"],
        ["Calculus for Engineers and Scientists", "Grade: B-"],
        ["Linear Methods I", "Grade: A"],
      ],
    ],

    [
      ["ENGG - 200", "ENGG - 202", "MATH - 277", "PHYS - 259", "CHEM - 209"],
      [
        ["WINTER - 2021"],
        ["Engineering Design and Communication", "Grade: A"],
        ["Engineering Statics", "Grade: B+"],
        ["Multivariable Calculus for Engineers and Scientists", "Grade: B+"],
        ["Electricity and Magnetism", "Grade: A"],
        ["General Chemistry For Engineers", "Grade: A"],
      ],
    ],

    [
      ["&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
      [
        ["SPRING - 2021"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
      ],
    ],
    [
      ["ECON - 201", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
      [
        ["SUMMER - 2021"],
        ["Principles of Microeconomics", "Grade: A"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
      ],
    ],
  ],
};

const year2 = {
  terms: [
    [
      ["ENSF - 337", "ENEL - 353", "ENDG - 319", "MATH - 375", "PHYS - 369"],
      [
        ["FALL - 2021"],
        ["Programming Fundamentals for Software and Computer", "Grade: B+"],
        ["Digital Circuits", "Grade: A"],
        ["Probability And Statistics For Engineers", "Grade: B-"],
        ["Differential Equations for Engineers and Scientists", "Grade: B+"],
        ["Acoustics, Optics & Radiation", "Grade: B+"],
      ],
    ],

    [
      ["ENGG - 200", "ENGG - 202", "MATH - 277", "PHYS - 259", "CHEM - 209"],
      [
        ["WINTER - 2022"],
        ["Engineering Design and Communication", "Grade: A"],
        ["Engineering Statics", "Grade: B+"],
        ["Multivariable Calculus for Engineers and Scientists", "Grade: B+"],
        ["Electricity and Magnetism", "Grade: A"],
        ["General Chemistry For Engineers", "Grade: A"],
      ],
    ],

    [
      ["PSYC - 200", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
      [
        ["SPRING - 2022"],
        ["Principles of Psychology I", "Grade: B+"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
      ],
    ],
    [
      ["ECON - 209", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
      [
        ["SUMMER - 2022"],
        ["Engineering Economics", "Grade: IP"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
      ],
    ],
  ],
};

const year3 = {
  terms: [
    [
      ["ENSF - 480", "ENCM - 511", "CPSC - 471", "CPSC - 441", "&nbsp"],
      [
        ["FALL - 2022"],
        ["Principles of Software Design", "Grade: IP"],
        ["Embedded System Interfacing", "Grade: IP"],
        ["Data Base Management Systems", "Grade: IP"],
        ["Computer Networks", "Grade: IP"],
        ["&nbsp", "&nbsp"],
      ],
    ],

    [
      ["SENG - 401", "SENG - 471", "SENG - 438", "CPSC - 457", "&nbsp"],
      [
        ["WINTER - 2023"],
        ["Software Architecture", "Grade: IP"],
        ["Software Requirements Engineering", "Grade: IP"],
        ["Software Testing, Reliability, and Quality", "Grade: IP"],
        ["Principles of Operating Systems", "Grade: IP"],
        ["&nbsp", "&nbsp"],
      ],
    ],

    [
      ["INTERN", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
      [
        ["SPRING - 2023"],
        ["INTERNSHIP", "Company"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
      ],
    ],
    [
      ["INTERN", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
      [
        ["SUMMER - 2023"],
        ["INTERNSHIP", "Company"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
      ],
    ],
  ],
};

const year4 = {
  terms: [
    [
      ["INTERN", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
      [
        ["FALL - 2023"],
        ["INTERNSHIP", "Company"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
      ],
    ],

    [
      ["INTERN", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
      [
        ["WINTER - 2024"],
        ["INTERNSHIP", "Company"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
      ],
    ],

    [
      ["INTERN", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
      [
        ["SPRING - 2024"],
        ["INTERNSHIP", "Company"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
      ],
    ],
    [
      ["INTERN", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
      [
        ["SUMMER - 2024"],
        ["INTERNSHIP", "Company"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
      ],
    ],
  ],
};

const year5 = {
  terms: [
    [
      ["&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
      [
        ["FALL - 2024"],
        ["INTERNSHIP", "Company"],
        ["Course", "Grade: "],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
      ],
    ],

    [
      ["&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
      [
        ["WINTER - 2025"],
        ["Course", "Grade: "],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
      ],
    ],

    [
      ["&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
      [
        ["SPRING - 2025"],
        ["Course", "Grade: "],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
      ],
    ],
    [
      ["&nbsp", "&nbsp", "&nbsp", "&nbsp", "&nbsp"],
      [
        ["SUMMER - 2025"],
        ["Course", "Grade: "],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
        ["&nbsp", "&nbsp"],
      ],
    ],
  ],
};

const UofC_Years = [year1, year2, year3, year4, year5];
/* functions for update HTML */
function updateTerms(year) {
  Y = year - 1;
  if (year < 1 || year > 5) {
    return_CY();
    return;
  }
  edu_terms_year.textContent = UofC.years[Y][0][0];
  edu_terms_year_D.textContent = UofC.years[Y][0][1];
  for (let i = 0; i < 5; i++) {
    edu_terms_fall.item(i).textContent = UofC.years[Y][1][i];
  }
  for (let i = 0; i < 5; i++) {
    edu_terms_winter.item(i).textContent = UofC.years[Y][2][i];
  }
  for (let i = 0; i < 5; i++) {
    edu_terms_spring.item(i).textContent = UofC.years[Y][3][i];
  }
  for (let i = 0; i < 5; i++) {
    edu_terms_summer.item(i).textContent = UofC.years[Y][4][i];
  }
}

function updateCourses(year, term) {
  Y = year - 1;
  T = term - 1;
  if (term < 1 || term > 4) {
    return_CY();
    return;
  }
  edu_courses_year.textContent = "Year " + year;
  for (let i = 0; i < 5; i++) {
    edu_course.item(i).textContent = UofC_Years[Y].terms[T][0][i];
  }
  edu_desc_term.textContent = UofC_Years[Y].terms[T][1][0];
  for (let i = 0; i < 5; i++) {
    edu_desc_name.item(i).textContent = UofC_Years[Y].terms[T][1][i + 1][0];
    edu_desc_grade.item(i).textContent = UofC_Years[Y].terms[T][1][i + 1][1];
  }
}
/* Education Champters */
const edu_YEARS = document.querySelector(".education-years");
const edu_TERMS = document.querySelector(".education-terms");
const edu_COURSES = document.querySelector(".education-courses");

/* buttons for edu-years */
const btn_eduYear_1 = document.querySelector(".education-years .year-1");
const btn_eduYear_2 = document.querySelector(".education-years .year-2");
const btn_eduYear_3 = document.querySelector(".education-years .year-3");
const btn_eduYear_4 = document.querySelector(".education-years .year-4");
const btn_eduYear_5 = document.querySelector(".education-years .year-5");

/* buttons for edu-terms */
const btn_edu_terms_year = document.querySelector(
  ".education-terms .education-year"
);
const btn_terms_fall = document.querySelector(".term-fall");
const btn_terms_winter = document.querySelector(".term-winter");
const btn_terms_spring = document.querySelector(".term-spring");
const btn_terms_summer = document.querySelector(".term-summer");
/* Text Elements for edu-terms */
const edu_terms_year = document.querySelector(
  ".education-terms .education-year .ed-yearnum"
);
const edu_terms_year_D = document.querySelector(
  ".education-terms .education-year .ed-year"
);
const edu_terms_fall = document.querySelectorAll(".term-fall--course");
const edu_terms_winter = document.querySelectorAll(".term-winter--course");
const edu_terms_spring = document.querySelectorAll(".term-spring--course");
const edu_terms_summer = document.querySelectorAll(".term-summer--course");

/* buttons for edu-courses */
let btn_edu_courses_year = document.querySelector(".course-names");
let btn_edu_desc_term = document.querySelector(".education-description--term");

/* Text Elements for edu-courses */
const edu_courses_year = document.querySelector(".ed-courses--year");
const edu_course = document.querySelectorAll(".ed-course");
const edu_desc_term = document.querySelector(".education-description--term");
const edu_desc_name = document.querySelectorAll(".ed-desc--name");
const edu_desc_grade = document.querySelectorAll(".ed-desc--grade");

/* functions for navigate Educatation */
openYears();

let year = 0;
let term = 0;

function openYears() {
  btn_eduYear_1.addEventListener("click", openTermsYear1);
  btn_eduYear_2.addEventListener("click", openTermsYear2);
  btn_eduYear_3.addEventListener("click", openTermsYear3);
  btn_eduYear_4.addEventListener("click", openTermsYear4);
  btn_eduYear_5.addEventListener("click", openTermsYear5);
  return;
}

function removeYearsEL() {
  btn_eduYear_1.removeEventListener("click", openTermsYear1);
  btn_eduYear_2.removeEventListener("click", openTermsYear2);
  btn_eduYear_3.removeEventListener("click", openTermsYear3);
  btn_eduYear_4.removeEventListener("click", openTermsYear4);
  btn_eduYear_5.removeEventListener("click", openTermsYear5);
  return;
}

function closeYears() {
  edu_YEARS.classList.add("hidden");
  edu_TERMS.classList.remove("hidden");
  return;
}

function openTermsYear1() {
  year = 1;
  updateTerms(year);
  removeYearsEL();
  closeYears();
  openTerms();
  console.log("currently in year 1");
  return;
}

function openTermsYear2() {
  year = 2;
  updateTerms(year);
  removeYearsEL();
  closeYears();
  openTerms();
  console.log("currently in year 2");
  return;
}

function openTermsYear3() {
  year = 3;
  updateTerms(year);
  removeYearsEL();
  closeYears();
  openTerms();
  console.log("currently in year 3");
  return;
}

function openTermsYear4() {
  year = 4;
  updateTerms(year);
  removeYearsEL();
  closeYears();
  openTerms();
  console.log("currently in year 4");
  return;
}

function openTermsYear5() {
  year = 5;
  updateTerms(year);
  removeYearsEL();
  closeYears();
  openTerms();
  console.log("currently in year 5");
  return;
}

function openTerms() {
  btn_edu_terms_year.addEventListener("click", return_TY);
  btn_terms_fall.addEventListener("click", openCoursesTerm1);
  btn_terms_winter.addEventListener("click", openCoursesTerm2);
  btn_terms_spring.addEventListener("click", openCoursesTerm3);
  btn_terms_summer.addEventListener("click", openCoursesTerm4);
  return;
}

function removeTermsEL() {
  btn_edu_terms_year.removeEventListener("click", return_TY);
  btn_terms_fall.removeEventListener("click", openCoursesTerm1);
  btn_terms_winter.removeEventListener("click", openCoursesTerm2);
  btn_terms_spring.removeEventListener("click", openCoursesTerm3);
  btn_terms_summer.removeEventListener("click", openCoursesTerm4);
  return;
}

function closeTerms() {
  edu_TERMS.classList.add("hidden");
  edu_COURSES.classList.remove("hidden");
  return;
}

function closeTermsY() {
  edu_TERMS.classList.add("hidden");
  edu_YEARS.classList.remove("hidden");
  return;
}

function return_TY() {
  removeTermsEL();
  closeTermsY();
  openYears();
  values("return_CT");
  console.log("return from Terms to year");
  return;
}

function openCoursesTerm1() {
  term = 1;
  updateCourses(year, term);
  removeTermsEL();
  closeTerms();
  openCourses();
  console.log("currently in term 1");
  return;
}

function openCoursesTerm2() {
  term = 2;
  updateCourses(year, term);
  removeTermsEL();
  closeTerms();
  openCourses();
  console.log("currently in term 2");
  return;
}

function openCoursesTerm3() {
  term = 3;
  updateCourses(year, term);
  removeTermsEL();
  closeTerms();
  openCourses();
  console.log("currently in term 3");
  return;
}

function openCoursesTerm4() {
  term = 4;
  updateCourses(year, term);
  removeTermsEL();
  closeTerms();
  openCourses();
  console.log("currently in term 4");
  return;
}

function openCourses() {
  btn_edu_desc_term.addEventListener("click", return_CT);
  btn_edu_courses_year.addEventListener("click", return_CY);
  values("openCourses");
  return;
}

function removeCoursesEL() {
  btn_edu_desc_term.removeEventListener("click", return_CT);
  btn_edu_courses_year.removeEventListener("click", return_CY);
  return;
}

function closeCourses() {
  edu_COURSES.classList.add("hidden");
  edu_TERMS.classList.remove("hidden");
  return;
}

function return_CT() {
  removeCoursesEL();
  closeCourses();
  openTerms();
  values("return_CT");
  console.log("return from course to term");
  return;
}

function return_CY() {
  return_CT();
  return_TY();
  values("return_CY");
  return;
}

function values(reason) {
  console.log(reason + ":  " + "year: " + year + " term :" + term);
}

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
