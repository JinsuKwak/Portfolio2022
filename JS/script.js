// gsap.registerPlugin(MotionPathPlugin);
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
/* Skills interaction */
const btn_skills = document.querySelector(".skills-techskills--levels");
const skillLevelsEl = document.querySelectorAll(".skills-level > div");
const skillLevel = document.querySelectorAll(".skills-level-desc");

btn_skills.addEventListener("click", function () {
  if (btn_skills.classList.contains("onClick_skills")) {
    btn_skills.classList.remove("onClick_skills");
    for (let i = 0; i < skillLevelsEl.length; i++) {
      skillLevelsEl.item(i).removeAttribute("style");
    }
    for (let i = 0; i < skillLevel.length; i++) {
      skillLevel.item(i).classList.add("hidden");
    }
    btn_skills.removeAttribute("style");
  } else {
    btn_skills.classList.add("onClick_skills");
    for (let i = 0; i < skillLevelsEl.length; i++) {
      skillLevelsEl.item(i).style.backgroundColor = "#fff";
      skillLevelsEl.item(i).style.border = "none";

      // border-top: 0.2rem solid #fff;
      // border-bottom: 0.2rem solid #fff;
      // border-left: 0.1rem solid #fff;
      // border-right: 0.1rem solid #fff
    }
    for (let i = 0; i < skillLevel.length; i++) {
      skillLevel.item(i).classList.remove("hidden");
    }
    btn_skills.style.backgroundColor = "#cc3c54";
  }
});

/* Education animation */
/* Education Texts */
const UofC = {
  years: [
    [
      ["Year 1", "2020~2021"],
      ["ENGG - 233", "ENGG - 225", "ENGG - 201", "MATH - 275", "MATH - 211"],
      ["ENGG - 200", "ENGG - 202", "MATH - 277", "PHYS - 259", "CHEM - 209"],
      ["-", "-", "-", "-", "-"],
      ["ECON - 201", "-", "-", "-", "-"],
    ],
    [
      ["Year 2", "2021~2022"],
      ["ENSF - 337", "ENEL - 353", "ENDG - 319", "MATH - 375", "PHYS - 369"],
      ["ENSF - 409", "ENCM - 369", "ENEL - 327", "CPSC - 319", "MATH - 271"],
      ["PSYC - 200", "-", "-", "-", "-"],
      ["ECON - 209", "-", "-", "-", "-"],
    ],
    [
      ["Year 3", "2022~2023"],
      ["ENSF - 480", "ENCM - 511", "CPSC - 471", "CPSC - 441", "-"],
      ["SENG - 401", "SENG - 471", "SENG - 438", "CPSC - 457", "-"],
      ["INTERN", "-", "-", "-", "-"],
      ["INTERN", "-", "-", "-", "-"],
    ],
    [
      ["Year 4", "2023~2024"],
      ["INTERN", "-", "-", "-", "-"],
      ["INTERN", "-", "-", "-", "-"],
      ["INTERN", "-", "-", "-", "-"],
      ["INTERN", "-", "-", "-", "-"],
    ],
    [
      ["Year 5", "2024~2025"],
      ["-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-"],
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
      ["-", "-", "-", "-", "-"],
      [
        ["SPRING - 2021"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
      ],
    ],
    [
      ["ECON - 201", "-", "-", "-", "-"],
      [
        ["SUMMER - 2021"],
        ["Principles of Microeconomics", "Grade: A"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
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
      ["ENSF - 409", "ENCM - 369", "ENEL - 327", "CPSC - 319", "MATH - 271"],
      [
        ["WINTER - 2022"],
        ["Principles of Software Development", "Grade: A+"],
        ["Computer Organization", "Grade: A"],
        ["Signals and Transforms", "Grade: A-"],
        ["Data Structures, Algorithms, and Their Applications", "Grade: A"],
        ["Discrete Mathematics", "Grade: A"],
      ],
    ],

    [
      ["PSYC - 200", "-", "-", "-", "-"],
      [
        ["SPRING - 2022"],
        ["Principles of Psychology I", "Grade: B+"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
      ],
    ],
    [
      ["ECON - 209", "-", "-", "-", "-"],
      [
        ["SUMMER - 2022"],
        ["Engineering Economics", "Grade: IP"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
      ],
    ],
  ],
};

const year3 = {
  terms: [
    [
      ["ENSF - 480", "ENCM - 511", "CPSC - 471", "CPSC - 441", "-"],
      [
        ["FALL - 2022"],
        ["Principles of Software Design", "Grade: IP"],
        ["Embedded System Interfacing", "Grade: IP"],
        ["Data Base Management Systems", "Grade: IP"],
        ["Computer Networks", "Grade: IP"],
        ["", "-"],
      ],
    ],

    [
      ["SENG - 401", "SENG - 471", "SENG - 438", "CPSC - 457", "-"],
      [
        ["WINTER - 2023"],
        ["Software Architecture", "Grade: IP"],
        ["Software Requirements Engineering", "Grade: IP"],
        ["Software Testing, Reliability, and Quality", "Grade: IP"],
        ["Principles of Operating Systems", "Grade: IP"],
        ["", "-"],
      ],
    ],

    [
      ["INTERN", "-", "-", "-", "-"],
      [
        ["SPRING - 2023"],
        ["FULL TIME INTERNSHIP", "Company"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
      ],
    ],
    [
      ["INTERN", "-", "-", "-", "-"],
      [
        ["SUMMER - 2023"],
        ["FULL TIME INTERNSHIP", "Company"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
      ],
    ],
  ],
};

const year4 = {
  terms: [
    [
      ["INTERN", "-", "-", "-", "-"],
      [
        ["FALL - 2023"],
        ["FULL TIME INTERNSHIP", "Company"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
      ],
    ],

    [
      ["INTERN", "-", "-", "-", "-"],
      [
        ["WINTER - 2024"],
        ["FULL TIME INTERNSHIP", "Company"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
      ],
    ],

    [
      ["INTERN", "-", "-", "-", "-"],
      [
        ["SPRING - 2024"],
        ["FULL TIME INTERNSHIP", "Company"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
      ],
    ],
    [
      ["INTERN", "-", "-", "-", "-"],
      [
        ["SUMMER - 2024"],
        ["FULL TIME INTERNSHIP", "Company"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
      ],
    ],
  ],
};

const year5 = {
  terms: [
    [
      ["-", "-", "-", "-", "-"],
      [["FALL - 2024"], ["", "-"], ["", "-"], ["", "-"], ["", "-"], ["", "-"]],
    ],

    [
      ["-", "-", "-", "-", "-"],
      [
        ["WINTER - 2025"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
      ],
    ],

    [
      ["-", "-", "-", "-", "-"],
      [
        ["SPRING - 2025"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
      ],
    ],
    [
      ["-", "-", "-", "-", "-"],
      [
        ["SUMMER - 2025"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
        ["", "-"],
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

/* year and terms */
let year = 0;
let term = 0;
/* Education Champters */
const edu_YEARS = document.querySelector(".education-years");
const edu_TERMS = document.querySelector(".education-terms");
const edu_COURSES = document.querySelector(".education-courses");

/* buttons for edu-years */
const btn_eduYears = document.querySelectorAll(
  ".education-years .education-year"
);
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

/* functions for animation */
////////////////TERMS////////////////
let P_T4_Y;
let P_T3_Y;
let P_T2_Y;
let P_T1_Y;
let PATH_TERM;

function calcPathTerms() {
  P_T4_Y = MotionPathPlugin.convertCoordinates(
    btn_terms_summer,
    btn_edu_terms_year,
    {
      x: 0,
      y: 0,
    }
  );

  P_T3_Y = MotionPathPlugin.convertCoordinates(
    btn_terms_spring,
    btn_edu_terms_year,
    {
      x: 0,
      y: 0,
    }
  );

  P_T2_Y = MotionPathPlugin.convertCoordinates(
    btn_terms_winter,
    btn_edu_terms_year,
    {
      x: 0,
      y: 0,
    }
  );

  P_T1_Y = MotionPathPlugin.convertCoordinates(
    btn_terms_fall,
    btn_edu_terms_year,
    {
      x: 0,
      y: 0,
    }
  );
  PATH_TERM = [P_T1_Y, P_T2_Y, P_T3_Y, P_T4_Y];
}
const terms = ["fall", "winter", "spring", "summer"];
function ani_TermClose(term) {
  calcPathTerms();
  T = term - 1;
  let targetTermS = ".education-terms ." + "term-" + terms[T];
  let targetTerm = document.querySelector(targetTermS);
  let p = PATH_TERM[T];
  console.log(targetTerm);
  console.log(p);
  gsap.to(targetTerm, {
    x: p.x * -1,
    duration: 0.3,
    delay: 0.0,
  });

  gsap.to(btn_edu_terms_year, {
    x: p.x * 1,
    duration: 0.3,
    delay: 0.0,
  });
  return;
}

let PB_T4_Y;
let PB_T3_Y;
let PB_T2_Y;
let PB_T1_Y;
let PATH_B_TERM;
function calcPath_B_Terms() {
  PB_T4_Y = MotionPathPlugin.convertCoordinates(
    btn_edu_terms_year,
    btn_terms_summer,
    {
      x: P_T4_Y.x * -1,
      y: 0,
    }
  );

  PB_T3_Y = MotionPathPlugin.convertCoordinates(
    btn_edu_terms_year,
    btn_terms_spring,

    {
      x: P_T3_Y.x * -1,
      y: 0,
    }
  );

  PB_T2_Y = MotionPathPlugin.convertCoordinates(
    btn_edu_terms_year,
    btn_terms_winter,

    {
      x: P_T2_Y.x * -1,
      y: 0,
    }
  );

  PB_T1_Y = MotionPathPlugin.convertCoordinates(
    btn_edu_terms_year,
    btn_terms_fall,
    {
      x: P_T1_Y.x * -1,
      y: 0,
    }
  );
  PATH_B_TERM = [PB_T1_Y, PB_T2_Y, PB_T3_Y, PB_T4_Y];
}

function ani_TermOpen(term) {
  calcPath_B_Terms();
  T = term - 1;
  let targetTermS = ".education-terms ." + "term-" + terms[T];
  let targetTerm = document.querySelector(targetTermS);

  $(btn_edu_terms_year).addClass("termSelected");
  let p = PATH_B_TERM[T];

  gsap.to(targetTerm, {
    x: p.x * -1,
    duration: 0.3,
    delay: 0.0,
  });

  gsap.to(btn_edu_terms_year, {
    x: p.x,
    duration: 0.3,
    delay: 0.0,
  });
  return;
}

function removeAttrTerms() {
  $(".education-terms .education-year").removeAttr("style");
  $(".education-terms .term-fall").removeAttr("style");
  $(".education-terms .term-winter").removeAttr("style");
  $(".education-terms .term-spring").removeAttr("style");
  $(".education-terms .term-summer").removeAttr("style");
}
////////////////YEARS////////////////
let P_Y5_Y1;
let P_Y4_Y1;
let P_Y3_Y1;
let P_Y2_Y1;
let P_Y1_Y1;
let PATH_YEAR;

function calcPath_Years() {
  P_Y5_Y1 = MotionPathPlugin.convertCoordinates(btn_eduYear_1, btn_eduYear_5, {
    x: 0,
    y: 0,
  });
  P_Y4_Y1 = MotionPathPlugin.convertCoordinates(btn_eduYear_1, btn_eduYear_4, {
    x: 0,
    y: 0,
  });
  P_Y3_Y1 = MotionPathPlugin.convertCoordinates(btn_eduYear_1, btn_eduYear_3, {
    x: 0,
    y: 0,
  });
  P_Y2_Y1 = MotionPathPlugin.convertCoordinates(btn_eduYear_1, btn_eduYear_2, {
    x: 0,
    y: 0,
  });
  P_Y1_Y1 = MotionPathPlugin.convertCoordinates(btn_eduYear_1, btn_eduYear_1, {
    x: 0,
    y: 0,
  });

  PATH_YEAR = [P_Y1_Y1, P_Y2_Y1, P_Y3_Y1, P_Y4_Y1, P_Y5_Y1];
}
function ani_YearClose(year) {
  calcPath_Years();
  Y = year - 1;
  let targetYearS = ".education-years .year-" + year;
  let targetYear = document.querySelector(targetYearS);
  let p = PATH_YEAR[Y];
  console.log(p);
  gsap.to(targetYear, {
    x: p.x * 1,
    duration: 0.3,
    delay: 0.0,
  });

  gsap.to(btn_eduYear_1, {
    x: p.x * -1,
    duration: 0.3,
    delay: 0.0,
  });

  return;
}

let PB_Y5_Y1;
let PB_Y4_Y;
let PB_Y3_Y1;
let PB_Y2_Y1;
let PB_Y1_Y1;
let PATH_B_YEAR;

function calcPath_B_Years() {
  PB_Y5_Y1 = MotionPathPlugin.convertCoordinates(btn_eduYear_5, btn_eduYear_1, {
    x: P_Y5_Y1.x * -1,
    y: 0,
  });
  PB_Y4_Y1 = MotionPathPlugin.convertCoordinates(btn_eduYear_4, btn_eduYear_1, {
    x: P_Y4_Y1.x * -1,
    y: 0,
  });
  PB_Y3_Y1 = MotionPathPlugin.convertCoordinates(btn_eduYear_3, btn_eduYear_1, {
    x: P_Y3_Y1.x * -1,
    y: 0,
  });
  PB_Y2_Y1 = MotionPathPlugin.convertCoordinates(btn_eduYear_2, btn_eduYear_1, {
    x: P_Y2_Y1.x * -1,
    y: 0,
  });
  PB_Y1_Y1 = MotionPathPlugin.convertCoordinates(btn_eduYear_1, btn_eduYear_1, {
    x: P_Y1_Y1.x * -1,
    y: 0,
  });
  PATH_B_YEAR = [PB_Y1_Y1, PB_Y2_Y1, PB_Y3_Y1, PB_Y4_Y1, PB_Y5_Y1];
}
function ani_YearOpen(year) {
  calcPath_B_Years();
  Y = year - 1;
  let targetYearS = ".education-years .year-" + year;
  let targetYear = document.querySelector(targetYearS);
  $(targetYear).css({
    "border-color": "#cc3c54",
    "transform:": "translateY(-1.2rem)",
    "box-shadow": "1.4rem 2.2rem rgba(195, 60, 85, 0.4)",
  });
  let p = PATH_B_YEAR[Y];
  gsap.to(targetYear, {
    x: p.x * -1,
    duration: 0.3,
    delay: 0.0,
  });
  gsap.to(btn_eduYear_1, {
    x: p.x * 1,
    duration: 0.3,
    delay: 0.0,
  });

  return;
}

function removeAttrYears() {
  $(".education-years .year-1").removeAttr("style");
  $(".education-years .year-2").removeAttr("style");
  $(".education-years .year-3").removeAttr("style");
  $(".education-years .year-4").removeAttr("style");
  $(".education-years .year-5").removeAttr("style");
}

////////////////CLICK DISABLE////////////////
/* functions for navigate Educatation */
function clickDisableYears() {
  $(".education-years .year-1").css({ "pointer-events": "none" });
  $(".education-years .year-2").css({ "pointer-events": "none" });
  $(".education-years .year-3").css({ "pointer-events": "none" });
  $(".education-years .year-4").css({ "pointer-events": "none" });
  $(".education-years .year-5").css({ "pointer-events": "none" });
}

function clickDisableTerms() {
  $(".education-terms .education-years").css({ "pointer-events": "none" });
  $(".education-terms .term-fall").css({ "pointer-events": "none" });
  $(".education-terms .term-winter").css({ "pointer-events": "none" });
  $(".education-terms .term-spring").css({ "pointer-events": "none" });
  $(".education-terms .term-summer").css({ "pointer-events": "none" });
}

openYears(true);

function openYears(reset) {
  if (reset == false) {
    clickDisableYears();
    ani_YearOpen(year);
  }
  setTimeout(function () {
    btn_eduYear_1.addEventListener("click", openTermsYear1);
    btn_eduYear_2.addEventListener("click", openTermsYear2);
    btn_eduYear_3.addEventListener("click", openTermsYear3);
    btn_eduYear_4.addEventListener("click", openTermsYear4);
    btn_eduYear_5.addEventListener("click", openTermsYear5);
  }, 400);

  setTimeout(function () {
    removeAttrYears();
  }, 800);
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
  clickDisableYears();
  ani_YearClose(year);
  setTimeout(function () {
    edu_YEARS.classList.add("hidden");
    edu_TERMS.classList.remove("hidden");
  }, 400);
  return;
}

function openTermsYear1() {
  year = 1;
  updateTerms(year);
  removeYearsEL();
  closeYears();
  openTerms(false);
  console.log("currently in year 1");
  return;
}

function openTermsYear2() {
  year = 2;
  updateTerms(year);
  removeYearsEL();
  closeYears();
  openTerms(false);
  console.log("currently in year 2");
  return;
}

function openTermsYear3() {
  year = 3;
  updateTerms(year);
  removeYearsEL();
  closeYears();
  openTerms(false);
  console.log("currently in year 3");
  return;
}

function openTermsYear4() {
  year = 4;
  updateTerms(year);
  removeYearsEL();
  closeYears();
  openTerms(false);
  console.log("currently in year 4");
  return;
}

function openTermsYear5() {
  year = 5;
  updateTerms(year);
  removeYearsEL();
  closeYears();
  openTerms(false);
  console.log("currently in year 5");
  return;
}

function openTerms(ret) {
  if (ret == true) {
    clickDisableTerms();
    ani_TermOpen(term);
    setTimeout(function () {
      btn_edu_terms_year.addEventListener("click", return_TY);
      btn_terms_fall.addEventListener("click", openCoursesTerm1);
      btn_terms_winter.addEventListener("click", openCoursesTerm2);
      btn_terms_spring.addEventListener("click", openCoursesTerm3);
      btn_terms_summer.addEventListener("click", openCoursesTerm4);
    }, 400);
    setTimeout(function () {
      removeAttrTerms();
      $(btn_edu_terms_year).removeClass("termSelected");
    }, 800);
  } else {
    btn_edu_terms_year.addEventListener("click", return_TY);
    btn_terms_fall.addEventListener("click", openCoursesTerm1);
    btn_terms_winter.addEventListener("click", openCoursesTerm2);
    btn_terms_spring.addEventListener("click", openCoursesTerm3);
    btn_terms_summer.addEventListener("click", openCoursesTerm4);
  }
  return;
}

function openTerms_pass() {
  clickDisableTerms();
  ani_TermOpen(term);
  setTimeout(function () {}, 400);
  setTimeout(function () {
    removeAttrTerms();
    $(btn_edu_terms_year).removeClass("termSelected");
  }, 800);

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
  clickDisableTerms();
  ani_TermClose(term);
  setTimeout(function () {
    edu_TERMS.classList.add("hidden");
    edu_COURSES.classList.remove("hidden");
  }, 600);

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
  openYears(false);
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
  setTimeout(function () {
    openTerms(true);
  }, 50);
  values("return_CT");
  console.log("return from course to term");
  return;
}

function return_CT_pass() {
  removeCoursesEL();
  closeCourses();
  setTimeout(function () {
    openTerms_pass();
  }, 50);
  values("return_CT");
  console.log("return from course to term (pass)");
  return;
}

function return_CY() {
  return_CT_pass();
  setTimeout(function () {
    return_TY();
  }, 1300);

  values("return_CY");
  return;
}

function values(reason) {
  console.log(reason + ":  " + "year: " + year + " term :" + term);
}

/* Education animation  (mobile) */
$(document).ready(function () {
  $(".eduyear-mobile>.ed-yearnum--mobile").click(function () {
    var submenu = $(this).next("ul");
    if (submenu.is(":visible")) {
      $(this).next("ul").addClass("hide");
      submenu.slideUp();
      $(this).removeClass("pinkborder");
      $(this).children("ion-icon").css("transform", "scaleY(1)");
      $(this).children("ion-icon").css("transition-duration", "0.3s");
    } else {
      submenu.slideDown();
      $(this).next("ul").removeClass("hide");
      $(this).addClass("pinkborder");
      $(this).children("ion-icon").css("transform", "scaleY(-1)");
      $(this).children("ion-icon").css("transition-duration", "0.3s");
    }
  });
});
/* fuction rem to px */
function convertRemToPixels(rem) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

/* fuction rem to px */
function convertPixelsToRem(px) {
  return px / parseFloat(getComputedStyle(document.documentElement).fontSize);
}
//////////////////////////////////
/*          PROJECTS            */
//////////////////////////////////
const PROJ_1_A = {
  imgPreview: "../img/projects/1_A/1_A.png",
  projectName: "Project 1-A",
  projectDate: "07/08/22 ~ 08/30/22",
  projectSize: ["ph-users-bold", "Group of 2"],
  projectSkill: [
    "<div class='current-skillcontainer grid-col grid--2-cols'>" +
      "<div class='Skill JavaScript grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>JavaScript</p>" +
      "</div>" +
      "<div class='Skill HTML grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>HTML</p>" +
      "</div>" +
      "<div class='Skill CSS grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>CSS</p>" +
      "</div>" +
      "</div>",
  ],
  projectImg: [
    "../img/projects/1_A/1_A.png",
    "../img/projects/1_A/1_A1.png",
    "../img/projects/1_A/1_A2.png",
  ],
  projectDesc: "Description: This is Project 1_A",
  projectAdd: "Role: This is an Additional Information of Project 1_A",
  projectCode: [true, "code-slash", "CODE", "https://www.google.ca/"],
  projectDemo: [true, "logo-youtube", "DEMO", "https://www.youtube.com/"],
};

const PROJ_1_B = {
  imgPreview: "../img/projects/1_B/1_B.png",
  projectName: "Project 1-B",
  projectDate: "07/08/22 ~ 08/30/22",
  projectSize: ["ph-users-three-bold", "Group of 3"],
  projectSkill: [
    "<div class='current-skillcontainer grid-col grid--2-cols'>" +
      "<div class='Skill JavaScript grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>JavaScript</p>" +
      "</div>" +
      "<div class='Skill HTML grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>HTML</p>" +
      "</div>" +
      "<div class='Skill CSS grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>CSS</p>" +
      "</div>" +
      "<div class='Skill Python grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>Python</p>" +
      "</div>" +
      "</div>",
  ],
  projectImg: [
    "../img/projects/1_B/1_B.png",
    "../img/projects/1_B/1_B1.png",
    "../img/projects/1_B/1_B2.png",
    "../img/projects/1_B/1_B3.png",
    "../img/projects/1_B/1_B4.png",
    "../img/projects/1_B/1_B5.png",
  ],
  projectDesc: "Description: This is Project 1_B",
  projectAdd: "Role: This is an Additional Information of Project 1_B",
  projectCode: [true, "code-slash", "CODE", "https://www.google.ca/"],
  projectDemo: [true, "logo-youtube", "DEMO", "https://www.youtube.com/"],
};

const PROJ_1_C = {
  imgPreview: "../img/projects/1_C/1_C.png",
  projectName: "Project 1-C",
  projectDate: "07/08/22 ~ 08/30/22",
  projectSize: ["ph-users-four-bold", "Group of 4"],
  projectSkill: [
    "<div class='current-skillcontainer grid-col grid--2-cols'>" +
      "<div class='Skill JavaScript grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>JavaScript</p>" +
      "</div>" +
      "<div class='Skill HTML grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>HTML</p>" +
      "</div>" +
      "<div class='Skill Cpp grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>C++</p>" +
      "</div>" +
      "</div>",
  ],
  projectImg: ["../img/projects/1_C/1_C.png", "../img/projects/1_C/1_C1.png"],
  projectDesc: "Description: This is Project 1_C",
  projectAdd: "Role: This is an Additional Information of Project 1_C",
  projectCode: [true, "code-slash", "CODE", "https://www.google.ca/"],
  projectDemo: [true, "logo-youtube", "DEMO", "https://www.youtube.com/"],
};

const PROJ_1_D = {
  imgPreview: "../img/projects/1_D/1_D.png",
  projectName: "Project 1-D",
  projectDate: "07/08/22 ~ 08/30/22",
  projectSize: ["ph-users-bold", "Group of 2"],
  projectSkill: [
    "<div class='current-skillcontainer grid-col grid--2-cols'>" +
      "<div class='Skill C grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>C</p>" +
      "</div>" +
      "<div class='Skill HTML grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>HTML</p>" +
      "</div>" +
      "<div class='Skill HTML grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>HTML</p>" +
      "</div>" +
      "</div>",
  ],
  projectImg: ["../img/projects/1_D/1_D.png", "../img/projects/1_D/1_D1.png"],
  projectDesc: "Description: This is Project 1_D",
  projectAdd: "Role: This is an Additional Information of Project 1_D",
  projectCode: [true, "code-slash", "CODE", "https://www.google.ca/"],
  projectDemo: [true, "logo-youtube", "DEMO", "https://www.youtube.com/"],
};

const PROJ_2_A = {
  imgPreview: "../img/projects/2_A/2_A.png",
  projectName: "Project 2-A",
  projectDate: "07/08/22 ~ 08/30/22",
  projectSize: ["ph-user", "Individual"],
  projectSkill: [
    "<div class='current-skillcontainer grid-col grid--2-cols'>" +
      "<div class='Skill JavaScript grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>JavaScript</p>" +
      "</div>" +
      "<div class='Skill HTML grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>HTML</p>" +
      "</div>" +
      "<div class='Skill HTML grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>HTML</p>" +
      "</div>" +
      "</div>",
  ],
  projectImg: ["../img/projects/2_A/2_A.png", "../img/projects/2_A/2_A1.png"],
  projectDesc: "Description: This is Project 2_A",
  projectAdd: "Role: This is an Additional Information of Project 2_A",
  projectCode: [true, "code-slash", "CODE", "https://www.google.ca/"],
  projectDemo: [true, "logo-youtube", "DEMO", "https://www.youtube.com/"],
};

const PROJ_2_B = {
  imgPreview: "../img/projects/2_B/2_B.png",
  projectName: "Project 2-B",
  projectDate: "07/08/22 ~ 08/30/22",
  projectSize: ["ph-user", "Individual"],
  projectSkill: [
    "<div class='current-skillcontainer grid-col grid--2-cols'>" +
      "<div class='Skill JavaScript grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>JavaScript</p>" +
      "</div>" +
      "<div class='Skill HTML grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>HTML</p>" +
      "</div>" +
      "<div class='Skill HTML grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>HTML</p>" +
      "</div>" +
      "</div>",
  ],
  projectImg: ["../img/projects/2_B/2_B.png", "../img/projects/2_B/2_B1.png"],
  projectDesc: "Description: This is Project 2_B",
  projectAdd: "Role: This is an Additional Information of Project 2_B",
  projectCode: [true, "code-slash", "CODE", "https://www.google.ca/"],
  projectDemo: [true, "logo-youtube", "DEMO", "https://www.youtube.com/"],
};

const PROJ_2_C = {
  imgPreview: "../img/projects/2_C/2_C.png",
  projectName: "Project 2-C",
  projectDate: "07/08/22 ~ 08/30/22",
  projectSize: ["ph-user", "Individual"],
  projectSkill: [
    "<div class='current-skillcontainer grid-col grid--2-cols'>" +
      "<div class='Skill JavaScript grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>JavaScript</p>" +
      "</div>" +
      "<div class='Skill HTML grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>HTML</p>" +
      "</div>" +
      "<div class='Skill HTML grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>HTML</p>" +
      "</div>" +
      "</div>",
  ],
  projectImg: ["../img/projects/2_C/2_C.png"],
  projectDesc: "Description: This is Project 2_C",
  projectAdd: "Role: This is an Additional Information of Project 2_C",
  projectCode: [true, "code-slash", "CODE", "https://www.google.ca/"],
  projectDemo: [true, "logo-youtube", "DEMO", "https://www.youtube.com/"],
};

const PROJ_2_D = {
  imgPreview: "../img/projects/2_D/2_D.png",
  projectName: "Project 2-D",
  projectDate: "07/08/22 ~ 08/30/22",
  projectSize: ["ph-user", "Individual"],
  projectSkill: [
    "<div class='current-skillcontainer grid-col grid--2-cols'>" +
      "<div class='Skill JavaScript grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>JavaScript</p>" +
      "</div>" +
      "<div class='Skill HTML grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>HTML</p>" +
      "</div>" +
      "<div class='Skill HTML grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>HTML</p>" +
      "</div>" +
      "</div>",
  ],
  projectImg: ["../img/projects/2_D/2_D.png"],
  projectDesc: "Description: This is Project 2_D",
  projectAdd: "Role: This is an Additional Information of Project 2_D",
  projectCode: [true, "code-slash", "CODE", "https://www.google.ca/"],
  projectDemo: [true, "logo-youtube", "DEMO", "https://www.youtube.com/"],
};

const PROJ_3_A = {
  imgPreview: "../img/projects/3_A/3_A.png",
  projectName: "Project 3-A",
  projectDate: "07/08/22 ~ 08/30/22",
  projectSize: ["ph-user", "Individual"],
  projectSkill: [
    "<div class='current-skillcontainer grid-col grid--2-cols'>" +
      "<div class='Skill JavaScript grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>JavaScript</p>" +
      "</div>" +
      "<div class='Skill HTML grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>HTML</p>" +
      "</div>" +
      "<div class='Skill HTML grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>HTML</p>" +
      "</div>" +
      "</div>",
  ],
  projectImg: ["../img/projects/3_A/3_A.png"],
  projectDesc: "Description: This is Project 3_A",
  projectAdd: "Role: This is an Additional Information of Project 3_A",
  projectCode: [true, "code-slash", "CODE", "https://www.google.ca/"],
  projectDemo: [true, "logo-youtube", "DEMO", "https://www.youtube.com/"],
};

const PROJ_3_B = {
  imgPreview: "../img/projects/3_B/3_B.png",
  projectName: "Project 3-B",
  projectDate: "07/08/22 ~ 08/30/22",
  projectSize: ["ph-user", "Individual"],
  projectSkill: [
    "<div class='current-skillcontainer grid-col grid--2-cols'>" +
      "<div class='Skill JavaScript grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>JavaScript</p>" +
      "</div>" +
      "<div class='Skill HTML grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>HTML</p>" +
      "</div>" +
      "<div class='Skill HTML grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>HTML</p>" +
      "</div>" +
      "</div>",
  ],
  projectImg: ["../img/projects/3_B/3_B.png"],
  projectDesc: "Description: This is Project 3_B",
  projectAdd: "Role: This is an Additional Information of Project 3_B",
  projectCode: [true, "code-slash", "CODE", "https://www.google.ca/"],
  projectDemo: [true, "logo-youtube", "DEMO", "https://www.youtube.com/"],
};

const PROJ_3_C = {
  imgPreview: "../img/projects/3_C/3_C.png",
  projectName: "Project 3-c",
  projectDate: "07/08/22 ~ 08/30/22",
  projectSize: ["ph-user", "Individual"],
  projectSkill: [
    "<div class='current-skillcontainer grid-col grid--2-cols'>" +
      "<div class='Skill JavaScript grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>JavaScript</p>" +
      "</div>" +
      "<div class='Skill HTML grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>HTML</p>" +
      "</div>" +
      "<div class='Skill HTML grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>HTML</p>" +
      "</div>" +
      "</div>",
  ],
  projectImg: [
    "../img/projects/3_C/3_C.png",
    "../img/projects/3_C/3_C1.png",
    "../img/projects/3_C/3_C2.png",
  ],
  projectDesc: "Description: This is Project 3_C",
  projectAdd: "Role: This is an Additional Information of Project 3_C",
  projectCode: [true, "code-slash", "CODE", "https://www.google.ca/"],
  projectDemo: [true, "logo-youtube", "DEMO", "https://www.youtube.com/"],
};

const PROJ_3_D = {
  imgPreview: "../img/projects/3_D/3_D.png",
  projectName: "Project 3-D",
  projectDate: "07/08/22 ~ 08/30/22",
  projectSize: ["ph-user", "Individual"],
  projectSkill: [
    "<div class='current-skillcontainer grid-col grid--2-cols'>" +
      "<div class='Skill JavaScript grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>JavaScript</p>" +
      "</div>" +
      "<div class='Skill HTML grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>HTML</p>" +
      "</div>" +
      "<div class='Skill HTML grid-col grid--2-cols'>" +
      "<ion-icon name='ellipse'></ion-icon>" +
      "<p>HTML</p>" +
      "</div>" +
      "</div>",
  ],

  projectImg: ["../img/projects/3_D/3_D.png"],
  projectDesc:
    "Description: This is Project 3_D Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio sunt similique ipsa, excepturi voluptate voluptatum placeat deserunt commodi",
  projectAdd:
    "Role: This is an Additional Information of Project 3_D Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio sunt similique ipsa, excepturi voluptate voluptatum placeat s is Project 3_D Lorem ipsum ",
  projectCode: [true, "code-slash", "CODE", "https://www.google.ca/"],
  projectDemo: [true, "logo-youtube", "DEMO", "https://www.youtube.com/"],
};

const PROJECTS = [
  PROJ_1_A,
  PROJ_1_B,
  PROJ_1_C,
  PROJ_1_D,
  PROJ_2_A,
  PROJ_2_B,
  PROJ_2_C,
  PROJ_2_D,
  PROJ_3_A,
  PROJ_3_B,
  PROJ_3_C,
  PROJ_3_D,
];

let previewImg;
let previewName;
let previewDate;
let previewSize;
let previewSkill;
let projImgs;
let projDesc;
let projAdd;
let projLinks;

function assignElements() {
  previewImg = document.querySelector(".current-intro--img"); //css
  previewName = document.querySelector(".current--name"); //innerText
  previewDate = document.querySelector(".current--date"); //innerText
  previewSize = document.querySelector(".current--group"); //innerHTML
  previewSkill = document.querySelector(".current-skills"); //innerHTML
  projImgs = document.querySelector(".slides"); //innerHTML
  projDesc = document.querySelector(".current-desc"); //innerText
  projAdd = document.querySelector(".current-lesson"); //innerText
  projLinks = document.querySelector(".current-links"); //innerHTML
}

function updateCurrentInner(projNum) {
  let PROJ = PROJECTS[projNum - 1];
  assignElements();
  console.log(PROJ.imgPreview);
  previewImg.style.backgroundImage = "url(" + PROJ.imgPreview + ")";
  previewName.innerText = PROJ.projectName;
  previewDate.innerText = PROJ.projectDate;
  previewSize.innerHTML =
    "<i class=" +
    PROJ.projectSize[0] +
    "></i>" +
    "<p class='current--group-numbers'>" +
    PROJ.projectSize[1] +
    "</p>";
  previewSkill.innerHTML = PROJ.projectSkill;
  let slideImgs = "";
  for (let i = 0; i < PROJ.projectImg.length; i++) {
    let img = "background-image: url(" + PROJ.projectImg[i] + ")";
    slideImgs = slideImgs + "<div class='slide' style='" + img + "'></div>";
  }

  projImgs.innerHTML = slideImgs;
  projDesc.innerText = PROJ.projectDesc;
  projAdd.innerText = PROJ.projectAdd;

  if (PROJ.projectDemo[0] == true) {
    projLinks.innerHTML =
      "<a class='btn-current-sourcecode' href='" +
      PROJ.projectCode[3] +
      "'>" +
      "<ion-icon name='" +
      PROJ.projectCode[1] +
      "'></ion-icon>" +
      "<p>" +
      PROJ.projectCode[2] +
      "</p>" +
      "</a>" +
      "<a class='btn-current-demo' href='" +
      PROJ.projectDemo[3] +
      "'>" +
      "<ion-icon name='" +
      PROJ.projectDemo[1] +
      "'></ion-icon>" +
      "<p>" +
      PROJ.projectDemo[2] +
      "</p>" +
      "</a>";
  } else {
    projLinks.innerHTML =
      "<a class='btn-current-sourcecode' href='" +
      PROJ.projectCode[3] +
      "'>" +
      "<ion-icon name='" +
      PROJ.projectCode[1] +
      "'></ion-icon>" +
      "<p>" +
      PROJ.projectCode[2] +
      "</p>" +
      "</a>";
  }
}

/* section portfolio animation */
/* portfolio slider */
let sliderWrapper = document.querySelector(
  ".section-portfolio .container .portfolio"
);
let sliderContainer = document.querySelector(".portfolio-container");
let slides = document.querySelectorAll(".portfolio-projects");
let slideCount = slides.length;
let indexCount = 0;
let currentIndex = 0;
let topWidth = 0;
let navNext = document.querySelector(".btn-project--next");
let navPrev = document.querySelector(".btn-project--prev");
let pageIDs = document.querySelectorAll(".btn-project--pageID");
let pageID_1 = document.querySelector(".btn-project--pageID:nth-child(1)");
let pageID_2 = document.querySelector(".btn-project--pageID:nth-child(2)");
let pageID_3 = document.querySelector(".btn-project--pageID:nth-child(3)");
let targetPage;
let below512;

function updatePageID() {
  for (let i = 0; i < pageIDs.length; i++) {
    pageIDs[i].classList.remove("currentPage");
  }
  if (Math.abs(currentIndex) % slideCount == 0) {
    pageIDs[0].classList.add("currentPage");
  } else {
    if (currentIndex == -2 || currentIndex == 1) {
      pageIDs[1].classList.add("currentPage");
    }
    if (currentIndex == -1 || currentIndex == 2) {
      pageIDs[2].classList.add("currentPage");
    }
  }
}

function onclick_PageID_1() {
  targetPage = 0;
  goToSlideIndex(targetPage, below512);
}

function onclick_PageID_2() {
  targetPage = 1;
  goToSlideIndex(targetPage, below512);
}

function onclick_PageID_3() {
  targetPage = 2;
  goToSlideIndex(targetPage, below512);
}

function portfolioAddEL() {
  navNext.addEventListener("click", currIndexInc);
  navPrev.addEventListener("click", currIndexDec);

  pageID_1.addEventListener("click", onclick_PageID_1);
  pageID_2.addEventListener("click", onclick_PageID_2);
  pageID_3.addEventListener("click", onclick_PageID_3);
}

function portfolioRemoveEL() {
  navNext.removeEventListener("click", currIndexInc);
  navPrev.removeEventListener("click", currIndexDec);
  pageID_1.removeEventListener("click", onclick_PageID_1);
  pageID_2.removeEventListener("click", onclick_PageID_2);
  pageID_3.removeEventListener("click", onclick_PageID_3);
}

function currIndexInc() {
  if (currentON == false) {
    portfolioRemoveEL();
    goToSlideIndex(currentIndex + 1, below512);
  } else {
    currentEnd();
    if (currentProjectNum >= PROJECTS.length) {
      currentProjectNum = 1;
    } else {
      currentProjectNum++;
    }
    currentInit();
  }
  console.log(PROJECTS.length);
}

function currIndexDec() {
  if (currentON == false) {
    portfolioRemoveEL();
    goToSlideIndex(currentIndex - 1, below512);
  } else {
    if (currentProjectNum <= 1) {
      currentProjectNum = PROJECTS.length;
    } else {
      currentProjectNum--;
    }
    currentInit();
  }
}

function calcWidthSlide() {
  let currentSlides = document.querySelectorAll(".portfolio-projects");
  topWidth = currentSlides[0].clientWidth;
  return topWidth;
}

function displaySlidesLeft(below512) {
  let unitWidth = calcWidthSlide();
  let currentSlides = document.querySelectorAll(".portfolio-projects");
  let newSlideCount = currentSlides.length;
  // for (let i = 0; i < newSlideCount; i++) {
  //   currentSlides[i].style.left = convertPixelsToRem(unitWidth) * i + "rem";
  // }

  if (below512 == true) {
    for (let i = 0; i < newSlideCount; i++) {
      currentSlides[i].style.left = 50 * i + "rem";
    }
  } else {
    for (let i = 0; i < newSlideCount; i++) {
      currentSlides[i].style.left = convertPixelsToRem(unitWidth) * i + "rem";
    }
  }
}

function goToSlideIndex(idx, below512) {
  sliderContainer.classList.add("slide-animated");
  let unitWidth = calcWidthSlide();
  console.log(
    "convertPixelsToRem(unitWidth): " + convertPixelsToRem(unitWidth)
  );

  if (below512 == true) {
    sliderContainer.style.left = idx * -50 + "rem";
  } else {
    sliderContainer.style.left = idx * -convertPixelsToRem(unitWidth) + "rem";
  }

  currentIndex = idx;
  console.log("STAGE 1: " + currentIndex, slideCount);
  setTimeout(function () {
    portfolioAddEL();
  }, 510);
  if (currentIndex == slideCount || currentIndex == -slideCount) {
    setTimeout(function () {
      sliderContainer.classList.remove("slide-animated");
      sliderContainer.style.left = "0rem";
      currentIndex = 0;
    }, 500);

    setTimeout(function () {
      sliderContainer.classList.add("slide-animated");
    }, 600);
  }
  updatePageID();
}

function makeCloneSlide() {
  slides = document.querySelectorAll(".portfolio-projects");
  for (var i = 0; i < slideCount; i++) {
    let cloneSlide = slides[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    sliderContainer.appendChild(cloneSlide);
  }
  for (var i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = slides[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    sliderContainer.prepend(cloneSlide);
  }
  updateContainerWidth();
  setInitPos();
  setTimeout(function () {
    sliderContainer.classList.add("animated");
  }, 100);
}

function removeCloneSlide() {
  let cloneSlide = document.querySelectorAll(".clone");
  for (let i = 0; i < cloneSlide.length; i++) {
    $(cloneSlide[i]).remove();
  }
}

function updateContainerWidth(below512) {
  let currentSlides = document.querySelectorAll(".portfolio-projects");
  let newSlideCount = currentSlides.length;
  let unitWidth = calcWidthSlide();
  let newContainerWidth = 0;
  if (below512 == true) {
    newContainerWidth = (450 / (slideCount * 3)) * newSlideCount + "rem";
  } else {
    newContainerWidth = convertPixelsToRem(unitWidth) * newSlideCount + "rem";
  }
  sliderContainer.style.width = newContainerWidth;
}

function setInitPos() {
  let unitWidth = calcWidthSlide();
  let initTransVal = -1 * convertPixelsToRem(unitWidth) * slideCount;
  sliderContainer.style.transform = "translateX(" + initTransVal + "rem)";
}

function portfolioInit(restart, below992, below512) {
  updatePageID();
  if (restart == true) {
    removeCloneSlide();
  }

  currentIndex = 0;
  console.log("current idx: " + currentIndex);
  console.log("index count:" + indexCount);
  console.log("topwidth: " + topWidth);
  portfolioRemoveEL();
  makeCloneSlide();
  updateContainerWidth(below512);
  displaySlidesLeft(below512);
  if (below992 == true) {
    sliderContainer.style.transform =
      "translateX(" + 450 / (slideCount * 3) + "rem)";
  } else {
    console.log("hm");
    setInitPos();
  }
  goToSlideIndex(0, below512);
  portfolioAddEL();
}

/* current project carousel*/
let sliderWrapper_current;
let sliderContainer_current;
let slides_current;
let slideCount_current;
let currentIndex_current;
let navNext_current;
let navPrev_current;
let width;
let playslide;
let timer;

function startTimer() {
  timer = setInterval(function () {
    // let nextIndex_current = (currentIndex_current + 1) % slideCount_current;
    currentIndex_current++;
    goToSlideIndex_current(currentIndex_current);
    console.log("count");
  }, 5000);
  console.log("start!");
  return;
}

function initTimer() {
  sliderWrapper_current.addEventListener("mouseenter", stopTimer);
  sliderWrapper_current.addEventListener("mouseleave", startTimer);
  return;
}
function removeTimer() {
  sliderWrapper_current.removeEventListener("mouseenter", stopTimer);
  sliderWrapper_current.removeEventListener("mouseleave", startTimer);
  return;
}

function stopTimer() {
  clearInterval(timer);
  console.log("stopped");
  return;
}

function setInitValues_current() {
  sliderWrapper_current = document.querySelector(".slide-wrapper");
  sliderContainer_current = document.querySelector(".slides");
  slides_current = document.querySelectorAll(".slide");
  slideCount_current = slides_current.length;
  currentIndex_current = 0;
  navNext_current = document.querySelector(".btn-current-next");
  navPrev_current = document.querySelector(".btn-current-prev");
  width;
  return;
}

function currentAddEl() {
  navNext_current.addEventListener("click", currIndexInc_current);
  navPrev_current.addEventListener("click", currIndexDec_current);
  console.log("curAddel");
  return;
}

function currentRemoveEl() {
  navNext_current.removeEventListener("click", currIndexInc_current);
  navPrev_current.removeEventListener("click", currIndexDec_current);
  return;
}

function currIndexInc_current() {
  currentRemoveEl();
  goToSlideIndex_current(currentIndex_current + 1);
  return;
}

function currIndexDec_current() {
  currentRemoveEl();
  goToSlideIndex_current(currentIndex_current - 1);
  return;
}

function calcWidthSlide_current() {
  width = slides_current[0].clientWidth;
  return;
}

function makeCloneSlide_current() {
  slides_current = document.querySelectorAll(".slide");
  for (let i = 0; i < slideCount_current; i++) {
    let cloneSlide = slides_current[i].cloneNode(true);
    cloneSlide.classList.add("clone_current");
    sliderContainer_current.appendChild(cloneSlide);
  }
  for (let i = slideCount_current - 1; i >= 0; i--) {
    let cloneSlide = slides_current[i].cloneNode(true);
    cloneSlide.classList.add("clone_current");
    sliderContainer_current.prepend(cloneSlide);
  }

  updateWidth_current();
  setInitPos_current();
  setTimeout(function () {
    sliderContainer_current.classList.add("animated");
  }, 100);
  return;
}

function removeCloneSlide_current() {
  let cloneSlide = document.querySelectorAll(".clone_current");
  for (let i = 0; i < cloneSlide.length; i++) {
    $(cloneSlide[i]).remove();
  }
  return;
}

function setInitPos_current() {
  let initalTransVal_current = slideCount_current * -width;
  sliderContainer_current.style.transform =
    "translateX(" + initalTransVal_current + "px)";
  return;
}

function updateWidth_current() {
  let slides_current_updated = document.querySelectorAll(".slide");
  let newSlideCount_current = slides_current_updated.length;
  let newWidth_current = width * newSlideCount_current;
  console.log(newWidth_current);
  sliderContainer_current.style.width = newWidth_current + "px";
  return;
}

function displaySlidesLeft_current() {
  let slides_current_updated = document.querySelectorAll(".slide");
  for (let i = 0; i < slides_current_updated.length; i++) {
    slides_current_updated[i].style.left = width * i + "px";
  }
  return;
}

function goToSlideIndex_current(idx) {
  setTimeout(function () {
    currentAddEl();
  }, 510);
  sliderContainer_current.classList.add("animated");
  sliderContainer_current.style.left = idx * -width + "px";
  currentIndex_current = idx;

  if (
    currentIndex_current == slideCount_current ||
    currentIndex_current == -slideCount_current
  ) {
    setTimeout(function () {
      sliderContainer_current.classList.remove("animated");
      sliderContainer_current.style.left = "0px";
      currentIndex_current = 0;
    }, 500);

    setTimeout(function () {
      sliderContainer_current.classList.add("animated");
    }, 600);
  }
  console.log("STAGE 2: " + currentIndex_current, slideCount_current);
  return;
}

/* current project */
let currentProjectNum;
let project_inner = document.querySelector(".project-container");
let project_outter = document.querySelector(".portfolio-container");
let btn_innerClose = document.querySelector(".current-project");
let allProjects = document.querySelectorAll(".portfolio-projects");
let currentON = false;
/* page 1*/
let project_1_A;
let project_1_B;
let project_1_C;
let project_1_D;
/* page 2*/
let project_2_A;
let project_2_B;
let project_2_C;
let project_2_D;
/* page 3*/
let project_3_A;
let project_3_B;
let project_3_C;
let project_3_D;

function addElBtn_close() {
  btn_innerClose.addEventListener("click", currentEnd);
  return;
}

function addElProject_1_A() {
  project_1_A = document.querySelectorAll(".project-1-A");
  for (let i = 0; i < project_1_A.length; i++) {
    project_1_A[i].addEventListener("click", currentInit_1_A);
    console.log("P1 El added");
  }
  return;
}

function addElProject_1_B() {
  project_1_B = document.querySelectorAll(".project-1-B");
  for (let i = 0; i < project_1_B.length; i++) {
    project_1_B[i].addEventListener("click", currentInit_1_B);
    console.log("P1 El added");
  }
  return;
}

function addElProject_1_C() {
  project_1_C = document.querySelectorAll(".project-1-C");
  for (let i = 0; i < project_1_C.length; i++) {
    project_1_C[i].addEventListener("click", currentInit_1_C);
    console.log("P1 El added");
  }
  return;
}

function addElProject_1_D() {
  project_1_D = document.querySelectorAll(".project-1-D");
  for (let i = 0; i < project_1_D.length; i++) {
    project_1_D[i].addEventListener("click", currentInit_1_D);
    console.log("P1 El added");
  }
  return;
}

function addElProject_2_A() {
  project_2_A = document.querySelectorAll(".project-2-A");
  for (let i = 0; i < project_2_A.length; i++) {
    project_2_A[i].addEventListener("click", currentInit_2_A);
    console.log("P2 El added");
  }
  return;
}

function addElProject_2_B() {
  project_2_B = document.querySelectorAll(".project-2-B");
  for (let i = 0; i < project_2_B.length; i++) {
    project_2_B[i].addEventListener("click", currentInit_2_B);
    console.log("P2 El added");
  }
  return;
}

function addElProject_2_C() {
  project_2_C = document.querySelectorAll(".project-2-C");
  for (let i = 0; i < project_2_C.length; i++) {
    project_2_C[i].addEventListener("click", currentInit_2_C);
    console.log("P2 El added");
  }
  return;
}

function addElProject_2_D() {
  project_2_D = document.querySelectorAll(".project-2-D");
  for (let i = 0; i < project_2_D.length; i++) {
    project_2_D[i].addEventListener("click", currentInit_2_D);
    console.log("P2 El added");
  }
  return;
}

function addElProject_3_A() {
  project_3_A = document.querySelectorAll(".project-3-A");
  for (let i = 0; i < project_3_A.length; i++) {
    project_3_A[i].addEventListener("click", currentInit_3_A);
    console.log("P3 El added");
  }
  return;
}

function addElProject_3_B() {
  project_3_B = document.querySelectorAll(".project-3-B");
  for (let i = 0; i < project_3_B.length; i++) {
    project_3_B[i].addEventListener("click", currentInit_3_B);
    console.log("P3 El added");
  }
  return;
}

function addElProject_3_C() {
  project_3_C = document.querySelectorAll(".project-3-C");
  for (let i = 0; i < project_3_C.length; i++) {
    project_3_C[i].addEventListener("click", currentInit_3_C);
    console.log("P3 El added");
  }
  return;
}

function addElProject_3_D() {
  project_3_D = document.querySelectorAll(".project-3-D");
  for (let i = 0; i < project_3_D.length; i++) {
    project_3_D[i].addEventListener("click", currentInit_3_D);
    console.log("P3 El added");
  }
  return;
}

function addElAllProjects() {
  addElProject_1_A();
  addElProject_1_B();
  addElProject_1_C();
  addElProject_1_D();
  addElProject_2_A();
  addElProject_2_B();
  addElProject_2_C();
  addElProject_2_D();
  addElProject_3_A();
  addElProject_3_B();
  addElProject_3_C();
  addElProject_3_D();

  return;
}

function removeElAllProjects() {
  for (let i = 0; i < project_1_A.length; i++) {
    project_1_A[i].removeEventListener("click", currentInit_1_A);
    console.log("P1 El removed");
  }
  for (let i = 0; i < project_1_B.length; i++) {
    project_1_B[i].removeEventListener("click", currentInit_1_B);
    console.log("P1 El removed");
  }
  for (let i = 0; i < project_1_C.length; i++) {
    project_1_C[i].removeEventListener("click", currentInit_1_C);
    console.log("P1 El removed");
  }
  for (let i = 0; i < project_1_D.length; i++) {
    project_1_D[i].removeEventListener("click", currentInit_1_D);
    console.log("P1 El removed");
  }
  for (let i = 0; i < project_2_A.length; i++) {
    project_2_A[i].removeEventListener("click", currentInit_2_A);
    console.log("P2 El removed");
  }
  for (let i = 0; i < project_2_B.length; i++) {
    project_2_B[i].removeEventListener("click", currentInit_2_B);
    console.log("P2 El removed");
  }
  for (let i = 0; i < project_2_C.length; i++) {
    project_2_C[i].removeEventListener("click", currentInit_2_C);
    console.log("P2 El removed");
  }
  for (let i = 0; i < project_2_D.length; i++) {
    project_2_D[i].removeEventListener("click", currentInit_2_D);
    console.log("P2 El removed");
  }

  for (let i = 0; i < project_3_A.length; i++) {
    project_3_A[i].removeEventListener("click", currentInit_3_A);
    console.log("P3 El removed");
  }
  for (let i = 0; i < project_3_B.length; i++) {
    project_3_B[i].removeEventListener("click", currentInit_3_B);
    console.log("P3 El removed");
  }
  for (let i = 0; i < project_3_C.length; i++) {
    project_3_C[i].removeEventListener("click", currentInit_3_C);
    console.log("P3 El removed");
  }
  for (let i = 0; i < project_3_D.length; i++) {
    project_3_D[i].removeEventListener("click", currentInit_3_D);
    console.log("P3 El removed");
  }

  return;
}

function currentInit_1_A() {
  currentProjectNum = 1;
  let currentON = 1;
  currentInit(true);
  return;
}
function currentInit_1_B() {
  currentProjectNum = 2;
  currentInit(true);
  return;
}
function currentInit_1_C() {
  currentProjectNum = 3;
  currentInit(true);
  return;
}
function currentInit_1_D() {
  currentProjectNum = 4;
  currentInit(true);
  return;
}
function currentInit_2_A() {
  currentProjectNum = 5;
  currentInit(true);
  return;
}
function currentInit_2_B() {
  currentProjectNum = 6;
  currentInit(true);
  return;
}
function currentInit_2_C() {
  currentProjectNum = 7;
  currentInit(true);
  return;
}
function currentInit_2_D() {
  currentProjectNum = 8;
  currentInit(true);
  return;
}
function currentInit_3_A() {
  currentProjectNum = 9;
  currentInit(true);
  return;
}
function currentInit_3_B() {
  currentProjectNum = 10;
  currentInit(true);
  return;
}
function currentInit_3_C() {
  currentProjectNum = 11;
  currentInit(true);
  return;
}
function currentInit_3_D() {
  currentProjectNum = 12;
  currentInit(true);
  return;
}

function disableSlideCount() {
  pageID_1.style.pointerEvents = "none";
  pageID_2.style.pointerEvents = "none";
  pageID_3.style.pointerEvents = "none";
}

function enableSlideCount() {
  pageID_1.style.pointerEvents = "auto";
  pageID_2.style.pointerEvents = "auto";
  pageID_3.style.pointerEvents = "auto";
}

function currentInit(start) {
  currentON = true;
  console.log("current Project NUM: " + currentProjectNum);
  project_outter.classList.add("hidden");
  project_inner.classList.remove("hidden");
  updateCurrentInner(currentProjectNum);
  // start inner carousel reconstruction
  if (start == true) {
    currentIndex_current = 0;
  }
  setInitValues_current();
  currentAddEl();
  calcWidthSlide_current();
  makeCloneSlide_current();
  displaySlidesLeft_current();
  goToSlideIndex_current(0);
  addElBtn_close();
  disableSlideCount();
  startTimer();
  initTimer();

  return;
}

function currentEnd() {
  currentON = false;
  currentIndex_current = 0;
  sliderContainer_current.classList.remove("animated");
  currentRemoveEl();
  btn_innerClose.removeEventListener("click", currentEnd);
  removeCloneSlide_current();
  enableSlideCount();
  stopTimer();
  removeTimer(); //newadded
  project_inner.classList.add("hidden");
  project_outter.classList.remove("hidden");
  // clearInterval(playSlide);
  return;
}

addElAllProjects();

/* restart every screen-size updated */
let screenSize1200 = window.matchMedia("screen and (max-width: 75em)");
let screenSize992 = window.matchMedia("screen and (max-width: 62em)");
let screenSize800 = window.matchMedia("screen and (max-width: 50em)");
let screenSize512 = window.matchMedia("screen and (max-width: 46em)");

window.onresize = function () {
  if (matchMedia("screen and (max-width: 20em)").matches) {
    if (currentON == true) {
      currentEnd();
    }
    removeElAllProjects();
    removeTouchElPortfolio_m();
    portfolioInit(true, true, true);
    below512 = true;
    addElAllProjects();
    addTouchElPortfolio_m();
  } else if (matchMedia("screen and (max-width: 25em)").matches) {
    if (currentON == true) {
      currentEnd();
    }
    removeElAllProjects();
    removeTouchElPortfolio_m();
    console.log(320);
    below512 = true;
    portfolioInit(true, true, true);
    addElAllProjects();
    addTouchElPortfolio_m();
  } else if (matchMedia("screen and (max-width: 32em)").matches) {
    if (currentON == true) {
      currentEnd();
    }
    removeElAllProjects();
    removeTouchElPortfolio_m();
    console.log(512);
    below512 = true;
    portfolioInit(true, true, true);
    addElAllProjects();
    addTouchElPortfolio_m();
  } else if (matchMedia("screen and (max-width: 50em)").matches) {
    if (currentON == true) {
      currentEnd();
    }
    removeElAllProjects();
    removeTouchElPortfolio_m();
    console.log(800);
    portfolioInit(true, true, false);
    below512 = false;
    addElAllProjects();
    addTouchElPortfolio_m();
  } else if (matchMedia("screen and (max-width: 62em)").matches) {
    if (currentON == true) {
      currentEnd();
    }
    removeElAllProjects();
    removeTouchElPortfolio_m();
    console.log(992);
    portfolioInit(true, true, false);
    below512 = false;
    addElAllProjects();
    addTouchElPortfolio_m();
  } else if (matchMedia("screen and (max-width: 75em)").matches) {
    if (currentON == true) {
      currentEnd();
    }
    removeElAllProjects();
    removeTouchElPortfolio_m();
    console.log(1200);
    portfolioInit(true, false, false);
    below512 = false;
    addElAllProjects();
    addTouchElPortfolio_m();
  } else {
    if (currentON == true) {
      currentEnd();
    }
    removeElAllProjects();
    removeTouchElPortfolio_m();
    portfolioInit(true, false, false);
    below512 = false;
    addElAllProjects();
    addTouchElPortfolio_m();
  }
};

if (matchMedia("screen and (max-width: 20em)").matches) {
  removeElAllProjects();
  portfolioInit(false, true, true);
  below512 = true;
  addTouchElPortfolio_m();
} else if (matchMedia("screen and (max-width: 25em)").matches) {
  console.log(320);
  removeElAllProjects();
  portfolioInit(true, true, true);
  below512 = true;
  addElAllProjects();
  addTouchElPortfolio_m();
} else if (matchMedia("screen and (max-width: 32em)").matches) {
  console.log(512);
  removeElAllProjects();
  portfolioInit(false, true, true);
  below512 = true;
  addElAllProjects();
  addTouchElPortfolio_m();
} else if (matchMedia("screen and (max-width: 50em)").matches) {
  console.log(800);
  removeElAllProjects();
  portfolioInit(false, true, false);
  below512 = false;
  addElAllProjects();
  addTouchElPortfolio_m();
} else if (matchMedia("screen and (max-width: 62em)").matches) {
  console.log(992);
  removeElAllProjects();
  portfolioInit(false, true, false);
  below512 = false;
  addElAllProjects();
  addTouchElPortfolio_m();
} else if (matchMedia("screen and (max-width: 75em)").matches) {
  console.log(1200);
  removeElAllProjects();
  portfolioInit(false, false, false);
  below512 = false;
  addElAllProjects();
  addTouchElPortfolio_m();
} else {
  removeElAllProjects();
  portfolioInit(false, false, false);
  below512 = false;
  addElAllProjects();
  addTouchElPortfolio_m();
}

/* mobile slider touch evets */

let start_x, end_x;

function addTouchElPortfolio_m() {
  let portfolio_m = document.querySelector(".portfolio");
  portfolio_m.addEventListener("touchstart", touch_start);
  portfolio_m.addEventListener("touchend", touch_end);
  console.log("addELlll");
}

function removeTouchElPortfolio_m() {
  let portfolio_m = document.querySelector(".portfolio");
  portfolio_m.removeEventListener("touchstart", touch_start);
  portfolio_m.removeEventListener("touchend", touch_end);

  console.log("delete Ellll");
}

function touch_start(event) {
  start_x = event.touches[0].pageX;
}

function touch_end(event) {
  end_x = event.changedTouches[0].pageX;
  if (start_x + 40 < end_x) {
    currIndexDec();
  } else if (start_x - 40 > end_x) {
    currIndexInc();
  } else {
    console.log("ELSE!");
  }
}

/* section contact hover animation */
let btn_send = document.querySelector(".btn-contact--send");
let cont_box = document.querySelector(
  ".contact .contact-head .contact-headbox"
);
let nav_text = document.querySelectorAll("div nav ul li a");
let nav_text_i = document.querySelectorAll("div nav ul li a span");
let top_deco = document.querySelector(".top-decoration");
let focus_message = document.querySelector("#contact-message");
let focus_email = document.querySelector("#contact-email");
let focus_name = document.querySelector("#contact-name");

addTranstionContact();

function addTranstionContact() {
  btn_send.style.transition = "all 0.3s";
  cont_box.style.transition = "all 0.3s";
  top_deco.style.transition = "all 0.3s";
  focus_message.style.transition = "all 0.3s";
  focus_email.style.transition = "all 0.3s";
  focus_name.style.transition = "all 0.3s";
}

btn_send.addEventListener("mouseover", function () {
  addTranstionContact();

  for (let i = 0; i < nav_text.length - 1; i++) {
    nav_text[i].style.color = "#cc3c54";
  }

  for (let i = 0; i < nav_text_i.length - 1; i++) {
    nav_text_i[i].style.color = "#cc3c54";
  }

  cont_box.style.backgroundImage =
    "linear-gradient(120deg, #f77062 0%, #fe5196 100%)";

  for (let i = 0; i < nav_text.length - 1; i++) {
    nav_text[i].style.color =
      "linear-gradient(120deg, #f77062 0%, #fe5196 100%)";
  }

  for (let i = 0; i < nav_text_i.length - 1; i++) {
    nav_text_i[i].style.color =
      "linear-gradient(120deg, #f77062 0%, #fe5196 100%)";
  }

  top_deco.style.backgroundImage =
    "linear-gradient(120deg, #f77062 0%, #fe5196 100%)";
});

btn_send.addEventListener("mouseout", function () {
  cont_box.removeAttribute("style");
  for (let i = 0; i < nav_text.length - 1; i++) {
    nav_text[i].removeAttribute("style");
  }
  for (let i = 0; i < nav_text_i.length - 1; i++) {
    nav_text_i[i].removeAttribute("style");
  }
  top_deco.removeAttribute("style");
  focus_message.removeAttribute("style");
  focus_email.removeAttribute("style");
  focus_name.removeAttribute("style");
});
