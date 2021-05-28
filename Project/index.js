const foods = [
    {
        "name": "Tempura-Soba",
        "image_url": 'photos/soba.jpeg',
        "images": ["url('photos/soba.jpeg')"],
        "ingredients": ['a','b','c'],
        "directions": ['this is how'],
    },
    {
        "name": "Ton-Katsu",
        "image_url": ['photos/katsu.jpeg'],
        "images": ["url('photos/katsu.jpeg')", "url('photos/soba.jpeg')"],
        "ingredients": ['a','b','c'],
        "directions": ['this is how', 'so do this']
    },
    {
        "name": "name3",
        "image_url": '',
        "images": [''],
        "ingredients": ['a','b','c'],
        "directions": ['this is how']
    },
    {
        "name": "name4",
        "image_url": '',
        "images": [''],
        "ingredients": ['a','b','c'],
        "directions": ['this is how']
    },
    {
        "name": "name5",
        "image_url": '',
        "images": [''],
        "ingredients": ['d','e','f'],
        "directions": ['this is how']
    },
    {
        "name": "name6",
        "image_url": '',
        "images": [''],
        "ingredients": ['g','h','i'],
        "directions": ['this is how']
    }
];

const initScreen = () => {
    foods.forEach((food, idx) => {
        document.querySelector('#scroll-files').innerHTML += 
            `<div class="file" onclick ="featureThis(event)" data-index="${idx}">
                <img src='${food.image_url}'/>
                <p> ${food.name} </p>
            </div>`;
    });
};

initScreen();

const showRecipe = (ev) => {
    document.querySelector('#recipe-card').style.display = "flex";
    document.querySelector('#photo-card').style.display = "none";
    document.querySelector('#video-card').style.display = "none";
    document.querySelector('#card').classList.add("clicked")
    document.querySelector('#image').classList.remove ("clicked")
    document.querySelector('#video').classList.remove ("clicked")
}
const showImage = (ev) => {
    document.querySelector('#photo-card').style.display = "flex";
    document.querySelector('#recipe-card').style.display = "none";
    document.querySelector('#video-card').style.display = "none";
    document.querySelector('#image').classList.add("clicked");
    document.querySelector('#card').classList.remove ("clicked")
    document.querySelector('#video').classList.remove ("clicked")
}
const showVideo = (ev) => {
    document.querySelector('#video-card').style.display = "flex";
    document.querySelector('#photo-card').style.display = "none";
    document.querySelector('#recipe-card').style.display = "none";
    document.querySelector('#video').classList.add("clicked")
    document.querySelector('#image').classList.remove ("clicked")
    document.querySelector('#card').classList.remove ("clicked")
}
let i = 0;
let p = 0;
const featureThis = (ev) => {
    // recipe card
    i = parseInt(ev.currentTarget.getAttribute('data-index'))
    let lst = foods[i].ingredients
    document.querySelector('#ing-list').innerHTML='';
    for (j = 0; j < lst.length; j++){
        let li = document.createElement('li');
        li.textContent = lst[j];
        document.querySelector('#ing-list').appendChild(li) 
    }
    let dst = foods[i].directions
    document.querySelector('#dir-list').innerHTML='';
    for (j = 0; j < lst.length; j++){
        let li = document.createElement('li');
        li.textContent = dst[j];
        document.querySelector('#dir-list').appendChild(li) 
    }
    let ti = 'Recipe: ' + foods[i].name;
    console.log(ti)
    document.querySelector('.title').innerHTML = ti
    // photos
    document.querySelector('#photo-card').style.backgroundImage = foods[i].images[0];
    p = 0;
    // videos
    document.querySelector('#video-card').innerHTML = `<div> coming soon... </div>`
}

const next = (ev) => {
    console.log(p);
    if (p == (foods[i].images.length - 1)){
        p = 0;
    }
    else{
        p += 1;
    };
    document.querySelector('#photo-card').style.backgroundImage = foods[i].images[p];
}
const prev = (ev) => {
    console.log(p);
    if (p == 0){
        p = foods[i].images.length - 1;
    }
    else{
        p -= 1;
    }
    document.querySelector('#photo-card').style.backgroundImage = foods[i].images[p];
}