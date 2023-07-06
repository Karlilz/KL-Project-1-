
const MY_API = 'Oym+WyayDAA1j/HCLtt8Kw==oZmnwwtgt5FdnvFh'; 
const BASE_URL = 'https://api.api-ninjas.com/v1/nutrition?query='; 
 
let nutritionalData, userInput;


const food = $('#food');
const servingSize = $('#servingSize');
const calories = $('#calories');
const totalFats = $('#totalFats');
const cholesterol = $('#cholesterol');
const sodium = $('#sodium');
const carbohydrates = $('#carbohydrates');
const protein = $('#protein');
const input = $('input[type="text"]');
const form = $('form');


$('form').on('submit', handleGetData);


function handleGetData(event) {
    event.preventDefault();
    userInput = input.val();
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/nutrition?query=' + userInput,
        headers: { 'X-Api-Key': MY_API},
    }).then(
              (data) => {
                  nutritionalData = data;
                  render(nutritionalData);
              },
              (error) => {
                alert("Invalid Request. Please try again")
              })
            }

//         "name": "apple",
//         "serving_size_g": 100.0,
//         "calories": 53.0,
//         "fat_total_g": 0.2,
//         "cholesterol_mg": 0,
//         "sodium_mg": 1,
//         "carbohydrates_total_g": 14.1,
//         "protein_g": 0.3,

function render(nutritionalData) {
    const foodData = nutritionalData[0];
    food.text(foodData.name);
    servingSize.text(Math.round(foodData.serving_size_g) + "g");
    calories.text(Math.round(foodData.calories));
    totalFats.text(Math.round(foodData.fat_total_g) + "g");
    cholesterol.text(Math.round(foodData.cholesterol_mg) + "mg");
    sodium.text(Math.round(foodData.sodium_mg) + "mg");
    carbohydrates.text(Math.round(foodData.carbohydrates_total_g) + "g");
    protein.text(Math.round(foodData.protein_g) + "g");
}