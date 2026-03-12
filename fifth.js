
const keys = document.getElementById('keys');
const pressedKeys = new Set();
document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key.length === 1 && !pressedKeys.has(key)) {
        pressedKeys.add(key);
        keys.innerText += key;
    }
});