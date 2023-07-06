async function fetchData() {
    try {
    //   const response = await fetch('https://api.example.com/data');
    //const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=7.12539&lon=-73.1198&appid=6303eb0af53c3739b6586624f353c6a9");
    
      const data = await response.json();
      return data;
      
    } catch (error) {
      throw 'Error al obtener los datos';
    }
    
  }
  async function displayData() {
    try {
      const data = await fetchData();
      const dataContainer = document.getElementById('data-container');
      /* dataContainer.innerText = JSON.stringify(data);
       */
      console.log(data)
      const kelvin = 273.15
      const datosClima = `
      <div >${data.weather[0].icon}</div>
      <p>${Math.floor(data.main.temp - kelvin)} ºC<p>
      <p>${data.weather[0].description}<p>
      <p>${data.name} de ${data.sys.country}<p>
      `
      dataContainer.innerHTML = datosClima
    } catch (error) {
      console.error(error);
    }
  }
  
displayData();