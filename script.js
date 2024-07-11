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


