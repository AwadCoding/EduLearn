// menu toggle in mobile
const bars = document.querySelector(".fa-solid.fa-bars");
const close = document.querySelector(".fa-solid.fa-xmark");
const navUl = document.querySelector("nav ul");

// دالة تتحقق إذا كنا في شاشة موبايل
function isMobile() {
    return window.innerWidth <= 640;
}

bars.addEventListener("click", function (e) {
    if (!isMobile()) return;
    e.stopPropagation();
    navUl.classList.toggle("open");
    bars.style.display = "none";
    close.style.display = "block";
});

close.addEventListener("click", function (e) {
    if (!isMobile()) return;
    e.stopPropagation();
    navUl.classList.remove("open");
    close.style.display = "none";
    bars.style.display = "block";
});

// إغلاق القائمة عند الضغط خارجها
document.addEventListener("click", function (event) {
    if (!isMobile()) return;
    if (!navUl.contains(event.target) && !bars.contains(event.target) && !close.contains(event.target)) {
        navUl.classList.remove("open");
        close.style.display = "none";
        bars.style.display = "block";
    }
});

// إغلاق القائمة عند الضغط على عنصر من عناصر القائمة
navUl.addEventListener("click", function () {
    if (!isMobile()) return;
    navUl.classList.remove("open");
    close.style.display = "none";
    bars.style.display = "block";
});

// عند تغيير حجم الشاشة، أعد ضبط الأيقونات
window.addEventListener("resize", function () {
    if (!isMobile()) {
        navUl.classList.remove("open");
        bars.style.display = "";
        close.style.display = "none";
    }
});