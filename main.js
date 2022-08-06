// Accessing people data from data.js
const peopleArray = people.results;

//Accessing elements on the HTML file (image, name heading, email heading)
const personImage = document.querySelector("#personImage");
const personName = document.querySelector("#personName");
const personEmail = document.querySelector("#personEmail");

// Accessing the randomizer button in the HTML file
const randomizerButton = document.querySelector("#randomizer");

/* 
  Event Handler Function for the Randomizer Button
  Everytime the button is clicked, the code below will run
  In other words, the code inside the function will run
*/
randomizerButton.onclick = function (e) {
  // Prevents the page from reloading
  e.preventDefault();

  // Gets a random number between 0 and the length of the data array
  let randomIndex = Math.floor(Math.random() * peopleArray.length);

  /* 
    References a random person object from the people array]
    Using the random index we generated above
  */
  let randomPerson = peopleArray[randomIndex];

  //Changes the image source to the random person's image
  personImage.src = randomPerson.picture.large;

  //Changes the name heading to the random person's name
  personName.innerHTML = randomPerson.name.first + " " + randomPerson.name.last;

  //Changes the email heading to the random person's email
  personEmail.innerHTML = randomPerson.email;
};