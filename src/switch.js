const dateform = document.getElementById("dateform");
const timerform = document.getElementById("timerform"); 

export function handleSwitch () {
if (event.target.id === "switchcalcdat") {
	dateform.style.display = "block";
	timerform.style.display = "none";
} else if (event.target.id === "switchtimer") {
	dateform.style.display = "none";
	timerform.style.display = "block";
}
}