//your code here
// let btn = document.getElementById("swap");
// let maini = document.getElementById("app");
// btn.addEventListener("click", handleClick);

// function handleClick(){
// 	maini.classList.toggle("night");
// }



let btn = document.getElementById("swap");
btn.addEventListener("click", handleClick);

function handleClick(){
  btn.classList.toggle("button_night"); // Toggle the class on the button itself
}