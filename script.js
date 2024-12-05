document.addEventListener('DOMContentLoaded', function() {
    
    const buttons = document.getElementsByClassName('toggle-details'); 

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            const details = this.nextElementSibling; 
            details.classList.toggle('hidden'); 

            if (details.classList.contains('hidden')) {
                this.textContent = 'Show Details'; // Removed the stray 'n' here
            } else {
                this.textContent = 'Hide Details'; 
            }
        });
    }

    // Dark Mode Toggle
    const toggleThemeButton = document.getElementById('toggleTheme');
    toggleThemeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.project');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            projects.forEach(project => {
                if (category === 'all' || project.getAttribute('data-category') === category) {
                    project.style.display = 'block';  
                } else {
                    project.style.display = 'none'; 
                }
            });
        });
    });

    // Contact form 
    const form = document.getElementById('contact-form');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Hide error message
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

    // Dark mode toggle functionality (already added above, no need to repeat it)
});
