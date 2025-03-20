
/* practice-10 (we return all values from the array of objects by propName, if propName is not exist, we return empty array) */
/*
function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  let allArg = [];

    for (const i of products) {
      if(i[propName]){
        allArg.push(i[propName]);
      } else {
        return allArg;
      }
  }

  return allArg;
}

console.log(getAllPropValues("category"));
*/

/* practice-9 (practice array of objects, use loop for taking keys and values)*/
/*
const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell" },
  { title: "Beside Still Waters", author: "Robert Sheckley" },
  { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
];

const authorToSearchFor = "Robert Sheckley";

for (const book of books) {
	if(book.author === authorToSearchFor) {
		console.log(book);
		console.log(book.title)
		console.log(book.rating)
	}
}


/* practice-8 (practice array of objects, use loop for taking keys and values)*/
/*
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
const keys = Object.keys(colors[0]); // i want to get key by number but i can use key by name, example: i.hex

for (const i of colors) {
  hexColors.push(i.hex);
  rgbColors.push(i.rgb);
}

console.log(hexColors);
console.log(rgbColors);
console.log(keys);

/* practice-7 (for of loop with objects) */
/*
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  }
];

for (const book of books) {
  console.log(book); // Об'єкт книги
  console.log(book.title); // Назва
  console.log(book.author); // Автор
  console.log(book.rating); // Рейтинг
}
*/

/* practice-6 */
/*

function countTotalSalary(salaries) {
  let totalSalary = 0;

    let keys = Object.values(salaries);
    
  for(const key of keys){
      totalSalary += key;
  }
  return totalSalary;
}

console.log(countTotalSalary({
  mango: 100,
  poly: 150,
  alfred: 80,
}));
*/

/* practice kays and values */
/*

function countProps(object) {
  let propCount = 0;
    let keys = Object.keys(object);
    let values = Object.values(object);
    

  return keys.concat(values);
}

let obj = {
  name: "Mango",
  age: 2,
  isHappy: true,
  hobby: "html",
  premium: true,
};

console.log(countProps(obj));

*/


/* object-keys */
/*

const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
const keys = Object.keys(apartment);

for(const key of keys){
  values.push(apartment[key]);
}

console.log(values);
*/

/* practice-5 */
/* this example shows how to get keys and values from an object if we don`t know the keys and values */
/* 
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};

const keys = [];
const values = [];

for (const key in apartment){
  keys.push(key);
  values.push(apartment[key]);
}

console.log(keys);
console.log(values);
*/

/* practice-4 */
/*
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};
*/
/*
--- practice

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["ua", "ru"];
book.price = {
  hardcover: 39,
  softcover: 29,
};

console.log(book);
console.log(book.pageCount); // 836
console.log(book.originalLanguage); // "en"
console.log(book.translations); // ["ua", "ru"]


*/