document.addEventListener('DOMContentLoaded', (event) => {
    // Select all buttons with the 'toggle-details' class
    const buttons = document.getElementsByClassName('toggle-details'); 

    // Loop through all buttons and add an event listener for the click event
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            const details = this.nextElementSibling; // Get the details div next to the clicked button
            details.classList.toggle('hidden'); // Toggle the visibility of the details div

            // Change the button text based on visibility
            if (details.classList.contains('hidden')) {
                this.textContent = 'Show Details'; // Show Details when hidden
            } else {
                this.textContent = 'Hide Details'; // Hide Details when visible
            }
        });
    }
});

