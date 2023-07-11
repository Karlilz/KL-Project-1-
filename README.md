<div id="top"></div>

### About The Project

As a type 1 diabtic, eating a healthy diet is necessary to help me:
  * Better manage my blood glucose levels
  * Determine how much insulin I need per meal
  * Prevent or slow the start of diabetes complications

When it comes to food, it is important to check the nutritional label and specifically be informed about how many carbohydrates I am consuming. As the body digests carbohydrates, they are converted into glucose, which becomes the primary fuel source for the body. The level of carbohydrates consumed in a meal has the greatest impact on the blood glucose levels. 

I created the application Nom Nom Nom, to allow anyone to search a food by its name and recive its nutrional food analysis. With the added insulin:carb ratio calculator feature, this app will be especially benefical for diabetics to help them make informed decesions on insulin calculations for meals. 

Nutritonal Values Returened:
  * Food Name 
  * Serving Size (g)
  * Calories 
  * Total Fat (g)
  * Cholesterol(mg)
  * Sodium (mg)
  * Total Carbohydrates (g)
  * Protein (g)

Links to Helpful Resources: 
  * Reading Food Labels 
  * Understanding Food and Blood Sugar 
  * Understadning Carbohydrates 
  * Meal Planning 
  * Live Cooking Classes 

  _Information gathered from the American Diabetes Association Webpage_


---
### Built With
- HTML5
- CSS3
- JavaScript
- jQuery
- Google Fonts 

---
### Approach Taken 
The initial step for my project was to create the file and folder structure for HTML, CSS, and JS. The following was then done for each file: 

1. HTML 
    - Included a search input field, a search button, a section to display the nutrition information, and a section to input ones insulin-to-carb ratio.
    - I incorporated a navigation bar with links to additional resrouces from the American Diabetes Association.
2. JS
    - My main function in JS was to retrieve and display the user's search input when they submit the search form and click the search button.
    - Used the HTTP method, "GET", to send requests to the nutrition API I found. I include the user's search query as a parameter in the request URL to retrieve relevant nutrition data.
    - jQuery was used to make an asynchronous HTTP request and extract the nutritional information requested from the DOM. 
    - Implemented an error alert to display in cases where the API request failes or returns an error.
    - Created an input box for the insulin:carb ration for users to be able to calculate how many units of insulin they would need (based on the carbohydrates) for the food they just searched. 
  3. CSS
    - Applied styling to my HTML elements to make my webpage more visually appealing and user-friendly.


The final step was deploying my webpage to github pages. 

---
### Initial Wireframe 
![**Project 1 Wireframe**](images/finalwireframe.jpeg)

---
### Unsolved Problems 
The functionality of my application was overall successful. One minor feature I would consider a problem is when the individual changes the denominator in the input box, the is a moment were it reads "units needed: infinity". This is obviously not correct. I do also wish I could have included a few more elements on my webpage to make it have a more modern and exciting look. Some features I had in mind were: 
  * Including icon images by my h1 tag 
  * Including the units of measurement (mL) for the insulin calcualtor feature
  * Using another API to provide an image of the food item searched 

---
### Links
  * [GitHub](https://karlilz.github.io/KL-Project-1-/)
  * [API](https://api-ninjas.com/api/nutrition)
