



const gridContainer = document.querySelector('.gridContainer');
const count = 560;
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