function convert() {
  var fromUnit = document.getElementById("from").value;
  var toUnit = document.getElementById("to").value;
  var temperature = parseFloat(document.getElementById("temperature").value);

  var converttedValue;
  var resultUnit;

  switch (fromUnit) {
    case "C":
      if (toUnit === "F") {
        converttedValue = (temperature * 9) / 5 + 32;
        resultUnit = "F";
      } else if (toUnit === "K") {
        converttedValue = temperature + 273.15;
        resultUnit = "K";
      } else if (toUnit === "R") {
        converttedValue = temperature + 273.15;
        resultUnit = "R";
      } else {
        converttedValue = temperature;
        resultUnit = "C";
      }
      break;

    case "F":
      if (toUnit === "C") {
        converttedValue = ((temperature - 32) * 5) / 9;
        resultUnit = "C";
      } else if (toUnit === "K") {
        converttedValue = ((temperature - 32) * 5) / 9 + 273.15;
        resultUnit = "K";
      } else if (toUnit === "R") {
        converttedValue = temperature + 459.67;
        resultUnit = "R";
      } else {
        converttedValue = temperature;
        resultUnit = "F";
      }
      break;

    case "K":
      if (toUnit === "C") {
        converttedValue = temperature - 273.15;
        resultUnit = "C";
      } else if (toUnit === "K") {
        converttedValue = ((temperature - 273.15) * 9) / 5 + 32;
        resultUnit = "K";
      } else if (toUnit === "R") {
        converttedValue = (temperature * 9) / 5;
        resultUnit = "R";
      } else {
        converttedValue = temperature;
        resultUnit = "K";
      }
      break;

    case "R":
      if (toUnit === "C") {
        converttedValue = ((temperature - 491.67) * 5) / 9;
        resultUnit = "C";
      } else if (toUnit === "K") {
        converttedValue = temperature - 459.67;
        resultUnit = "K";
      } else if (toUnit === "R") {
        converttedValue = (temperature * 5) / 9;
        resultUnit = "R";
      } else {
        converttedValue = temperature;
        resultUnit = "R";
      }
      break;
  }

  document.getElementById("result").value =
    converttedValue.toFixed(2) + " " + resultUnit;
}
