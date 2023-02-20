function convert() {
    const inputValue = document.getElementById("inputValue").value;
    const inputUnit = document.getElementById("inputUnit").value;
    const outputUnit = document.getElementById("outputUnit").value;
  
    let outputValue;
  
    switch (inputUnit) {
      case "meters":
        switch (outputUnit) {
          case "inches":
            outputValue = inputValue * 39.3701;
            break;
          case "feet":
            outputValue = inputValue * 3.2808;
            break;
          case "centimeters":
            outputValue = inputValue * 100;
            break;
        }
        break;
      case "inches":
        switch (outputUnit) {
          case "meters":
            outputValue = inputValue * 0.0254;
            break;
          case "feet":
            outputValue = inputValue * 0.0833;
            break;
          case "centimeters":
            outputValue = inputValue * 2.54;
            break;
        }
        break;
      case "centimeters":
        switch (outputUnit) {
          case "meters":
            outputValue = inputValue * 0.01;
            break;
          case "inches":
            outputValue = inputValue / 2.54;
            break;
          case "feet":
            outputValue = inputValue / 30.48;
            break;
        }
        break;
      case "feet":
        switch (outputUnit) {
          case "meters":
            outputValue = inputValue * 0.3048;
            break;
          case "inches":
            outputValue = inputValue * 12;
            break;
          case "centimeters":
            outputValue = inputValue * 30.48;
            break;
        }
        break;
    }
  
    document.getElementById("outputValue").innerHTML = outputValue;
  }
  
  