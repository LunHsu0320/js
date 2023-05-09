let ul_element = document.getElementsByTagName('ul')[0];

let first_child = ul_element.firstChild;//or firstElementChild
let last_child = ul_element.lastChild;

first_child.className = 'complete';
last_child.className = 'cool';
