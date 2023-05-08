const prompt = require('prompt-sync')({ sigint:true});
let x = parseFloat(prompt("key in math"))

let sub = (x + 1) * 5;
let ship = 0.5 * (13 + 1);

let total = sub + ship
console.log(total)  