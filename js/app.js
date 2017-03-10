/*
* Character Creation
*
* Create a variable with the name character
* Assign the value of character an array of objects
* Create two objects with data. Use the list of options to set the values
* gender options: boy, girl
* shirt options: red, blue, purple
* hobby options: baseball, beach volleyball, singing
* name: ''
*
*/


var character = [
  {
    gender : 'boy',
    shirt : 'red',
    hobby : 'baseball',
    name : 'Tommy'
  },
  {
    gender : 'girl',
    shirt : 'purple',
    hobby : 'singing',
    name : 'Lucy'
  }
];

/*
* Create image name
* Create a function named setImageName that takes one parameter
* Inside the function, create a variable named imageName
* Set imageName value to an empty string
* Accessing one of the character objects, loop through the object
* Add the gender value and shirt value to the imageName
* For Example: The image name must print 'puppy-blue'
*
* @function setImageName
* @parameter data
* @return imageName
*/


function setImageName(data) {
  // console.log(data);
  var imageName = '';

  for(var keys in data[0]){
    // console.log('[keys]',[keys]);
    // console.log('data[index][keys]',data[index][keys]);
    if(keys === 'gender'){
      imageName += data[0][keys] + '-';
    }
    if(keys === 'shirt'){
      imageName += data[0][keys];
    }
  }
  return imageName;
}

console.log('setImageName(character)',setImageName(character));
setImageName(character);


/*
* Display Character
* Create a function named displayCharacter that takes one parameter
* Create an image element
* Set the src attribute to the .png of the character in the assets folder
* Append the image element to the person div
* Run python http server, localhost:8080 in your browser and view your character
*
* @function displayCharacter
* @parameter imageName
* @invoke displays character image with the correct gender and color shirt
*/

function displayCharacter(imageName) {
  var image = document.createElement("IMG");
  image.setAttribute("src", "./assets/" + imageName + ".png");

  var idEl = document.getElementById('person');
  idEl.appendChild(image);
}

displayCharacter(setImageName(character));

/*
* Adding your character's hobby
* Create a function named hobby that takes in one parameter
* Set a variable named className with the value of an empty string
* Loop through the same array you chose in the setImageName function
* Return the hobby of your character as a string
*
* @function hobby
* @parameter data
* @return the character's hobby
*/

function hobby(data) {
  // var className = data[0].hobby;
  var className = '';

  for (var keys in data[0]){
    if(keys === 'hobby'){
      className += data[0][keys];
    }
  }
  return className;
}
console.log('hobby(character)',hobby(character));
hobby(character);

/*
* Display your character's hobby
* Create a function named displayHobby that takes in one parameter
* Add the hobby className to the #container div as a background image
*
* @function displayHobby
* @parameter className
* @invoke displayHobby and watch your character enjoy their hobby
*/

function displayHobby(className) {
  var containerEl = document.getElementById('container');
  containerEl.style.backgroundImage = "url('./assets/"+className+".png')";
}

displayHobby(hobby(character));