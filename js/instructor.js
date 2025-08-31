
// const courseLinks = document.querySelectorAll(".course__link");
// courseLinks.forEach(link => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     const courseId = this.getAttribute("data-course");
//     window.location.href = `${courseId}.html`;
//   });
// });


const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("main .section");

navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = this.getAttribute("data-section");

    sections.forEach(sec => {
      if (sec.id === target) {
        sec.style.display = "block";
      } else {
        sec.style.display = "none";
      }
    });
  });
});


sections.forEach(sec => sec.style.display = "block");

