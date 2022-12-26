const dateform = document.getElementById("dateform");
const timerform = document.getElementById("timerform"); 

export function handleSwitch (e) {
if (e.target.innerText === "Калькулятор дат") {
	dateform.style.display = "block";
	timerform.style.display = "none";
} else if (e.target.innerText === "Таймер") {
	dateform.style.display = "none";
	timerform.style.display = "block";
}
}