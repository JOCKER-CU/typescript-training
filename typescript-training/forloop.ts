let mark : number[] = [1,2,3,4,5.5,6,6.7,8.9,9,10]

let total : number = 0;

for(let i=0; i < mark.length; i++){
    console.log(mark[i]);
    total += mark[i]
}
console.log("Total is : " + total)

console.log("Average is : " + total/ mark.length)

let sportOne : string[] = ["football", "swimming", "cricket", "tennis"]

for(let j=0; j < sportOne.length; j++){
    console.log(j + "." + sportOne[j])
}

for(let sport of sportOne){
    if(sport == "swimming"){
    console.log(sport + " << My Favourite!")
    }else{
        console.log(sport)
    }
}

console.log("\nAdding New Sport")
sportOne.push("golf")
sportOne.push("baseball")
for(let sport of sportOne){
    console.log(sport)
}