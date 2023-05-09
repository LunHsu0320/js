let first_element = document.querySelector('li.hot');
first_element.className = 'cool';

let all_elements = document.querySelectorAll('li.hot');
// all_element.className = 'cool';
// console.log(all_element.length)

all_elements.forEach((currentElement)=>{
    currentElement.className = 'cool'
})