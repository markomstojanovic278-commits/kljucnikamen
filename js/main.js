document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const siteNav = document.getElementById("siteNav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      siteNav.classList.toggle("open");
    });
  }

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxTriggers = document.querySelectorAll(".lightbox-trigger");

  lightboxTriggers.forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const imgSrc = trigger.getAttribute("href");
      if (lightbox && lightboxImg) {
        lightboxImg.src = imgSrc;
        lightbox.classList.add("open");
      }
    });
  });

  if (lightboxClose && lightbox) {
    lightboxClose.addEventListener("click", () => {
      lightbox.classList.remove("open");
    });
  }

  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove("open");
      }
    });
  }

  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(item => observer.observe(item));
});
function changeLanguage(select){

  const lang = select.value;

  const currentPath = window.location.pathname;
  const page = currentPath.split("/").pop();

  if(lang === "en"){
      window.location.href = "en/" + page;
  }else{
      window.location.href = "../" + page;
  }

}