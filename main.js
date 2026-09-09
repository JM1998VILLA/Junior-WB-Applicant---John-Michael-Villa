.side-menu {
    transform: translateX(-100%);
}

.side-menu.active {
    transform: translateX(0);
}

        const menuButton = document.getElementById("menuButton");
        const sideMenu = document.getElementById("sideMenu");
        const overlay = document.getElementById("overlay");
        const closeButton = document.getElementById("closeButton");


        // Open Menu

        menuButton.addEventListener("click", function () {

            sideMenu.classList.add("active");

            overlay.classList.add("active");

            menuButton.classList.add("active");

        });


        // Close Menu

        closeButton.addEventListener("click", function () {

            closeMenu();

        });


        // Close when clicking outside

        overlay.addEventListener("click", function () {

            closeMenu();

        });


        // Close function

        function closeMenu() {

            sideMenu.classList.remove("active");

            overlay.classList.remove("active");

            menuButton.classList.remove("active");

        }



        document.addEventListener("keydown", function(event) {

            if (event.key === "Escape") {

                closeMenu();

            }

        });
