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
