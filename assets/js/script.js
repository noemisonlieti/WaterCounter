// Helper function to create elements 
function createElement (tag, className, textContent) {
    const element = document.createElement(tag);
    if (className) {
        element.className = className;
    } if (textContent) {
        element.textContent = textContent;
    }
    return element;
}

// Creating elements - Counter
const main = createElement("main");
document.body.appendChild(main);

const divCounterTitle = createElement("div", "counter-title");
main.insertAdjacentElement("afterbegin", divCounterTitle);

const heading = createElement("h1", "", "Water Counter");
divCounterTitle.appendChild(heading);

const divCardContainer = createElement("div", "card-container");
main.appendChild(divCardContainer);

const divCounterCard = createElement("div", "counter-card");
divCardContainer.insertAdjacentElement("afterbegin", divCounterCard);

const waterQuestion = createElement("p", "water-question", "How many glasses of water did you drink today?");
divCounterCard.insertAdjacentElement("afterbegin", waterQuestion);

const counterNumber = createElement("p", "number", "0");
waterQuestion.insertAdjacentElement("afterend", counterNumber);

const divOperatorsButtonsContainer = createElement("div", "operators-buttons-container");
counterNumber.insertAdjacentElement("afterend", divOperatorsButtonsContainer);

const minusButton = createElement("button", "minus", "-"); 
divOperatorsButtonsContainer.insertAdjacentElement("afterbegin", minusButton);

const resetButton = createElement("button", "reset"); 
minusButton.insertAdjacentElement("afterend", resetButton);

const resetIcon = createElement("i", "fa-solid fa-arrow-rotate-right"); 
resetButton.appendChild(resetIcon);

const plusButton = createElement("button", "plus", "+"); 
resetButton.insertAdjacentElement("afterend", plusButton);

const divCheckButtonContainer = document.createElement("div", "check-button-container");
divOperatorsButtonsContainer.insertAdjacentElement("afterend", divCheckButtonContainer);

const checkButton = createElement("button", "check", "Check"); 
divCheckButtonContainer.appendChild(checkButton);

// Creating elements - Modal (ADDITIONAL PROJECT FEATURE)
const divWaterModal = createElement("div", "water-modal-card");
divCounterCard.insertAdjacentElement("afterend", divWaterModal);

const waterModalTitle = createElement("h2");
divWaterModal.insertAdjacentElement("afterbegin", waterModalTitle);

const waterModalText  = createElement("p", "modal-text");
waterModalTitle.insertAdjacentElement("afterend", waterModalText);

const waterModalNote  = createElement("p", "modal-note", "*considering a standard table glass with a capacity of 200 milliliters.");
waterModalText.insertAdjacentElement("afterend", waterModalNote);

const waterModalCloseButton = createElement("button", "close-btn");
waterModalNote.insertAdjacentElement("afterend", waterModalCloseButton);

const closeIcon = createElement("i", "fa-solid fa-xmark");
waterModalCloseButton.appendChild(closeIcon);

// Counter 
let counter = 0;
const minCount = 0;

//Adding Event Listener using Event Delegation
divCardContainer.addEventListener("click", event => {
    const target = event.target;

    // targeting operators buttons 
    if (target.matches('.plus')) {
        counter++;
    }  else if (target.matches('.minus')) {
        if (counter > minCount) {
            counter--;
        }
    } else if (target.matches(".reset") || target.matches(".fa-arrow-rotate-right")) {
        counter = 0;
    } 
    counterNumber.textContent = counter;

    // targeting checkButton (ADDITIONAL PROJECT FEATURE)
    if (target.matches('.check')){ 
        divWaterModal.classList.add("show-modal");
        divCounterCard.classList.add("hide-card");
        if (counter < 10) {
            waterModalTitle.textContent = "Stay Hydrated!";
            waterModalText.textContent = "You drank less than 10 glasses* of water today!\n Aim for at least 10 glasses* to keep your body running smoothly! \n Remember, drinking enough water helps eliminate waste, promotes muscle growth, and maintains overall health. \nKeep sipping!";
        } else {
            waterModalTitle.textContent = "Congratulations!";
            waterModalText.textContent = "You drank 10 or more glasses* of water today!\n Keep up the great work and stay hydrated for optimal physical and cognitive function!";
        }  
    } 

    // targeting modal-closing button (ADDITIONAL PROJECT FEATURE)
    if (target.matches(".close-btn") || target.matches(".fa-solid fa-xmark")) {
        divWaterModal.classList.remove("show-modal");
        divCounterCard.classList.remove("hide-card");
    }
});

 