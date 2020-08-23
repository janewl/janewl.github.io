/* toggle hamburger menu 
    let toggleLinks = document.querySelector('nav-links');
    let navbarr = document.querySelector('.menu-btn');
    alert(navbarr);
    navbar.addEventListener('click', function (e) {
        toggleLinks.classList.toggle('active');
    });
*/

    let nav = document.getElementsByClassName('menu-btn').item(0);
    let links = document.getElementsByClassName('nav-links');
    nav.addEventListener("click", function(e){
        e.preventDefault(); 
        links.item(0).classList.toggle('toggle-menu');
    });

