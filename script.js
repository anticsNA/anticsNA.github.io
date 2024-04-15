document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.getElementById("dropdown");
    var menuIcon = document.querySelector(".menu-icon");

    // Toggle dropdown menu when menu icon is clicked
    menuIcon.addEventListener("click", function() {
        dropdown.classList.toggle("show");
    });

    // Close dropdown menu when user clicks outside of it
    window.addEventListener("click", function(event) {
        if (!event.target.matches(".menu-icon")) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains("show")) {
                    openDropdown.classList.remove("show");
                }
            }
        }
    });
});
