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