let lightButton = document.getElementById("lightButton");
let darkButton = document.getElementById("darkButton");


darkButton.addEventListener('click', () => {
   const elements = document.getElementsByClassName('light');
   elements.setAttribute('class', 'dark');
}
