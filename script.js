document.addEventListener("DOMContentLoaded", function () { 
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const searchContainer = document.querySelector(".search-container");
    const searchIcon = document.querySelector(".search-icon");

    // Gestion du menu burger
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Affichage du champ de recherche au clic sur l'icône
    searchIcon.addEventListener("click", function () {
        searchContainer.classList.toggle("active");
    });
});
