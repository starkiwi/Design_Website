let topDistance;
let layers;
let layer;
let depth;
let movement;
let translate_css;


window.addEventListener('scroll',
    () => {
        topDistance = scrollY;
        layers = document.querySelectorAll("[data-type='parallax']")
        for (layer of layers) {
            depth = parseFloat(layer.getAttribute('data-depth'));
            movement = -(topDistance * depth);
            translate_css = 'translate3d(0, ' + movement + 'px, 0)';
            layer.style.transform = translate_css;
        }
    });