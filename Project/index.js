const foods = [
    {
        "name": "Tempura-Soba",
        "image_url": 'photos/soba.jpeg',
        "images": ["url('photos/soba.jpeg')"],
        "ingredients": ['nihon soba','2 shrimp','green onion','1tbs flour','1/5 egg','1/2tsp salt','1.5tbs soysauce','1tbs sugar','1tsp fish broth','1cup water + 2tbs water'],
        "directions": ['Make Tempura: mix 1/5 egg and 2 tbs water','dip shrimp and deep-fry','Make Soup: boil 1 cup water','chop green onion','add salt, soysauce, sugar, and broth'],
    },
    {
        "name": "Ton-Katsu",
        "image_url": ['photos/katsu.jpeg'],
        "images": ["url('photos/katsu.jpeg')"],
        "ingredients": ['pork filet','salt and pepper','egg','panko'],
        "directions": ['cut pork into even squares','add salt and pepper','dip in flour','dip in egg','put panko around evenly','deep-fry']
    },
    {
        "name": "Gyoza",
        "image_url": 'photos/gyoza2.jpeg',
        "images": ["url('photos/gyoza.jpeg')", "url('photos/gyoza2.jpeg')"],
        "ingredients": ['20 gyoza wrapper','1/4lbs ground-pork','2leaves nappa-cabbage','10sticks chives','2 green onion','2piece shiitake-mushroom','1clove garlic','salt and pepper', '1tsp soysauce','1/2tsp sesame oil', '1/2tsp sake'],
        "directions": ['chop all vegetables','mix everything together in a bowl','wrap (look at images)','cook on frying pan with vegetable oil']
    },
    {
        "name": "Sukiyaki",
        "image_url": 'photos/sukiyaki.jpeg',
        "images": ["url(photos/sukiyaki.jpeg)"],
        "ingredients": ['1/2lbs thin-sliced-delmonico beef','1/2block tofu','ito-konyaku','6leaves nappa-cabbage','3 green onion','1 onion','3 shiitake mushroom','1/2cup soysauce','3tbs sugar','3tbs sake','2tbs mirin'],
        "directions": ['chop all ingredients (except beef)','put soysauce, mirin, sugar, and sake in nabe and boil', 'add meat first to soak','place all other ingredients inside the nabe']
    },
    {
        "name": "Sweet-Potato Apple Pie",
        "image_url": 'photos/pie.jpeg',
        "images": ["url('photos/pie.jpeg')"],
        "ingredients": ['200g flour','70cc water','110g butter','2 apples','70g sugar + 50g','lemon','cinnamon','1 Japanese sweet potato','2tbs heavy-cream', 'vanilla essence'],
        "directions": ['Make crust: add butter into flour and create chunks','add water and mix again withought crushing chunks','put wet towel over it and sit for 30min','Make Apple: peel, cut, and cook apple in sugar','mix in lemon and cinnamon','Make potato: cut, place in water for 5min', 'boil in very little new water','once soft, drain and mash','mix with 50g sugar, heavy cream and vanilla','Put all together: split crust in to 2','both halves: roll out, add flour and fold like futon repeat 3x','1st half place in pan','put potato then apple and cover with other half','bake in oven 380°F 40min']
    },
    {
        "name": "Chicken-Itame",
        "image_url": 'photos/chicken-itame.jpeg',
        "images": ["url('photos/chicken-itame.jpeg')"],
        "ingredients": ['1 chicken breast','1 carrots','1 green pepper','1 onion','1clove garlic','1tbs sake + 1tsp ','2tbs soysauce','1tsp sugar'],
        "directions": ['slice chicken breast, diagnally cut','marinade in 1tbs sake and 1tbs soysauce 30 min','add corn starch to chicken','chop vegetables','using vegatable oil, cook vegetables and remove from pan','using sesame oil cook garlic','add chicken','add vegetables once chicken is cooked','add 1tbs soysauce, 1tsp sugar, 1tsp sake, salt and pepper']
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
    for (k = 0; k < dst.length; k++){
        let li = document.createElement('li');
        li.textContent = dst[k];
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