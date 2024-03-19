//your code here
let btn = document.getElementById("swap");
let maini = document.getElementById("app");
btn.addEventListener("click", handleClick);

function handleClick(){
	maini.classList.toggle("night");
}
