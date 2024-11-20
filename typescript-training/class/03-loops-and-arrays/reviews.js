"use strict";
let reviews = [5, 5, 4.5, 3, 1];
let total = 0;
for (let j = 0; j < reviews.length; j++) {
    console.log(reviews[j]);
    total += reviews[j];
}
let average = total / reviews.length;
console.log("The average value is " + average);
