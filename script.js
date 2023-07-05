MY_API = Oym+WyayDAA1j/HCLtt8Kw==oZmnwwtgt5FdnvFh 



// Constants and Variables
const API_KEY = config.MY_KEY; 
const BASE_URL = 'https://api.api-ninjas.com/v1/nutrition?query='; 
 
let weatherData, userInput;

// Cached Element References 
const food = $('#food');
const servingSize = $('#servingSize');
const calories = $('#calories');
const totalFats = $('#totalFats');
const carbohydrates = $('#carbohydrate');
const protein = $('#protein');
const input = $('input[type="text"]');
const form = $('form');

// Event Listeners
$('form').on('submit', handleGetData);

// Functions
function handleGetData(event) {
    event.preventDefault();
    userInput = input.val();
     $.ajax({
      url: `https://api.api-ninjas.com/v1/nutrition?query=${userInput}&appid=${API_KEY}`
    }).then(
      (data) => {
          nutritionalData = data;
          render(nutritionalData);
      },
      (error) => {
        alert("Invalid Request. Please try again")
      }
  );
} 

function render(nutritionalData) {
  title.text(weatherData.name);
  // Use Math.round to round to nearest whole number and + "°F" to get temp value in Fahrenheit
  temperature.text(Math.round(nutritionalData.main.temp)); 
  index.text(Math.round(weatherData.main.feels_like)); 
  description.text(weatherData.weather[0].description);
  input.text(weatherData.input);
}


