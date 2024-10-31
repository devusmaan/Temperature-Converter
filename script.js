const inputTempNum = document.getElementById("temp");
const fromTemp = document.getElementById("from-temp");
const toTemp = document.getElementById("to-temp");
const ulContainer = document.querySelector(".ul-cont");

function converter() {
    const inputTempNumValue = parseFloat(inputTempNum.value);
    const fromUnit = fromTemp.value;
    const toUnit = toTemp.value;
    let resultTemperature;

    if (isNaN(inputTempNumValue)) {
        ulContainer.innerHTML = `<li>Please enter a valid number for temperature.</li>`;
        return;
    }
    if (fromUnit === "select" || toUnit === "select") {
        ulContainer.innerHTML = `<li>Please select both units for conversion.</li>`;
        return;
    }

    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            resultTemperature = (inputTempNumValue * 9 / 5) + 32;
        } else if (toUnit === "kelvin") {
            resultTemperature = inputTempNumValue + 273.15;
        } else {
            resultTemperature = inputTempNumValue;
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            resultTemperature = (inputTempNumValue - 32) * 5 / 9;
        } else if (toUnit === "kelvin") {
            resultTemperature = ((inputTempNumValue - 32) * 5 / 9) + 273.15;
        } else {
            resultTemperature = inputTempNumValue;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            resultTemperature = inputTempNumValue - 273.15;
        } else if (toUnit === "fahrenheit") {
            resultTemperature = ((inputTempNumValue - 273.15) * 9 / 5) + 32;
        } else {
            resultTemperature = inputTempNumValue;
        }
    }

    ulContainer.innerHTML = `<li>${inputTempNumValue}° ${fromUnit.charAt(0).toUpperCase() + fromUnit.slice(1)} is ${resultTemperature.toFixed(2)}° ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}</li>`;
}
