/**
 * 
 * -------------------------------------
 * DOM Manipulation / Traversal Activity
 * -------------------------------------
 * 
 * 1. Create and attach an event handler (function) to each ".image" 
 * element so that when the ".image" element is clicked, the corresponding 
 * image loads in the .featured image element.
 * 
 * 2. Create event handlers for the next and previous buttons. The next button should
 *    show the next image in the thumbnail list. The previous should show the previous.
 * 
 * 3. If you get to the end, start at the beginning. 
 * 
 * 4. If you get to the beginning, loop around to the end.
 * 
 * 
 */

const images = [
    'images/field1.jpg',
    'images/purple.jpg',
    'images/jar.jpg',
    'images/green.jpg',
    'images/green1.jpg',
    'images/purple1.jpg',
    'images/magnolias.jpg',
    'images/daisy1.jpg'
];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
            <li class="card">
                <div class="image" 
                    style="background-image:url('${image}')"
                    data-index="${idx}"></div>
            </li>`;
    });
};

initScreen();
let currentIndex = 0
const showImage = (ev) => {
    const elem = ev.currentTarget;
    const feature = document.querySelector('.featured_image')
    currentIndex = parseInt(elem.dataset.index);
    console.log(elem.style.backgroundImage);
    feature.style.backgroundImage = elem.style.backgroundImage;
};
const imageElements = document.querySelectorAll('.image');
for (const elem of imageElements) {
    elem.onclick = showImage;
}

const showNextImage = (ev) => {
    if (currentIndex < 7){
        currentIndex += 1;
    } else {
        currentIndex = 0;
    }
    console.log(currentIndex);
    const next = imageElements[currentIndex].style.backgroundImage;
    document.querySelector('.featured_image').style.backgroundImage = next;
} 
const showPrevImage = (ev) => {
    if (currentIndex > 0){
        currentIndex -= 1;
    } else {
        currentIndex = 7;
    }
    console.log(currentIndex);
    const prev = imageElements[currentIndex].style.backgroundImage;
    document.querySelector('.featured_image').style.backgroundImage = prev;
} 

document.querySelector('.next').onclick = showNextImage;
document.querySelector('.prev').onclick = showPrevImage;
document.querySelector('.featured_image').onclick = showNextImage;