let price:number;
let quantity:number;
let total:number;

price =5;
quantity=14;

total=price*quantity;

let cost_div = document.getElementById('cost') as HTMLElement;
cost_div.innerText = "$" + total;
