// Constants and Variables
const MY_API = 'Oym+WyayDAA1j/HCLtt8Kw==oZmnwwtgt5FdnvFh'; 
const BASE_URL = 'https://api.api-ninjas.com/v1/nutrition?query='; 
 
let nutritionalData, userInput;

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
      method: 'GET',
      url: `https://api.api-ninjas.com/v1/nutrition?query=${userInput}`,
      headers: {'X-Api-Key': MY_API},
    }).then(
      (data) => {
          nutritionalData = data.data;
          render(nutritionalData);
      },
      (error) => {
        alert("Invalid Request. Please try again")
      }
  );
} 
//         "name": "apple",
//         "calories": 53.0,
//         "serving_size_g": 100.0,
//         "fat_total_g": 0.2,
//         "fat_saturated_g": 0.0,
//         "protein_g": 0.3,
//         "sodium_mg": 1,
//         "potassium_mg": 11,
//         "cholesterol_mg": 0,
//         "carbohydrates_total_g": 14.1,
//         "fiber_g": 2.4,
//         "sugar_g": 10.3

function render(nutritionalData) {
    food.text(nutritionalData.name);
    servingSize.text(nutritionalData.serving_size_g);
    calories.text(nutritionalData.calories);
    totalFats.text(nutritionalData.fat_total_g);
    carbohydrates.text(nutritionalData.carbohydrates_total_g);
    protein.text(nutritionalData.protein_g);
    input.val(userInput);
}




