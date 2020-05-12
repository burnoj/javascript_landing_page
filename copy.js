
// -----------Navbar----------- //

function displayNav() {

  const sections = ["LiquidDnB", "Ambient", "Melodic", "Dub_Fusion"];

  const ul = document.querySelector('ul')

  for (let section of sections) {
    let li = document.createElement("li");
    li.innerHTML += `<a href="#${section}">${section}</a>`;
    li.className = "menu__link"
    ul.appendChild(li);
  }
}

displayNav();

// -----------Content----------- //

function displayContent() {

  const sectionNames = ["Liquid Projects", "Ambient Projects", "Melodic Projects", "Dub Fusion Projects"];

  const section = document.querySelector('section');

  for(let sectionName of sectionNames) {
  }
}


/**

 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/


/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active

