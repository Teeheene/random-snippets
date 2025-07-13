const select = document.querySelector("select");
const paragraph = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather()
{
	const choice = select.value;

	switch(choice)
	{
		case "sunny": paragraph.textContent = "Its so skibidi sunny brodie, just stay in and eat some ice cream.";
			console.log("it works bruh");
									break;
		case "rainy": paragraph.textContent = "Its so nice and rainy, positive aura for bringing an umbrella lods.";
									break;
		case "skibidi": paragraph.textContent = "Darn bro, what a skibidi weather. Don't worry, stay Alpha and you will aura farm today!";
									break;
		default: paragraph.textContent = "Hell yeah bro choose a weather! Get some W advice.";
									break;
	}
}
