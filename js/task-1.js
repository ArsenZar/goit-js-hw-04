/* create dublicate object by ...spread */
/*
const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = {
  ...defaultSettings,
  ...overrideSettings,
  timePerQuestion: 111,
  newValue: "Hello",
};

console.log(finalSettings);
*/

/* practice 17 */
/*
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];

const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

console.log(bestScore);
console.log(worstScore);
*/

/* practice 16 */
/*
function getExtremeScores(scores) {
  let bestValue = Math.max(...scores);
  let worstValue = Math.min(...scores);
  const result = {
    best: bestValue,
    worst: worstValue,
  } 
  return result;
}

console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
*/


/* practice-15 */
/*
function addOverNum(value, ...args) {
  let result = 0;
  for (let i of args){
    if (i > value){
      result += i;
    }
  }
  return result;
}

console.log(addOverNum(5, 2, 3, 1, 5, 10, 15));
*/

/* practice-14 (just remaber about give value for new let for give a type this let or it is undefinde) */
/*
function add(...rest) {
  let result = 0;
  for (const i of rest) {
    result += i;
  }
  return result;
}

console.log(add(12, 4, 11, 48));
*/

/*
const bookShelf = {
  books: [
		{ title: "The Last Kingdom", rating: 8 }, 
		{ title: "The Mist", rating: 6 }
	],
  getBooks() {
    return this.books;
  },
  addBook(newBook) {
    this.books.push(newBook);
  }
};

bookShelf.addBook({ title: "Dream Guardian", rating: 9 });
bookShelf.addBook({});
*/

/* practice-13 (try to fix problem with return, i use consol.log in after return... i learn this)))*/
/*
const atTheOldToad = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    return console.log(this.potions);
  },
};

atTheOldToad.getPotions();
*/

/* practice-12 (we create array of objects and create a two methods for an object) */
/*
const atTheOldToad = {
  potions: [],

  getPotions(){
    return "List of all available potions";
  },

  addPotion(potionName){
    return `Adding ${potionName}`;
  },
};
*/

/* practice-11 (we return total price of the product, if product is not found, we return message. Interesting experience, i cant use else) */
/*
function calculateTotalPrice(productName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  let totalPrice = 0;
    for (const i of products) {
        if (i.name === productName) { 
            return totalPrice = i.price * i.quantity;
        }
    }
    
    return `Product ${productName} not found!`;
}

console.log(calculateTotalPrice("Scanner"));
*/

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