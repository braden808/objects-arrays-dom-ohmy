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
		gender: "boy",
		shirt: "blue"
	},
	{
		hobby: "baseball",
		name: "Pablo"
	}
];

setImageName(character);
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
function setImageName(set) {
	var imageName = "";
		for (var key in set){
		//console.log(key);
		//console.log(set[key]);
		if (key === "0"){
			imageName += set[key].gender +"-"
		}
		if (key === "1"){
			imageName += set[key].name
		}

	}
	console.log(imageName);
};

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



/*
* Display your character's hobby
* Create a function named displayHobby that takes in one parameter
* Add the hobby className to the #container div as a background image
*
* @function displayHobby
* @parameter className
* @invoke displayHobby and watch your character enjoy their hobby
*/

