// Array of Colors
let colors = ['red'];

// Get button
let button = document.getElementById('button');

button.addEventListener('click', function () {
    
    var randomColor = colors[Math.floor(Math.random() * colors.length)]

    let container = document.getElementById('container');

    container.style.background = randomColor
})
