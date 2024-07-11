//1. What is the name of the recipe?
const recipeNameRef = document.querySelector('.description-container h1').innerHTML;
console.log(recipeNameRef);

//2. What HTML tag is used to display the Recipe name?
const recipeNameElement = document.getElementById('recipe-name');
console.log(recipeNameElement);

//3. What is the font size of the paragraph tag with the class "description".
const descriptionRef = document.querySelector('.description');
const fontDes = window.getComputedStyle(descriptionRef).fontSize;
console.log(fontDes);

//4. What is the value of the alt atrribute on the image?
const imgRef = document.querySelector('.image-container img');
const imgAlt = imgRef.getAttribute('alt');  //  const imageAlt = imgRef.alt;
console.log(imgAlt);

/*5. What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:
{
  url: string
  height: number,
  width: number,
} */

const imgUrl = imgRef.src; //const srcRef = imgRef.getAttribute('src');
const imgHeight = imgRef.offsetHeight;
const imgWidth = imgRef.offsetWidth;

const imageDetails = {
    url: imgUrl,
    height: imgHeight,
    width: imgWidth
};

console.log(imageDetails);

//6. How many ingredients has the paste?
const ingredientsRef = document.querySelectorAll('.ingredients-list-paste li');
console.log(ingredientsRef.length);

//7. Which is the forth element in the list containing the ingredients for the paste?
const ingredientsRef2 = document.querySelector('.ingredients-list-paste li:nth-child(4)').innerHTML;
console.log(ingredientsRef2);

/*8. Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:
{
    order: number;
    text: instruction;
}*/
const instructionRef = document.querySelectorAll('.instructions-list li');
const instructionArray = [];

instructionRef.forEach((instruction, index) => {
    const instructionObject ={
        order: index + 1,
        Text: instruction.textContent
    };
    instructionArray.push(instructionObject);
});

console.log(instructionArray);