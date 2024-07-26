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