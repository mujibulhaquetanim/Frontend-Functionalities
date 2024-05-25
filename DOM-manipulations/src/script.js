console.dir(document);
// ---------------------------------------------------------
let headerElement = document.getElementById('header');
let span1Element = document.getElementById('span1');

span1Element.style.fontSize = '30px';

console.log(headerElement.innerText);
console.log(headerElement.textContent);
console.log(headerElement.innerHTML);

// headerElement.innerText = 'hello';
// headerElement.textContent = 'Hello';
// ---------------------------------------------------------
// let itemElement = document.getElementsByClassName('item')[0];

let itemElement = document.getElementsByClassName('item');
//traversing list of item elements:
for (i = 0; i <= itemElement.length; i++) {
    itemElement[i].style.border = '1px solid green';
    // itemElement[i].style.color = 'green'
}
console.log(itemElement);
// ----------------------------------------------------------


//querySelector returns only one elements,instead of all element that matches with the query.
// let elementQuery = document.querySelector('.item');
// let elementQuery = document.querySelector('.item:last-child'); //specific element selection
// let SingleelementQuery = document.querySelector('.item:nth-child(2)'); //specific element selection using css
// SingleelementQuery.style.color = 'pink';
// console.log(SingleelementQuery);
// ---------------------------------------------------------

// let SingleelementQuery = document.querySelector('.list').querySelector('.item:nth-child(2)'); //specific element selection using css
// SingleelementQuery.style.color = 'pink';
// SingleelementQuery.style.fontSize = '20px';
// console.log(SingleelementQuery);

// ---------------------------------------------------------

//this returns all elements
let elementQuery = document.querySelectorAll('.item');
// elementQuery[0].style.color ='red';
// elementQuery[1].style.color = 'blue';
// elementQuery[2].style.color = 'green';
console.log(elementQuery);
// ---------------------------------------------------------    


