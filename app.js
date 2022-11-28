//Drum kit

//alert("Hello!");

//Detecting button press
let numberOfDrumButton = document.querySelectorAll(".drum").length;

for (i = 0; i < numberOfDrumButton; i++) {
  document
    .querySelectorAll(".drum")
    [i].addEventListener("click", function checkClick() {
      //alert("Funkar!");
      //console.log(this);
      //this.style.color = "white";
      let buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);
    });
}

//Detecting keyboard press

document.addEventListener("keydown", function (event) {
  //alert("key pressed down!");
  //console.log(event);
  makeSound(event.key);
  buttonAnimation(event.key);
});

//Make sound function
function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let hihat = new Audio("sounds/open-hihat.mp3");
      hihat.play();
      break;
    case "l":
      let kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "m":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "n":
      let clap = new Audio("sounds/clap.mp3");
      clap.play();
      break;

    default:
      //console.log(buttonInnerHTML);
      break;
  }
}

//Animation function

function buttonAnimation(currentkey) {
  let activeButton = document.querySelector("." + currentkey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}



/**
 * Higher order functions = addEventListener("click", checkClick);
    Vi kan likna dom med detta
 */

//Add function
function add(num1, num2) {
  return num1 + num2;
}

//multyply function
function multiply(num1, num2) {
  return num1 * num2;
}

//subtract function
function subtract(num1, num2) {
    return num1 - num2;
}

//Divide function
function divide(num1, num2) {
    return num1 / num2;
}

/*This is an ”Higher order function” taking a function as an
argument*/
function calculator(num1, num2, operator) {
    return operator(num1, num2);
    }

console.log(calculator(4, 5, subtract));
console.log(calculator(4, 5, multiply));
