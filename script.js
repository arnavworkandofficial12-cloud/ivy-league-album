const PHOTO_LIST = [
    "yale.png",
    "oxford.png",
    "ucberkley.png",
    "brownusa.png"
];
let currentIndex = 0;
const albumview = document.querySelector("#album-view");
const places = document.querySelector("#modal-view");
for (let i = 0; i < PHOTO_LIST.length; i++) {
    const photosrc = PHOTO_LIST[i];
    const image = Createimage(photosrc);
    image.addEventListener('click', expandimage);
    albumview.appendChild(image)
}


function Createimage(src) {
    const img = document.createElement('img');
    img.src = src;
    return img
}

function expandimage(event) {
    places.innerHTML = "";
    const img = Createimage(event.currentTarget.src);
    document.body.classList.add('no-scroll');
    places.style.top = window.pageYOffset + 'px';
    places.appendChild(img);
    places.classList.remove('hidden');
    currentIndex = PHOTO_LIST.indexOf(event.currentTarget.src.split('/').pop());
}
function removeplaces() {
    document.body.classList.remove('no-scroll');
    places.classList.add('hidden');
    places.innerHTML = ''
}
places.addEventListener("click", removeplaces);
document.addEventListener('keyup', keyaction);
document.addEventListener('mousedown', onclick);
function onclick(event) {
    console.log("x" + event.clientX);
    console.log('y' + event.clientY);
}
function showimage(currentIndex) {
    places.innerHTML = '';
    const img = document.createElement('img');
    img.src = PHOTO_LIST[currentIndex];
    places.appendChild(img);
}
function keyaction(event) {
    if (event.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % PHOTO_LIST.length;
        showimage(currentIndex);
    }
    if (event.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + PHOTO_LIST.length) % PHOTO_LIST.length
        showimage(currentIndex);
    }
    if (event.key === "Escape") {
        removeplaces();
    }
}
