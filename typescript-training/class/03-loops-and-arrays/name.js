"use strict";
let playerName = ["Aung Aung", "Zaw Zaw", "Myint Myint", "Tun Tun"];
console.log("Traditional For Loop");
for (let x = 0; x < playerName.length; x++) {
    console.log(playerName[x]);
}
console.log("Simplified For loop");
for (let name of playerName) {
    if (name == "Myint Myint") {
        console.log(name + " << is My Name.");
    }
    console.log(name);
}
