document.getElementById('toggleButton').addEventListener('click', function(event) {
            event.preventDefault();  // Prevent form submission
            const passwordField = document.querySelector('.password');
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                this.innerHTML = `<i class="bi bi-eye-slash-fill"></i>`;
            } else {
                passwordField.type = 'password';
                this.innerHTML = `<i class="bi bi-eye-fill"></i>`;
            }
        });

document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.getElementById('click');
  const links = document.querySelectorAll('nav ul li a');

  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      // Apply the slide-in effect with a delay for each link
      links.forEach((link, index) => {
        link.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        link.style.opacity = 1;
        link.style.transform = 'translateX(0)';
      });
    } else {
      // Reset the effects when the checkbox is unchecked
      links.forEach(link => {
        link.style.transition = 'none';
        link.style.opacity = 0;
        link.style.transform = 'translateX(-100%)';
      });
    }
  });
});
