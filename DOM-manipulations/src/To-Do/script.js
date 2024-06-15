const { todo } = require("node:test");

let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('.items');
let completeUl = document.querySelector('.complete-task ul');

let createTask = function () {

}

let addTask = function () {

}

let completeTask = function () {

}

let deleteTask = function () {

}

let bindIncompleteItems = function () {

}

let bindCompleteItems = function () {

}

for (i = 0; i < todoUl.children.length; i++) {
    bindIncompleteItems(todoUl.children[i], completeTask);
}

for (i = 0; i < completeUl.children.length; i++) {
    bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener('submit', addTask);

