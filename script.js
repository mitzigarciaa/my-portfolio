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

//contact form


const form = document.getElementById('contact-form');
const errorMessage = document.getElementById('error-message');


form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting


    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();


    //error message
    errorMessage.style.display = 'none';


    // Check if the name field is empty
    if (!name) {
        errorMessage.textContent = 'Please enter your name.';
        errorMessage.style.display = 'block';
        return;  
    }


    // Check if the email field is empty
    if (!email) {
        errorMessage.textContent = 'Please enter your email.';
        errorMessage.style.display = 'block';
        return;  
    }


    // Check if the message field is empty
    if (!message) {
        errorMessage.textContent = 'Please enter your message.';
        errorMessage.style.display = 'block';
        return;  
    }


    // If all fields are filled, hide the error message
    errorMessage.style.display = 'none';
    alert('Form submitted successfully!');
});
