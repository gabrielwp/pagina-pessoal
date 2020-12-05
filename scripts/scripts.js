function navClick(event, id) {
    var menu = document.getElementById('menu');

    menu.style.display = 'none';

    window.location.hash = event.target.hash;
    event.preventDefault();
    var element = document.getElementById(id);
    window.scroll({
        top: element.offsetTop - 20,
        behavior: 'smooth',
    });

    setTimeout(() => {
        menu.style.display = null;
    }, 200);
}