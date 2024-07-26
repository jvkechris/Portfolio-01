const items = document.querySelectorAll(".accordion button");function toggleAccordion() {  const itemToggle = this.getAttribute('aria-expanded');    for (i = 0; i < items.length; i++) {    items[i].setAttribute('aria-expanded', 'false');  }    if (itemToggle == 'false') {    this.setAttribute('aria-expanded', 'true');  }}items.forEach(item => item.addEventListener('click', toggleAccordion));document.addEventListener("DOMContentLoaded", function() {            const logo = document.querySelector('.logo');            if (logo) {                logo.onclick = function() {                    window.location.href = "/";                };            }        });

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
