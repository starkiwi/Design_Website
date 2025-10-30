let nav_bar = document.getElementById('nav_bar');
let up_button = document.getElementById('to_top');

window.addEventListener('scroll', () => {
    let nav_location = nav_bar.getBoundingClientRect();
    if (nav_location.top < -350) {
        up_button.style.display = 'block';
    }
    else
        up_button.style.display = 'none';
});

up_button.addEventListener('click', () => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});