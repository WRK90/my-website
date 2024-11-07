// script.js

function toggleSkills() {
    const skillsSection = document.getElementById('skills');
    skillsSection.style.display = skillsSection.style.display === 'none' ? 'block' : 'none';
}
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
    (function() {
        emailjs.init("your-user-id");  // Replace with your EmailJS user ID
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
</script>
