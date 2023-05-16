function converterTemperatura() {
    var temperaturaInput = document.getElementById("temp");
    var temperatura = parseFloat(temperaturaInput.value);
    var temperaturaTipo = document.getElementById("temp-type").value;
  
    if (isNaN(temperatura)) {
      alert("Digite um valor numérico válido.");
      return;
    }
  
    var celsius = 0;
    var fahrenheit = 0;
    var kelvin = 0;
  
    if (temperaturaTipo === "celsius") {
      celsius = temperatura;
      fahrenheit = (temperatura * 9) / 5 + 32;
      kelvin = temperatura + 273.15;
    } else if (temperaturaTipo === "fahrenheit") {
      celsius = ((temperatura - 32) * 5) / 9;
      fahrenheit = temperatura;
      kelvin = ((temperatura - 32) * 5) / 9 + 273.15;
    } else if (temperaturaTipo === "kelvin") {
      celsius = temperatura - 273.15;
      fahrenheit = (temperatura - 273.15) * 1.8 + 32;
      kelvin = temperatura;
    }
  
    exibirResultado(celsius, fahrenheit, kelvin);
  }
  
  function exibirResultado(celsius, fahrenheit, kelvin) {
    var resultContainer = document.getElementById("result-container");
    resultContainer.classList.remove("hidden");
  
    var celsiusResult = document.getElementById("celsius-result");
    var fahrenheitResult = document.getElementById("fahrenheit-result");
    var kelvinResult = document.getElementById("kelvin-result");
  
    celsiusResult.textContent = celsius.toFixed(2);
    fahrenheitResult.textContent = fahrenheit.toFixed(2);
    kelvinResult.textContent = kelvin.toFixed(2);
  }
  