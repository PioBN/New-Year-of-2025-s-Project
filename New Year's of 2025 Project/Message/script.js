const click = document.querySelector("#click");
click.addEventListener("click", () => {
  const name = document.querySelector("#name");
  const nameInput = document.querySelector("#name-field");

  name.innerHTML = "&nbsp" + nameInput.value + " ! &#x1F38A;";

  nameInput.style.display = "none";
  click.style.display = "none";
});