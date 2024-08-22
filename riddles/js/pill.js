const icon = document.getElementById('draggable-icon');
const fallingText = document.getElementById('falling-text');
const hidden = document.getElementsByClassName('hidden');
const passwordInput = document.getElementById('password-input');
const checkPasswordButton = document.getElementById('check-password');
const passwordResult = document.getElementById('password-result');

const storedHash = "125cc8fa41714df3ea03d23b72ca58e0dd4469959ac69b35f2daa747fa4ecf0b";

fallingText.textContent = "****";

let isDragging = false;
let startX, startY;
let currentX = 0, currentY = 0;
let initialAngle = 0, currentAngle = 0;

icon.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - currentX;
    startY = e.clientY - currentY;

    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', onStop);
});

icon.addEventListener('dblclick', () => {
    initialAngle = currentAngle;
    icon.classList.add('rotating');

    document.addEventListener('mousemove', onRotate);
    document.addEventListener('mouseup', onStopRotate);
});

function onDrag(e) {
    if (isDragging) {
        currentX = e.clientX - startX;
        currentY = e.clientY - startY;
        icon.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${currentAngle}deg)`;
    }
}

function onStop() {
    isDragging = false;
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', onStop);
}

function onRotate(e) {
    const centerX = icon.getBoundingClientRect().left + icon.clientWidth / 2;
    const centerY = icon.getBoundingClientRect().top + icon.clientHeight / 2;

    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
    currentAngle = angle - initialAngle;
    icon.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${currentAngle}deg)`;

    if (Math.abs(currentAngle % 360) > 90 && Math.abs(currentAngle % 360) < 270) {
        fallingText.style.opacity = 1;
        fallingText.textContent = "5263";
    } else {
        fallingText.style.opacity = 0;
        fallingText.textContent = "****";
    }
}

function onStopRotate() {
    icon.classList.remove('rotating');
    document.removeEventListener('mousemove', onRotate);
    document.removeEventListener('mouseup', onStopRotate);
}

checkPasswordButton.addEventListener('click', () => {
    const enteredPassword = passwordInput.value;
    const enteredHash = CryptoJS.SHA256(enteredPassword).toString();

    if (enteredHash === storedHash) {
        passwordResult.textContent = "Password is correct!";
        passwordResult.style.color = "green";
    } else {
        passwordResult.textContent = "Password is incorrect!";
        passwordResult.style.color = "red";
    }
});