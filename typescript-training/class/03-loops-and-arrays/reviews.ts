let reviews: number[] =[5,5,4.5,3,1];
 
let total: number = 0;
for(let j=0; j < reviews.length; j++){
    console.log(reviews[j]);

    total += reviews[j];
}

let average: number = total/reviews.length;
console.log("The average value is " + average);

