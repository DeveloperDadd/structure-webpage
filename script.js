let lightButton = document.getElementById("lightButton");
let darkButton = document.getElementById("darkButton");


darkButton.addEventListener('click', () => {
   let element = document.getElementByClass('light')
   element.classList.remove('light');
   element.classList.add('dark');
});

lightButton.addEventListener('click', () => {
    let elements = document.getElementsByClassName('dark')
    elements.classList.remove('dark');
    elements.classList.add('light');
});