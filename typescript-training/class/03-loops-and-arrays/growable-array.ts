let playerName2: string[] = ["Zue Zue", "Aye Aye", "Htwe Htwe"];

playerName2.push("Maung Maung");
playerName2.push("Naung Naung");

for(let name of playerName2){
    console.log(name);
}

playerName2.pop();
console.log("\nAfter POP")
for(let name of playerName2){
    console.log(name);
}