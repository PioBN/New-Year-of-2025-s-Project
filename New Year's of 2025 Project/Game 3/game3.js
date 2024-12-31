const click = document.querySelector("#click");
let alreadyClicked = false;

click.addEventListener("click", () => {
  if (alreadyClicked) {
    alert("You have already put one");
  } else {
    alert(`Thank you for trying this game! Remember, the information
  that you put isn't sent to me.`)
  }

  alreadyClicked = true;
});