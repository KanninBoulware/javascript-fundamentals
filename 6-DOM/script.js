console.log('LOADED FILE');



let myPTag = document.getElementById ('testParagraph');

myPTag.style.color = 'blue';

console.log(document.querySelectorAll('p.sampleClass'));

document.querySelectorAll('p.sampleClass')[0].innerText = 'My text has changed!';

let toChange = document.querySelectorAll('p.smapleClass');

toChange.forEach(tag => {
    tag.innerHTML = 'Hey I changed';

})

let myButton = document.getElementById('clickThisButton');

document.getElementById('clickThisButton').addEventListener('click', event => {
    if(event.target.style.backgroundColor == 'red'){
        event.target.style.backgroundColor = 'blue'
    } else {
        event.target.style.backgroundColor = 'red';

    }


})

myButton.addEventListener('mouseup', event =>{ 
    event.target.style.fontSize = '30 px'
})


let userInput;

document.getElementById('nameInput').addEventListener('keyup', even  => {
    userInput = event.target.value;
    document.getElementById('theValue').innettext = userInput
})

//in the HTML, create a button with a unique ID, and a p tag with a unique id
//When the button is clicked, the p tag shoul read, "HEY THE BUTTON WAS CLICKED!!!!!!!!"
//When the P tag is clicked, the text inside should say "Hey, no pushing"

let button = document.getElementById('buttonBoi');
let iroah = document.getElementById('paragraphBoi');

button.addEventListener('click', event =>{
 iroah.innerText = "HEY THE BUTTON WAS CLICKED!";
})

iroah.addEventListener('click', event =>{
event.target.innertext = "Hey, no pushing";
})