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
for (i = 0; i < itemElement.length; i++) {
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

// children/parent/grandParent relation: 
// let grandParent = document.querySelector('.list')
// let parent = grandParent.children;
// let child = parent[1].children;
// to access child directly from grand parent:
// let child = grandParent.children[1].children;
// let child = grandParent.querySelectorAll('.item');
// console.log(child);
// ---------------------------------------------------------
//to go child to parent:
let child = document.querySelector('.item');
let parent = child.parentElement;
let grandParent = child.closest('.list')
console.log(grandParent);
// ---------------------------------------------------------
//sibling:

let siblingOne = child.nextElementSibling;
siblingOne.style.color = 'red';
console.log(siblingOne);
//to go back to the previous children from 2 to 1:

let siblingTwo = document.querySelector('.item').nextElementSibling;
let sibling1 = siblingTwo.previousElementSibling;
sibling1.style.color = 'blue';
console.log(sibling1);
// ---------------------------------------------------------




