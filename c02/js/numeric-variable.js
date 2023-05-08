"use strict";
let price;
let quantity;
let total;
price = 5;
quantity = 14;
total = price * quantity;
let cost_div = document.getElementById('cost');
cost_div.innerText = "$" + total;
