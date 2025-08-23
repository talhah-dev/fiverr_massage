const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuCloseBtns = document.querySelectorAll(".mobileMenuCloseBtn");

const openMenu = () => {
    mobileMenu.style.width = "100%";
    mobileMenu.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
};
const closeMenu = () => {
    mobileMenu.style.width = "0";
    mobileMenu.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
};

mobileMenuBtn.addEventListener("click", openMenu);
mobileMenuBtn.addEventListener("keypress", (e) => { if (e.key === "Enter") openMenu(); });

mobileMenuCloseBtns.forEach((btn) => {
    btn.addEventListener("click", closeMenu);
    btn.addEventListener("keypress", (e) => { if (e.key === "Enter") closeMenu(); });
});