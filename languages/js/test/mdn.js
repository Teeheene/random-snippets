const string = "The revolution will not be televised.";
const badString = string;
let nameMyself = "Diane";

console.log(`${nameMyself}: ${badString}`);

const button = document.querySelector("button");

function greet() 
{
	const newUser = prompt("What is your name?");
	const greetNewUser = document.querySelector("#greeting");
	greeting.textContent = `Hello ${newUser}, welcome to the mainframe.`;
}

button.addEventListener("click", greet);
