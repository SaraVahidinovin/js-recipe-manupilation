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

