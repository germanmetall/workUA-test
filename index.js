function initUI(){
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

function initTrainer(){
    let 
        initString = "We're no strangers to love. You know the rules and so do I".split(""),
        birdElement = document.querySelector("#bird"),
        typeElement = document.querySelector("#textfield"),
        isRunningSuccess = false,
        isRunningError = false;

    function inputChar(e){
        if(e.key === initString[0]){
            initString.shift();
            startAnimation();
            typeElement.innerText = initString.join("");
        }
        else if(!e.shiftKey){
            startAnimation(false);
        }
    }

    function startAnimation(success = true){
        if(success){
            document.querySelectorAll("#beakTop, #beakBottom").forEach(el => {
                if(!isRunningSuccess) {
                    isRunningSuccess = true;
                    el.classList.add("animateSuccess");
                    setTimeout(() => {
                        el.classList.remove("animateSuccess");
                        isRunningSuccess = false;
                    }, 500);
                }
            })
        }
        else{
            if(!isRunningError) {
                isRunningError = true;
                document.querySelector("#bird").classList.add("animateError");
                setTimeout(() => {
                    document.querySelector("#bird").classList.remove("animateError");
                    isRunningError = false;
                }, 500);
            }
        }
    }

    typeElement.innerText = initString.join("");
    document.addEventListener("keydown", inputChar);
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

window.addEventListener("DOMContentLoaded", () => {
    initUI();
    initTrainer();
});