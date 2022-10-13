function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "b884720d8f959cc5aa66ad10c2546f56";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&lat={lat}&lon={lon}&appid=${apiKey}&units=metric`;

console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
