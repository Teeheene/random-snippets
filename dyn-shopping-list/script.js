const inputBox = document.querySelector("#addItem");
const addBtn = document.querySelector("#addBtn");
const shoppingList = document.querySelector(".list");
let output = "";

inputBox.addEventListener('input', (event) => output = event.target.value);

addBtn.addEventListener("click", () => {
	addItemToList(output);
	output = "";
	inputBox.value = "";
});

function addItemToList(string) {
	const list = document.createElement("li");
	list.textContent = string;
	shoppingList.appendChild(list);
	console.log(string);
}
