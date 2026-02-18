function showweatherDetails(event) {
  event.preventDefault();

  const city = document.getElementById('city').value;
  const apiKey = '3de810143cf2f501bdb61d8e8945c71e';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

      const weatherInfo = document.getElementById('weatherInfo');

      if (data.cod !== 200) {
        weatherInfo.innerHTML = `<p>City not found.</p>`;
        return;
      }

      weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp} &#8451;</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
    })
    .catch(error => {
      console.error(error);
    });
}

document
  .getElementById('weatherForm')
  .addEventListener('submit', showweatherDetails);
