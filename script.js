// script.js

// Function to toggle the skills section
function toggleSkills() {
    const skillsSection = document.getElementById('skills');
    skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
}

// Initialize EmailJS and set up the form submission handler
(function() {
    emailjs.init("your-user-id");  // Replace with your actual EmailJS user ID
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('your-service-id', 'your-template-id', this)
        .then(function(response) {
            alert('Message sent successfully');
        }, function(error) {
            alert('Failed to send message');
        });
});

