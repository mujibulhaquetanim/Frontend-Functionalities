const divElement = document.createElement('div');
divElement.className = 'createdElement';
divElement.setAttribute('id','idName');
divElement.setAttribute('title','titleName');

//inserting created div into specific position:
const container = document.querySelector('.list');
const h2Element= container.querySelector('h2');
container.insertBefore(divElement, h2Element)
//to insert it at last position:
const a = container.appendChild(divElement); //only accepts elements, returns the element
console.log(a);
const b= container.append(divElement,document.createElement('p'),'Inserted using DOM'); //don't return the element and accepts multiple elements.
console.log(b);
// ---------------------------------------------------------

const inputElement = document.querySelector('input[type="text"]');

inputElement.addEventListener('keydown', (e) => {
  divElement.textContent = e.target.value;
});


