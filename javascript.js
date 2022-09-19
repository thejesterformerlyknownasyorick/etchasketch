const container = document.querySelector('.container');

for(i = 1; i < 273; i++) {
    const box = document.createElement('div');
    box.className = "box";
    container.appendChild(box);
    box.addEventListener('mouseover', function(e) {
        box.classList.add('hover');
        box.classList.remove('leave');
    });
    box.addEventListener('mouseleave', function(e) {
        box.classList.add('leave');
        box.classList.remove('hover');
    });
}
