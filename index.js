///////////////Menu Items (MVP)///////////////////

const latte = {name: "Cafe Latte", price: 4, category: "Drinks"};
const burger = {
  name: "Burger", 
  price: 18, 
  category: "Lunch", 
  discount: function (discountCode) {
    if (discountCode === "teacher" || discountCode === "student") {
      this.price = this.price * 0.75;
    } else if (discountCode === "public") {
      this.price = this.price * 0.90; 
    } else {
      this.price = 'Invalid discount code';
    }
    return this.price
  }
};
const breakfastBurrito = {name: "Breakfast Burrito", price: 16, category:"Breakfast"};






/* Task 1a: write a function to return more menu items with the same format as the items above. */

function createMenuItem(_name, _cost, _category) {
  return {
    name: _name, 
    price: _cost, 
    category: _category
  };
};






/* Task 1b: use your function to create 3 more menu items. You may add any items to the menu that you'd like */

const chaiTea = createMenuItem("Chai Tea", 5, "Drinks");
const porkBao = createMenuItem("Pork Bao", 5, "Lunch");
const veganWrap = createMenuItem("Vegan Wrap", 3, "Lunch");








/* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. Add a method to your burger object that automatically calculates price given a string as a parameter. 

Your method should accept: 

(1) A string (teacher, student, or public)

and should return a number. 

For example, burger.discount("teacher") would return 13.5 and burger.discount("public") would return 16.2*/


// burger.discount("student");








///////////////Reviews (MVP)///////////////////

const reviews = [
  {name: "Daniela", rating: 5, feedback:"Beautiful atmosphere and wonderful vegan options!"},
  {name: "Jack", rating: 3, feedback:"A little too hipster for my taste, but the burger was decent, if overpriced"},
  {name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
  {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
  {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
  {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." },
  {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."},
  {name:"Reyna", rating: 3.5, feedback: ""},
];






/* Task 3: Console.log just Julius' feedback */

console.log(reviews[5].feedback)






/* Task 4: Add a new rating with your (fictitious) opinions of the restaurant in the same format as the reviews above. */

reviews.push({
  name : "Lorna", 
  rating : 5, 
  feedback: "I found the menu hard to navigate as it was peices of paper strewn about the store"
});

// console.log(reviews)







/* Task 5: Add the following feedback to Reyna's rating - "this place is chill with really cool people, great for getting work done on weekdays"*/

reviews[7].feedback = "this place is chill with really cool people, great for getting work done on weekdays";
//console.log(reviews)







/*  Task 6: Write a function to return a review based on the index of the review in the array.

 Your function should take two arguments:

(1) an array which holds all of the reviews
(2) a number which is the desired index in the array.

and should return a string in the format `{name} gave the restaurant a {rating}, and their feedback was: {feedback}`
 * 
 * For example, if getReviewByIndex is invoked with reviews and the number 0
 * it will return `Daniela gave the restaurant a 5 star review and their feedback was: Beautiful atmosphere and wonderful vegan options!`
*/





function getReviewByIndex(array, index) {
  var review = array[index];
  return `${review.name} gave the restaurant a ${review.rating}, and their feedback was: ${review.feedback}`;
}

//getReviewByIndex(reviews, 5);







  /* Task 7: Write a function to get information about the most recent review called `getLastReview`

getLastReview should accept:
  (1) an array of objects 
  
and should return a string in the format `name} gave the restaurant a {rating}, and their feedback was: {feedback}`

For example, if getLastReview is invoked passing the reviews array it will return `Reyna gave the restaurant a 3.5 star review and their feedback was: "this place is chill with really cool people, great for getting work done on weekdays"`.
*/

function getLastReview(array) {
  index = array.length - 1
  var review = array[index];
  return `${review.name} gave the restaurant a ${review.rating}, and their feedback was: ${review.feedback}`;
}

 //getLastReview(reviews);








///////////////🍔☕️🍽 STRETCH🍔☕️🍽////////////////////

/** STRETCH 1: Write a function called `getReviewByRating` that returns an array containing all reviews in a certain range. Your function should accept: 

  (1) An array of objects
  (2) A rating

  and should return an array of objects. 

  For example, invoking getReviewByRating(reviews, 4) would return [{name: "Miranda", rating: 4, feedback:"fun trivia and cool vibes"},
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name:"Lauren", rating: 4, feedback: "Absolutely love that they have karaoke Fridays! Food and drink selection is okay."}]
*/

 function getReviewByRating(array, _rating) {
   const filteredReviews = [];
    for(i = 0; i < array.length; i++){
     if(array[i].rating >= _rating && array[i].rating < _rating + 1){
        filteredReviews.push(array[i]);
     } 
   } 
   return filteredReviews;
  }

//getReviewByRating(reviews, 4);










/** STRETCH 2: Write a function called 'getLongestReview' that returns an array containing all reviews longer than 15 words. 
  
Your function should accept: 

  (1) An array of objects

and should return an array of objects. 

  For example, invoking getLongReviews(reviews) would return [
    {name: "Wen", rating: 4.5, feedback:"I don't leave my house often, but when I do, it's for this place. Highly reccomend."},
    {name: "Brett", rating: 3, feedback: "great selection of snacks and a nice cafe area to get work done during the day."},
    {name: "Julius", rating: 2, feedback: "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it." }]
*/

function getLongestReview(array) {
  const verboseReviews = [];
  for(i = 0; i < array.length; i++){
    if(array[i].feedback.split(" ").length > 15){
      verboseReviews.push(array[i]);
    }
  }
  return verboseReviews;
}

 //getLongestReview(reviews);






/* STRETCH 3:  This challenge is not related to the data above! 

Write a function called carMarker 

Your function should accept:

(1) a single odometer argument (a number) 

and return an object.

The returned object should have the following characteristics:
     it has an `odometer` property that contains the argument passed in.
     it has a `drive` method that takes a distance as its argument, and
         (1) causes the odometer in the object to be increased by the distance,
         (2) returns the updated value of the `odometer`.
*/


function carMaker(milesDriven) {
  const car = {
    odometer: milesDriven,
    drive: function (distance) {
      this.odometer += distance;
      return this.odometer;
    }
  };

  return car;
}

const car = carMaker(50);

console.log(car.odometer);

car.drive(300);

console.log(car.odometer);



