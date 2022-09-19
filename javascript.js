let size;

const container = document.querySelector('.container');
const controlPanel = document.createElement('div');
const sizeButton = document.createElement('button');
const body = document.querySelector('body');

controlPanel.className = "panel";
body.appendChild(controlPanel);
sizeButton.textContent = "How many squares (squared) ya want in this thing?";
controlPanel.appendChild(sizeButton);

size = parseInt(prompt("How many squares (squared) ya want?", "16"));
    if (size > 100) {
        window.alert("That's too much, man! Try something more in the range of 1 to 100.\n\nIt's not that I can't make it happen. It's just that your computer is too weak.");
    }

    else {
        for(i = 0; i < size * size; i++) {
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
        box.addEventListener('click', function(e) {
            box.classList.remove('leave');
            box.classList.remove('hover');
            box.classList.add('dark');
        }, {once: true});
        box.style.height = `${800/size}px`;
        box.style.width = `${800/size}px`;
    }
}

sizeButton.addEventListener('click', function() {
    location.reload();
});