var currentSlide = 0;
const next = document.querySelector('#next');
const previous = document.querySelector('#previous');
const slider = document.querySelectorAll('.slide');
const one = document.querySelector('#nr1');
const two = document.querySelector('#nr2');
const three = document.querySelector('#nr3');
const four = document.querySelector('#nr4');
const five = document.querySelector('#nr5');


previous.addEventListener('click', () => {
    Slider(currentSlide - 1);
});

next.addEventListener('click', () => {
    Slider(currentSlide + 1);
});

function Slider(i) {
    slider[currentSlide].style.left = '100%';
    currentSlide = (i + slider.length) % slider.length;
    slider[currentSlide].style.left = '0%';
}
one.addEventListener("click", () => {
    Slider(0);
} )

two.addEventListener("click", () => {
    Slider(1);
} )

three.addEventListener("click", () => {
    Slider(2);
} )

four.addEventListener("click", () => {
    Slider(3);
} )

five.addEventListener("click", () => {
    Slider(4);
} )