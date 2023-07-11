
const MY_API = config.MY_KEY;
// Oym+WyayDAA1j/HCLtt8Kw==oZmnwwtgt5FdnvFh'; 
const BASE_URL = 'https://api.api-ninjas.com/v1/nutrition?query='; 
 
let userInput;

const food = $('#food');
const servingSize = $('#servingSize');
const calories = $('#calories');
const totalFats = $('#totalFats');
const cholesterol = $('#cholesterol');
const sodium = $('#sodium');
const carbohydrates = $('#carbohydrates');
const protein = $('#protein');
const input = $('#foodInput');
const form = $('form');
const insulinRatioInput = $('#insulinRatioInput')

let carbValue;

$('form').on('submit', handleGetData);
insulinRatioInput.keyup(function(){
    insulinRatio = insulinRatioInput.val();
    let units = carbValue / insulinRatio;
    $('#units').text(units);
});


function handleGetData(event) {
  event.preventDefault();
  userInput = input.val();
  $.ajax({
    url: 'https://api.api-ninjas.com/v1/nutrition?query=' + userInput,
    headers: { 'X-Api-Key': MY_API},
  }).then(
    (data) => {
        if (data.length === 0) alert('Invalid input. Food name is undefined.');
      render(data);
    },
  );
}

function render(nutritionalData) {
  const foodData = nutritionalData[0];
  food.text(foodData.name);
  servingSize.text(Math.round(foodData.serving_size_g) + "g");
  calories.text(Math.round(foodData.calories));
  totalFats.text(Math.round(foodData.fat_total_g) + "g");
  cholesterol.text(Math.round(foodData.cholesterol_mg) + "mg");
  sodium.text(Math.round(foodData.sodium_mg) + "mg");
  carbValue = Math.round(foodData.carbohydrates_total_g);
  carbohydrates.text(carbValue + "g");
  protein.text(Math.round(foodData.protein_g) + "g");
}

