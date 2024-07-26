document.addEventListener("DOMContentLoaded", function() {
            const logo = document.querySelector('.logo');

            if (logo) {
                logo.onclick = function() {
                    window.location.href = "/";
                };
            }
        });
        function disableFirstOption() {
    const selectElement = document.getElementById('budget');
    const firstOption = selectElement.options[0];

    // Disable the first option if any other option is selected
    if (selectElement.selectedIndex !== 0) {
        firstOption.disabled = true;
    }
}

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
