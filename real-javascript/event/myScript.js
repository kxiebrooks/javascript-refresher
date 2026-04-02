const button = document.getElementById("submit")
const nameInput = document.getElementById("name")
const animalInput = document.getElementById("animal")
const message = document.getElementById("message")

button.addEventListener("click", function () {
  const name = nameInput.value
  const animal = animalInput.value
  message.innerHTML = "Hello " + name + ". Don't you wish you were a " + animal + "?"})

button.addEventListener("mouseover", changeColor)

function changeColor() {nameInput.style.backgroundColor = "red"}