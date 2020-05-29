const API_KEY = "";

let city = prompt("Where do you live?");

var url =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  `${city}` +
  "&appid=" +
  `${API_KEY}`;

let result;

// const App = fetch(url).then(result.json());

// console.log(result);

const App = fetch(url).then((result) => {
  result = result.json();
  console.log(result.name);
});
