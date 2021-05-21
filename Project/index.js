const foods = [
    {
        "name": "name",
        "image_url": '',
        "ingredients": ['a','b','c'],
        "directions": "this is how"
    }
];

const initScreen = () => {
    foods.forEach((food, idx) => {
        document.querySelector('#scroll-files').innerHTML += 
            `<div class="file">
                <img src='${food[idx]}'/> 
            </div>`;
    });
};

initScreen();