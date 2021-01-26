// console.log('Hello Bitches')
//console.error('This is an error!')
//boolean syntax; const isCool =true
//console.log (typeof varname)
/**const name = 'fibs';
const age = 20;
console.log('My name is ' + name + ' and I am ' + age); //concatenation
const Hello = (`My name is ${name} and I am ${age}`); //template string
console.log(Hello);
 * 
 */
//property's and methods
/**let s = 'hey freaks, what e do'
console.log(s.length); //property
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split('')) //splits each letter
console.log(s.split(' ')) //splits into words
 * 
 */

//arrays - variables that hold multiple value
/**const num = new Array(1, 2, 3, 4, 5) / / constructive array
const fruit = ['apple', 'juice', 'pine', 'orange', 10, true] //normal array
fruits.push('mango') //adds to the end
fruits.unshift('berries') //adds to the begining
fruits.pop() //removes the last array
console.log(a)
 * 
 */



/**
 
//object literals
const person = {
    fname: 'John',
    lname: 'Doe',
    age: 29,
    hobbies: ['sing', 'dance', 'draw'],
    address: {
        street: '50 main st',
        city: 'Austin',
        state: 'Texas'

    }
}
console.log(person.hobbies[1])
console.log(person.address.city)
console.log(person.fname, person.lname)

const todos = [

    {
        id: 1,
        task: 'clean room',
        isCompleted: true
    },
    {
        id: 2,
        task: 'meet boss',
        isCompleted: true
    },
    {
        id: 3,
        task: 'call mom',
        isCompleted: false
    }
]
console.log(todos[1].task)

// how to send a data to a server using JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON)

//for loop

for (i = 0; i <= 16; i++) {
    console.log(`for loop number: ${i}`);
}

for (let todo of todos) {
    console.log(todo.id)
    console.log(todo.task)
}



while loop
let i = 0
while (i < 10) {
    console.log(`while loop number: ${i}`);
    i++;
}


//for each, map ,filter, functional programming!
todos.forEach(function(todo) {
    console.log(todo.task);
});

const todoTask = todos.map(function(todo) {
    return todo.task;

});
console.log(todoTask)

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;

}).map(function(todo) {
    return todo.task
})
console.log(todoCompleted) 
**/

/** 
//conditionals

//if
x = 20
y = 9
if (x > 10 && y > 5) {
    console.log("x  is greater than 10 and y is greater than 5")
} else if (x <= 20 || y <= 5) {
    console.log("one of the variables is accurate")
} else {
    console.log("non of the variables are accurate")
}
//ternary values
const z = 5
const color = z > 5 ? 'blue' : 'teal'
console.log(color)

//switch case
switch (color) {
    case 'blue':
        console.log('color is blue')
        break;
    case 'teal':
        console.log('color is teal')
        break;
    default:
        console.log("color is neither blue nor teal")
} **/

/**

//functions
const addNums = (num1, num2) => num1 + num2
console.log(addNums(5, 7))

//oop, constructive functions
//es6//class
class Car {
    constructor(color, type, name, dateAc) {
        this.color = color
        this.type = type
        this.name = name
        this.dateAc = new Date(dateAc)
    }
    getCarFullName() {
        return `${this.name} ${this.type}`
    }
}

const car1 = new Car('brown', 306, 'camry', '1-2-2014')
console.log(car1.dateAc.getUTCDay());
console.log(car1);
console.log(car1.getCarFullName());

//es5
function Cars(color, type, name, dateAc) {
    this.color = color
    this.type = type
    this.name = name
    this.dateAc = new Date(dateAc)
    Cars.prototype.getCarFullName = function() {
        return `${this.name} ${this.type}`;
    }
}
 * 
 */

//single element
//console.log(document.getElementById("form"))
//console.log(document.querySelector("h1"))
//multiple element
//console.log(document.querySelectorAll(".item"))
//console.log(document.getElementsByTagName("li"))

//looping a list
/**const items = document.querySelectorAll('.item')
items.forEach((item) => {
    console.log(item)

});
 * 
 */


/** 

//dom
const ul = document.querySelector('.item')
    //ul.lastElementChild.remove()

//inputing text/changing text with JS
ul.firstElementChild.textContent = 'Hello people!'
ul.children[1].innerText = 'its fibs.'
ul.lastElementChild.innerHTML = '<h1>Good Day</h1>'

const btn = document.querySelector('.btn')
    // changing style    - btn.style.background = '#ccc'
btn.addEventListener('click', (e) => {
        console.log('click')

        //to prevent the above code from submiting to the server modify like =>
        e.preventDefault()
        console.log(e)
        document.querySelector('#form').style.background = '#ccc' //changes form color after click
        document.querySelector('body').classList.add('bg-dark')
        document.querySelector('.item').lastElementChild.innerHTML = '<h1>Get LOST</h1>';

    }) **/

const nameInput = document.querySelector('#name')
const myForm = document.querySelector('#form')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')

myForm.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault()

    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields'

        setTimeout(() => msg.remove(), 3000)
    } else {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))

        userList.appendChild(li)
            //clear list
        nameInput.value = " "
        emailInput.value = ''
    }
}