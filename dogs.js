
//dog documention - https://dog.ceo/dog-api/

const apiURL = 'https://dog.ceo/api/breeds/image/random'; //create a variable and put the URL inside
const randomDogsElement = document.querySelector('.random-dogs') //gets a reference to .random-dogs and stores in variable randomDogElement so now i can append things to the variable
const goButton = document.querySelector('.go-btn');
goButton.addEventListener('click', updateRandomDog);


async function updateRandomDog(){
    let newDog = await getRandomDogs();
    displayResults(newDog);
}

async function getRandomDogs() { //make async funtion and...
  // randomDogsElement.innerHTML = ''; //clear out prev results each time we call randomDogsElement
  const response = await fetch(apiURL); //await the response + store the response in a variable.  
  const json = await response.json(); //api returns json data so need to parse data as json. have to wait again
  console.log(json);//since it's an object, i can use dot notation to access the data/property
  return json;
}


function displayResults(json) {

  //build element section
  console.log(json);
  randomDogsElement.innerHTML = '';
  let dogDiv = document.createElement('div');
  let dogImage = document.createElement('img');

  //assigned object notation
  dogImage.src = json.message;

  //append to html file
  randomDogsElement.appendChild(dogDiv);
  dogDiv.appendChild(dogImage);
}

getRandomDogs().then((json) => displayResults(json)).catch(err => console.log(err));


