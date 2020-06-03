const menuButton = document.querySelector("button");
console.log(menuButton)
const nav = document.querySelector("ul");

const openMenu = () => nav.classList.toggle("nav-visible");

menuButton.addEventListener("click", openMenu);
