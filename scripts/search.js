import { navbar } from "./navbar.js"
import { getData,showData } from "./fetch.js"
document.getElementById('navbar').innerHTML = navbar();

let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`;
let data = await getData(url);

let myObj = {
    'cuisine': data.meals[0].strArea,
    'cuisine1': data.meals[0].strCategory,
    'recipe': data.meals[0].strInstructions,
    'strMeal': data.meals[0].strMeal,
    'strMealThumb': data.meals[0].strMealThumb,
    'vlink': data.meals[0].strYoutube
}

// (showData(data.meals[0].strArea,data.meals[0].strCategory,data.meals[0].strInstructions,data.meals[0].strMeal,data.meals[0].strMealThumb,data.meals[0].strYoutube));
showData(myObj);
// showData(data.meals[0]);