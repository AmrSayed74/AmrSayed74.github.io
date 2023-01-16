/* ===== Start Preload  ====== */
function preload() {
  let now;
  if (performance.now <= 500) {
    now = performance.now;
  } else {
    now = 3000;
  }
  document.documentElement.style.setProperty("--preload", `${now}ms`);

  let hide = document.querySelector(".loading");
  window.addEventListener("load", () => {
    setInterval(() => {
      if (now) {
        hide.classList.add("hide-load");
        hide.remove();
      }
    }, now);
  });
}

preload();
/* ===== End Preload ====== */

/* ===== Start Links Header ====== */
const headerLinks = document.querySelectorAll(".ul-nav .nav-list .nav-link");
const navMenuIcon = document.querySelector(".menu-icon");
const navPhoneMenu = document.getElementById("phone-nav");
const navPhoneLinks = document.querySelectorAll(
  ".phone-nav-ul .phone-nav-li .phone-link"
);

function scrollingView(elements) {
  elements.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
scrollingView(headerLinks);
scrollingView(navPhoneLinks);

function toggleClass(active, show) {
  active.classList.toggle("active");
  show.classList.toggle("show");
}

if (document.querySelector(".menu-icon") != null) {
  navMenuIcon.addEventListener("click", (e) => {
    toggleClass(navMenuIcon, navPhoneMenu);
  });
}
navPhoneLinks.forEach((link) => {
  link.addEventListener("click", () => {
    toggleClass(navMenuIcon, navPhoneMenu);
  });
});

/* ===== End Links Header ====== */

/* ===== Start Home Section Scroll Button ====== */
const scrollToAboutSection = document.querySelector(".scrolldown");
if (document.querySelector(".scrolldown") != null) {
  scrollToAboutSection.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
}
/* ===== End Home Section Scroll Button ====== */
/* ===== Start TypeWriter Effect  ====== */
if (document.querySelector(".typed") != null) {
  let typed = new Typed(".typed", {
    strings: [
      "UI Developer",
      "Freelancer",
      " Front-End Developer",
      "Articles Writer",
      "Content Creator",
    ],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
  });
  console.log(typed);
}
/* ===== End TypeWriter Effect  ====== */

/* ===== Start Scroll To Top Button ===== */
const scrollTop = document.querySelector(".scroll-top");
if (document.querySelector(".scroll-top") != null) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      scrollTop.classList.add("active");
    } else {
      scrollTop.classList.remove("active");
    }
  });
  scrollTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

/* ===== End Scroll To Top Button ===== */
