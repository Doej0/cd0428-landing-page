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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
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

//event listener checking for the DOM to be loaded
document.addEventListener("DOMContentLoaded", () => {

    //retrieving nav container
    const navContainer = document.getElementById("navbar__list")

    //data from the sections
    const sections = document.querySelectorAll('section');

    //build nav items based on the sections    
    sections.forEach(section => {
        const sectionID = section.id;
        const sectionTitle = section.dataset.nav; //use data-nav attributes for each section

        let listItem = document.createElement("li");
        let a = document.createElement("a");
        a.href = `#${sectionID}`;
        a.textContent = sectionTitle; //text without HTML tags
        a.classList.add("menu__link"); //add menu__link class
        listItem.appendChild(a); //add anchor to li
        navContainer.appendChild(li); //add li to navigation container
    })

});

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


