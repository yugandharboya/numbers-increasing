let counterValue = document.getElementById("counterValue");
let incrementBtn = document.getElementById("incrementBtn");
let defaultValue = 0;

counterValue.textContent = defaultValue;
counterValue.style.color = "#c20a72";

function incrementValue() {
    defaultValue += 1;
    localStorage.setItem("clickCount", defaultValue);
    let storedvalue = localStorage.getItem("clickCount");
    console.log(storedvalue);
    counterValue.textContent = storedvalue;
    counterValue.style.color = "#c20a72";

}
incrementBtn.addEventListener("click", incrementValue)