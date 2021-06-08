const header = document.querySelector(`header`);
const logo = document.querySelector(".logo");
const navigation = document.querySelector("nav");
const slantOne = document.querySelector(".slantOne");
const slantTwo = document.querySelector(".slantTwo");

window.addEventListener("scroll", () => {
    header.classList.toggle("wrap", window.scrollY > 0);
    if (window.scrollY > 0) {
        logo.innerHTML = "kstopka";
    } else {
        logo.innerHTML = "Krystian Stopka";
    }

    const firstValue = -15 + window.scrollY / 45;
    const secondValue = 15 + window.scrollY / -45;
    slantOne.style.transform = `skewY(${firstValue}deg)`;
    slantTwo.style.transform = `skewY(${secondValue}deg)`;
});

document.querySelector(".toggle").onclick = function () {
    this.classList.toggle("active");
    navigation.classList.toggle("active");
};
