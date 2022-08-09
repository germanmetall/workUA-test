function initUI(){
    // menu, dropdowns
    let 
        dropdownElement = document.querySelector(".dropdown__container"),
        activateDropdownElement = document.querySelector(".dropdown__activate"),
        themeTogglers = document.querySelectorAll(".themeToggler"),
        actionsElements = document.querySelectorAll("#burger, #cross");

    activateDropdownElement.addEventListener("mouseenter", () => {
        dropdownElement.style.maxHeight = `${dropdownElement.children[0].offsetHeight}px`;
    });

    activateDropdownElement.addEventListener("mouseleave", () => {
        dropdownElement.style.maxHeight = 0;
    });

    themeTogglers.forEach(el => {
        el.addEventListener("click", toggleTheme);
    })

    actionsElements.forEach(el => {
        el.addEventListener("click", () => toggleMenu(false));
    });
}

function initTrainer(){
    let 
        initString = "We're no strangers to love. You know the rules and so do I".split(""),
        typeElement = document.querySelector("#textfield"),
        birdElement = document.querySelector("#bird"),
        beakTopElement = document.querySelector("#beakTop"),
        beakBottomElement = document.querySelector("#beakBottom"),
        restartElements = document.querySelectorAll(".restart"),
        isRunningSuccess = false,
        isRunningError = false;

    function inputChar(e){
        toggleMenu(true);
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
            [beakTopElement, beakBottomElement].forEach(el => {
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
                birdElement.classList.add("animateError");
                setTimeout(() => {
                    birdElement.classList.remove("animateError");
                    isRunningError = false;
                }, 500);
            }
        }
    }

    function restart(){
        initString = "We're no strangers to love. You know the rules and so do I".split("");
        typeElement.innerText = initString.join("");
    }

    typeElement.innerText = initString.join("");
    document.addEventListener("keydown", inputChar);
    restartElements.forEach(el => {
        el.addEventListener("click", restart);
    })
}

function toggleTheme(){
    document.body.classList.toggle("dark");
}

function toggleMenu(onInput = false){
    if(onInput){
        document.querySelector(".menu").classList.remove("menu--active");
        document.querySelector("#burger").classList.remove("menuAction--active");
        document.querySelector("#cross").classList.remove("menuAction--active");
        document.querySelectorAll(".logo").forEach(el => {
            el.classList.remove("logo--mobile");
        })
    }
    else{
        document.querySelector(".menu").classList.toggle("menu--active");
        document.querySelector("#burger").classList.toggle("menuAction--active");
        document.querySelector("#cross").classList.toggle("menuAction--active");
        document.querySelectorAll(".logo").forEach(el => {
            el.classList.toggle("logo--mobile");
        })
    }
}

window.addEventListener("DOMContentLoaded", () => {
    initUI();
    if(window.innerWidth > 768){
        initTrainer();
    }
    else{
        alert("Encouraged by ratatype.com (as said in the instructions)! \nNot supporting mobile devices there - no supporting mobile devices here!");
    }
});