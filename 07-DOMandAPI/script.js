let unorderedList = document.querySelector('ul');
let submitButton = document.getElementById('submit');
let rocketForm = document.querySelector('form');


const baseURL = 'https://api.spacexdata.com/v2/rockets';

let fetchRockets = (event) => {
    event.preventDefault();
    
    fetch(basURL)
    .then(response => response.json())
    .then(json =>{
        console.log(json);
        json.forEach(rocket =>{
            
        //NEED: Name, cost mass, image
        //Table row for each rocket
        //td name, cost, mass, image
        //drop the row into the tbody

        let row = document.createElement('tr');
        let name = document.createElement('td');
        let cost = document.createElement('td');
        let mass = document.createElement('td');
        let imageData = document.createElement('td');
        let img = document.createElement('td');


        name.innertext = rocket.name;
        cost.innertext = rocket.cost_per_launch;
        mass.innertext = rocket.mass.kg;
        img.src = rocket.flicker_images[0];

        imageData.appendChild(img);

        row.appendChild(name);
        row.appendChild(cost);
        row.appendChild(mass);
        row.appendChild(iamgeData);


        document.querySelector('tbody').appendChild(row);
        })
    })
    .catch(error => console.log(error) );
}

rocketForm.addEventListener('submit', fetchRockets);






























// let myData = [
//     {title: "Downtown Is Loud", author: "Adam"},
//     {title: "My Room is Hot", author: "Nathaniel"},
//     {title: "My Neighbors Are Noisy", author: "Alec"},
//     {title: "BoatyMcBoatFace", author: "Sheena"},
//     {title: "I Wish I Could Type As Fast As Adam", author: "Sierra"}, 
//     {title: "Python Is Better", author: "Yaboi and Sft"}
// ];
// //Loop over the different statements (obj) inside of myData (array)
// for(let thing of myData){
    
//     //create the LI that is going to hold the statement (title, author)
//     let mySuperCoolListItem = document.createElement('li');
    
//     // create the elements that will display the title and author
//     let myTitle = document.createElement('h3');
//     let myAuthor = document.createElement('p');
    
//     //Set the values in the element to display as text(title, author)
//     myTitle.innerText = thing.title;            //Sets the TITLE
//     myAuthor.innerText = "- " + thing.author;   //Sets the AUTHOR
    
//     //Add the title and Author elements in the li
//     mySuperCoolListItem.appendChild(myTitle);
//     mySuperCoolListItem.appendChild(myAuthor);
    
//     //
//     unorderedList.appendChild(mySuperCoolListItem);

// }



