let lightButton = document.getElementById("lightButton");
let darkButton = document.getElementById("darkButton");


darkButton.addEventListener('click', () => {
   let elements = document.getElementsByClassName('light')
   for (i = 0; i < elements.length; i++) {
    elements[i].classList.remove('light');
    elements[i].classList.add('dark');
   }
   
});

lightButton.addEventListener('click', () => {
    let elements = document.getElementsByClassName('dark')
    for (i = 0; i < elements.length; i++) {
        elements[i].classList.remove('dark');
        elements[i].classList.add('light');
       }
});