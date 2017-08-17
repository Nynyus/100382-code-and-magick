"use strict";
//variables
var userDialog = document.querySelector(".setup");
var similarListElement = document.querySelector(".setup-similar-list");
var similarWizardTemplate = document.querySelector("#similar-wizard-template").content;
var names = ["Иван", "Хуан Себастьян", "Мария", "Кристоф", "Виктор", "Юлия", "Люпита","Вашингтон"];

var surnames = ["да Марья", "Верон", "Мирабелла","Вальц","Онопко", "Топольницкая", "Нионго", "Ирвинг"];
var coatColors=["rgb(101, 137, 164)", 
                "rgb(241, 43, 107", 
                "rgb(146, 100, 161)",
                "rgb(56, 159, 117)",
                "rgb(215, 210, 55)", 
                "rgb(0, 0, 0)"];
var eyesColors = ["black","red","blue","yellow","green"];
var wizards = [];

userDialog.classList.remove("hidden");

//function calls

createWizardArray(randomDataGenerator);
renderWizard(wizard);
createWizardList(wizards);

//drawing a panel with wizards
userDialog.querySelector(".setup-similar").classList.remove('hidden');


//functions' declarations

function randomDataGenerator(name,coat, eye){
    generateName();
    generateCoatColor();
    generateEyeColor();
};

function generateName() {
    var randomName = names[Math.floor(Math.random() * 8)];
    var randomSurname = surnames[Math.floor(Math.random() * 8)];    
    return randomName + " " + randomSurname;
};

function generateCoatColor(){
    var randomCoatColor = coatColors[Math.floor(Math.random() * 6)];
    return randomCoatColor;
    
};

function generateEyeColor() {
    var randomEyeColor = eyesColors[Math.floor(Math.random() * 5)];
    return randomEyeColor;
};

//Creating an array of objects
function createWizardArray(generator){
    for (var i = 0; i < 4; i++) {
        wizards.push( {
        name: generateName(),
        coatColor: generateCoatColor(),
        eyeColor: generateEyeColor()    
        });
    }
    return wizards;
}

//The function creates a clone of a single wizard using template
function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    
    wizardElement.querySelector(".setup-similar-label").textContent = wizard.name;
    wizardElement.querySelector(".wizard-coat").style.fill=wizard.coatColor;
    wizardElement.querySelector(".wizard-eyes").style.fill=wizard.eyeColor;
    
    return wizardElement;
}

//the function adds a list of wizards into the list through the fragment element

function createWizardList(wizards){
    var fragment = document.createDocumentFragment();
    for (var i=0 ; i<wizards.length;i++){
    
    fragment.appendChild(renderWizard(wizards[i]));
    }
similarListElement.appendChild(fragment);
};


