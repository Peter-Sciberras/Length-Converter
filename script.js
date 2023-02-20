function convert() {
    const inputValue = document.getElementById('inputValue').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
  
    const apiUrl = `https://measurement-unit-converter.p.rapidapi.com/length?value=${inputValue}&from=${inputUnit}&to=${outputUnit}`;
  
  
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'measurement-unit-converter.p.rapidapi.com',
        'X-RapidAPI-Key': 'f71e53175emshad0f6aa120212fcp16a8dajsn6a66d445b682'
      }
    };
  
    fetch(apiUrl, options)
      .then(response => response.json())
      .then(response => {
        console.log(JSON.stringify(response))
        document.getElementById('outputValue').textContent = response.result;
      })
      .catch(err => console.error(err));
  }
  