

const playIcon = document.querySelector("#playIcon");
const music = document.querySelector("#music");

playIcon.addEventListener("click", function() {
    if (music.paused) {
        music.play();
        playIcon.src = "images/pauseicon.png"; 
    } else {
        music.pause();
        playIcon.src = "images/playicon.png";
    }
});


const gridContainer = document.querySelector('.gridContainer');

// Get computed style
const computedStyle = window.getComputedStyle(gridContainer);



// Retrieve css value 
let width = parseInt(computedStyle.getPropertyValue("width"));
console.log(`grid width is ${width}`)

let count; 
if(width === 1400) {
    count = 448; 
}else if (width === 350) {
    count = 196;
}


for(let i = 0; i < count; i++) {
    let box = document.createElement('div'); 
    box.className = 'box'; 
    gridContainer. appendChild(box);
}


const box = document.querySelectorAll('.box')
for(let i = 0; i < box.length; i++) {
    let duration = Math.random() * 3;
    box[i].addEventListener('mouseover', () => {
        box[i].classList.add('active');
        box[i].style.animationDuration = 1 + duration + 's';
    });
}

