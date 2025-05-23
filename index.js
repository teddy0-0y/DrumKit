var numberofButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", getclicked);
}

function getclicked() {
  buttonInnerHTML = this.innerHTML;
  playsound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

function playsound(triggertext) {
  switch (triggertext) {
    case "w":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
  }
}

document.addEventListener("keydown", function (event) {
  //alert("Key was pressed");
  playsound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
  var active_btn = document.querySelector("." + currentKey);
  active_btn.classList.add("pressed");
  setTimeout(function () {
    active_btn.classList.remove("pressed");
  }, 100);
}
