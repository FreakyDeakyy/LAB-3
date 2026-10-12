// Looks for all with drum class, checks in each button and then does the
// following function
//then when its querying it has an event listener which looks for a click
// event and then does
//takes whatevever button was clicked and then plays the sound associated
// with that button
document.querySelectorAll(".drum").forEach((button) => {
  button.addEventListener("click", () => {
    const buttonClicked = button.innerHTML;
    playSound(buttonClicked);
  });
});

//switch case which takes in the key variable from the querySelectorAll
function playSound(key) {
  switch (key) {
    case "w":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      animatePress("w");
      break;
    case "a":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      animatePress("a");
      break;
    case "s":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      animatePress("s");
      break;
    case "d":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      animatePress("d");
      break;
    case "j":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
      animatePress("j");
      break;
    case "k":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      animatePress("k");
      break;
    case "l":
      const kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      animatePress("l");
      break;
  }
}

//animates the button which essentially just gives the button the class
//pressed and then removes it after 175 milliseconds with teh timeout
function animatePress(key) {
  const activeButton = document.querySelector(`.${key}`);
  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 175);
}

// event listener which does the same as the query but just for any
// key inputs
document.addEventListener("keydown", (event) => {
  const keyPressed = event.key;
  playSound(keyPressed);
});
