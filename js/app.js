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
function makeActive() {
    //select all sections on the page
    const sections = document.querySelectorAll('section');
    //select all navigation list items
    const navItems = document.getElementsByTagName("li");

    //loop through each section
    for (const section of sections) {
        //get position of the section relative to the viewport
        const box = section.getBoundingClientRect();
        //Find a value that works best, but 150 seems to be a good start.
        if (box.top <= 150 && box.bottom >= 150) {
            //apply active state on current section and corresponding Nav link
            section.classList.add("your-active-class");
            //loop through each item to highlight the correct link
            for (const link of navItems) {
                // remove active class from all other nav links
                link.classList.remove("your-active-class");
                //get href of 1st child inside nav item
                let thing = link.firstChild.href;
                //if href matches section ID add "active" class to link
                if (thing.includes(section.id)) {
                    link.classList.add("your-active-class");
                }
            }
        } else {
            //Remove active state from other section and corresponding Nav link
            section.classList.remove("your-active-class");
        }
    }
}


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

        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = `#${sectionID}`;
        a.textContent = sectionTitle; //text without HTML tags
        a.classList.add("menu__link"); //add menu__link class
        li.appendChild(a); //add anchor to li
        navContainer.appendChild(li); //add li to navigation container
    })

});

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
//Call the makeActive() function whenever the user scrolls the page.
document.addEventListener("scroll", function () {
    makeActive();
});

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


