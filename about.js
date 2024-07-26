document.addEventListener("DOMContentLoaded", function() {
            const logo = document.querySelector('.logo');

            if (logo) {
                logo.onclick = function() {
                    window.location.href = "/";
                };
            }
        });
        function drawCraterWithText() {
    const height = 20; // Height of the crater
    const width = 40; // Width of the crater
    const text = "MADE BY CODING ALCHEMY @LADISZN";

    const redDash = '\x1b[31m---\x1b[0m'; // Red dashes
    const blackSpace = '\x1b[40m   \x1b[0m'; // Black background space

    let output = '';

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            // Calculate the starting position of the text
            const textStartRow = Math.floor((height - 1) / 2);
            const textStartCol = Math.floor((width - text.length) / 2);

            // Check if current position is within the bounds of the text
            if (i === textStartRow && j >= textStartCol && j < textStartCol + text.length) {
                // Extract the character to display
                const charIndex = j - textStartCol;
                const char = text[charIndex];
                output += `\x1b[40m${char}\x1b[0m`; // Display character with black background
            } else {
                output += redDash;
            }
        }
        output += '\n';
    }

    console.log(output);
}

drawCraterWithText();

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
