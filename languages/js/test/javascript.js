//string
let name = "John";
let surname = "Doe"
console.log(name);
console.log(surname);

//re-assignment
let age = 11;
console.log(age);
age = 54;
console.log(age);

//const
const pi = 3.14;
console.log(pi);

//numbers
console.log((3 + 2) - 76 * (1 + 1));

//assignment 
console.log(23+97);
console.log((4+6+9)/77);

let a=10;
console.log(a);
a=12;
console.log(a);
let b=7*a;
console.log(b);

const max = 57;
const actual = max-13;
const percentage = actual/max;
console.log(percentage);

const lotsOfDecimal = 1.676543234;
console.log(lotsOfDecimal);
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);

let myNumber ="74";
myNumber = Number(myNumber) + 3;
console.log(myNumber);

myNumber--;
myNumber = myNumber ** 2;
console.log(myNumber);

console.log(myNumber + name);
let testStringPlusNum = myNumber + name;
console.log(testStringPlusNum);

let x = 1;
let y = 2;
console.log(x==y);

//mdn testing
const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
	if(btn.textContent == "press me!") 
	{
		btn.textContent = "noo!!";
		txt.textContent = "machine has started";
	}
	else
	{
		btn.textContent = "press me!";
		txt.textContent = "machine is stopped";
	}

}




