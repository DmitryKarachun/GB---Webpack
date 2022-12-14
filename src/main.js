import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { handleSwitch } from "./switch.js";
import  {startCounting, stopCounting, resetCounting}  from "./timer.js";

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
const buttons = document.querySelectorAll("button");
const start = document.getElementById("startCounting");
const stop = document.getElementById("stopCounting");
const reset = document.getElementById("resetCounting");


dateCalcForm.addEventListener("submit", handleCalcDates);
buttons.forEach((element) => {
  element.addEventListener("click", handleSwitch);
});

function handleCalcDates(event) {
  dateCalcResult.innerHTML = "";
  event.preventDefault();

  let { firstDate, secondDate } = event.target.elements;
  (firstDate = firstDate.value), (secondDate = secondDate.value);

  if (firstDate && secondDate) {
    const diff = diffDates(firstDate, secondDate);
    dateCalcResult.innerHTML = diffToHtml(diff);
  } else
    dateCalcResult.innerHTML = formatError(
      "Для расчета промежутка необходимо заполнить оба поля"
    );
}

start.addEventListener("click", startCounting);
stop.addEventListener("click", stopCounting);
reset.addEventListener("click", resetCounting);


