document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('DOMContentLoaded', function() {
    const modelViewer = document.getElementById('model-viewer');

    // Mouse movement across the page
    document.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth - 0.5; // Normalize to range [-0.5, 0.5]
        const y = e.clientY / window.innerHeight - 0.5; // Normalize to range [-0.5, 0.5]
        const deltaTheta = x * Math.PI; // Rotation angle around Y-axis
        const deltaPhi = y * Math.PI / 2; // Rotation angle around X-axis

        modelViewer.cameraTarget = `0m 0m 0m`; // Reset camera target to center
        modelViewer.cameraOrbit = `${deltaTheta}rad ${deltaPhi}rad 2m`; // Set camera orbit
    });

    // Reset rotation on mouse leave
    document.addEventListener('mouseleave', function() {
        modelViewer.cameraTarget = `0m 0m 0m`;
        modelViewer.cameraOrbit = `0rad 0rad 2m`;
    });

    // Touch movement across the page
    document.addEventListener('touchstart', function(e) {
        modelViewer.interactionPrompt = 'none'; // Disable interaction prompt
    });

    document.addEventListener('touchmove', function(e) {
        const touch = e.touches[0];
        const x = touch.clientX / window.innerWidth - 0.5; // Normalize to range [-0.5, 0.5]
        const y = touch.clientY / window.innerHeight - 0.5; // Normalize to range [-0.5, 0.5]
        const deltaTheta = x * Math.PI; // Rotation angle around Y-axis
        const deltaPhi = y * Math.PI / 2; // Rotation angle around X-axis

        modelViewer.cameraTarget = `0m 0m 0m`;
        modelViewer.cameraOrbit = `${deltaTheta}rad ${deltaPhi}rad 2m`;
    });

    document.addEventListener('touchend', function() {
        modelViewer.interactionPrompt = 'auto'; // Re-enable interaction prompt
    });
});

    // Touch movement across the page
    document.addEventListener('touchstart', function(e) {
        initialTouchX = e.touches[0].clientX;
        initialTouchY = e.touches[0].clientY;
    });

    document.addEventListener('touchmove', function(e) {
        if (initialTouchX !== null && initialTouchY !== null) {
            const touch = e.touches[0];
            const deltaX = touch.clientX - initialTouchX;
            const deltaY = touch.clientY - initialTouchY;

            // Calculate new rotation angles based on touch movement
            const rotateY = initialRotateY + (deltaX / window.innerWidth) * 270;
            const rotateX = initialRotateX - (deltaY / window.innerHeight) * 270;

            tiltImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            tiltImage.classList.add('shimmer');
        }
    });

    document.addEventListener('touchend', function() {
        initialTouchX = null;
        initialTouchY = null;
        tiltImage.classList.remove('shimmer');

        // Store the current rotation angles
        const computedStyle = window.getComputedStyle(tiltImage);
        const transform = computedStyle.transform;
        if (transform !== 'none') {
            const values = transform.split('(')[1].split(')')[0].split(',');
            const angleX = Math.asin(values[6]) * (180 / Math.PI);
            const angleY = Math.atan2(values[3], values[0]) * (180 / Math.PI);
            initialRotateX = angleX;
            initialRotateY = angleY;
        } else {
            initialRotateX = 0;
            initialRotateY = 0;
        }
    });

    // Logo click event to navigate
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.onclick = function() {
            window.location.href = "?page=da";
        };
    }
});
 window.addEventListener('load', function() {
            const textElement = document.getElementById('fadeInText');
            const originalHTML = textElement.innerHTML;
            textElement.innerHTML = ''; // Clear the existing content

            let delay = 0;

            // Function to process each node recursively
            function processNode(node) {
                if (node.nodeType === Node.TEXT_NODE) {
                    // Wrap each word in a span
                    const words = node.textContent.split(/(\s+)/);
                    words.forEach(word => {
                        if (word.trim() !== '') {
                            const span = document.createElement('span');
                            span.textContent = word;
                            span.className = 'fade-in';
                            span.style.transitionDelay = `${delay * 0.5}s`;
                            textElement.appendChild(span);
                            delay++;
                        } else {
                            textElement.appendChild(document.createTextNode(word));
                        }
                    });
                } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'BR') {
                    // Append BR elements directly
                    textElement.appendChild(node.cloneNode());
                } else {
                    // Process other element nodes recursively
                    const wrapper = document.createElement(node.tagName);
                    textElement.appendChild(wrapper);
                    Array.from(node.childNodes).forEach(processNode);
                }
            }

            // Create a temporary container to parse the original HTML
            const tempContainer = document.createElement('div');
            tempContainer.innerHTML = originalHTML;
            Array.from(tempContainer.childNodes).forEach(processNode);

            // Add a class to each span after a delay
            setTimeout(function() {
                const spans = textElement.querySelectorAll('span.fade-in');
                spans.forEach(span => {
                    span.style.opacity = '1';
                });
            }, 2000);
        });
        const modelViewer = document.getElementById('model-viewer');
    const preloader = document.getElementById('model-preloader');
    
    modelViewer.addEventListener('load', () => {
        preloader.style.display = 'none';
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
