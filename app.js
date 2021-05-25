const header = document.querySelector(`header`);
const logo = document.querySelector(".logo");
const navigation = document.querySelector("nav");

window.addEventListener("scroll", () => {
    header.classList.toggle("wrap", window.scrollY > 0);
    if (window.scrollY > 0) {
        logo.innerHTML = "kstopka";
    } else {
        logo.innerHTML = "Krystian Stopka";
    }
});

document.querySelector(".toggle").onclick = function () {
    this.classList.toggle("active");
    navigation.classList.toggle("active");
};
