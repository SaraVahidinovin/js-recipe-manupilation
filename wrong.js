// 1. The logo text of the site has the wrong color. Change it to the correct one.
const logoRef = document.querySelector('.logo-text');
logoRef.style.color = "#384241";

//2. The alignment of the elements inside the header element are wrong. 
const headerRef = document.querySelector('header');
headerRef.style.justifyContent = 'flex-start';

//3. The header has a border at the bottom, but it has the wrong color. Change it do the correct one.
headerRef.style.borderBottomColor = "lightgray";

//4. The recipe name is wrong, change it to the correct one.
const recipeNameRef = document.querySelector('#recipe-name');
recipeNameRef.textContent = "Frozen Cheesecake";

//5. The clock icon beneath the recipe name has disappeared and been replaced by a text instead. This can be fixed by adding a class to that element.
const clockRef = document.querySelector('.time-container span:first-child');
clockRef.classList.add('material-icons');

//6. The estimated time of the recipe is also incorrect. Change it to the correct time estimation.
const timeRef = document.querySelector('.time');
timeRef.textContent = "60+ min";

/*7. The src path to the image is wrong, or atleast it's showing the wrong image. 
Change it to the correct one. The available images can be found in the assets folder.*/
const imgRef = document.querySelector('.image-container img');
imgRef.src = "assets/frozen-cheesecake-slice.jpg";

//8. The background color of the ingredients list container is wrong. Fix it.
const ingredientsRef = document.querySelector('.ingredients-container');
ingredientsRef.style.backgroundColor = "#f9f9f9";

/*9. The ingredients are divided in to two parts, one for the bottom and one for the paste.
 In the list of the ingredients to the bottom, there is a text instead of two list items.
  Remove the text and add those two list items.*/
const ingredientsListRef = document.querySelector('.ingredients-list-bottom');

const textRef = ingredientsListRef.querySelector('p');
ingredientsListRef.removeChild(textRef);

const item1 = document.createElement('li');
item1.textContent = '15st digestivetex';
ingredientsListRef.appendChild(item1);

const item2 = document.createElement('li');
item2.textContent = 'Lite smör';
ingredientsListRef.appendChild(item2);

/*10. The third ingredient in the list of ingredients to the paste is wrong.
 Change that specific ingredient to the correct one.*/

 const pasteIngredientsList = document.querySelectorAll('.ingredients-list-paste li');
 pasteIngredientsList[2].textContent = '3tsk vaniljsocker';

 /*11. There is also a missing ingredient in the list of ingredients to the paste.
  Look and see what it is and add that one the the end of the list.*/

  const pasteIngredientsRef = document.querySelector('.ingredients-list-paste');
  const item5 = document.createElement('li');
  item5.textContent = '400g naturell philadelphiaost';
 pasteIngredientsRef.appendChild(item5);

 //12. The text "Instructions" to the left, beneath the image, has some shadow styling applied to it. Remove that styling.
 const instructionRef = document.querySelector('.shadow');
 instructionRef.style.boxShadow = 'none';

 //13. Two list elements of the list of instructions are incorrect. Find them and change them to the correct ones.
const instructionListRef = document.querySelectorAll('.instructions-list li');
instructionListRef[1].textContent = 'Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.';
instructionListRef[8].textContent = 'Ställ in i frysen över natten.';