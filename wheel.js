const colorItems = {
    "Red": "Beats",
    "Blue": "AirPods",
    "Green": "Beats",
    "Yellow": "AirPods",
    "Purple": "Beats",
    "Orange": "AirPods"
};

const colors = Object.keys(colorItems);
const numColors = colors.length;
const angle = 360 / numColors;

const wheel = document.getElementById('wheel');
const result = document.getElementById('result');

// Draw the wheel
colors.forEach((color, index) => {
    const segment = document.createElement('div');
    segment.classList.add('segment');
    segment.style.backgroundColor = color;
    segment.style.transform = `rotate(${index * angle}deg) skewY(-${90 - angle}deg)`;
    wheel.appendChild(segment);
});

function spinWheel() {
    result.textContent = "Spinning...";
    const chosenColor = colors[Math.floor(Math.random() * numColors)];
    const spinDegrees = 3600 + (colors.indexOf(chosenColor) * angle);

    wheel.style.transition = 'transform 5s ease-out';
    wheel.style.transform = `rotate(${spinDegrees}deg)`;

    setTimeout(() => {
        result.textContent = `The wheel landed on ${chosenColor}! Congratulations! You won ${colorItems[chosenColor]}!`;
    }, 5000); // Wait for the animation to finish
}
