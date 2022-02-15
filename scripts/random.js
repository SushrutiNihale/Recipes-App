import { navbar } from "./navbar.js"
import { getData,showData } from "./fetch.js"
document.getElementById('navbar').innerHTML = navbar();

let url = 'https://www.themealdb.com/api/json/v1/1/random.php';
let data = await getData(url);

showData(data.meals[0]);