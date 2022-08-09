function init(){
    let 
        dropdownElement = document.querySelector(".dropdown__container"),
        activateDropdownElement = document.querySelector(".dropdown__activate"),
        themeTogglers = document.querySelectorAll(".themeToggler");

    activateDropdownElement.addEventListener("mouseenter", () => {
        dropdownElement.style.maxHeight = `${dropdownElement.children[0].offsetHeight}px`;
    });

    activateDropdownElement.addEventListener("mouseleave", () => {
        dropdownElement.style.maxHeight = 0;
    });

    themeTogglers.forEach(el => {
        el.addEventListener("click", toggleTheme);
    })

    document.querySelectorAll("#burger, #cross").forEach(el => {
        el.addEventListener("click", toggleMenu);
    });
}

function toggleTheme(){
    document.body.classList.toggle("dark");
}

function toggleMenu(){
    console.log("toggle menu");
    document.querySelector(".menu").classList.toggle("menu--active");
    document.querySelector("#burger").classList.toggle("menuAction--active");
    document.querySelector("#cross").classList.toggle("menuAction--active");
    document.querySelectorAll(".logo").forEach(el => {
        el.classList.toggle("logo--mobile");
    })
}

window.addEventListener("DOMContentLoaded", init);