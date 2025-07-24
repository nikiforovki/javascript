const delayInput = document.getElementById('input');
const textInput = document.getElementById('text');
const toggleBtn = document.getElementById('btn');
const errorElement = document.getElementById('error');

let isActive = false;
let intervalId = null;

function logText() {
    console.log(textInput.value);
}

function validateDelay(value) {
    const delay = parseInt(value);
    return !isNaN(delay) && delay >= 100;
}

function toggleOutput() {
    if (isActive) {
        clearInterval(intervalId);
        isActive = false;
        toggleBtn.textContent = 'Начать';
        toggleBtn.classList.remove('active');
        console.log('Вывод остановлен');
    } else {

        if (!validateDelay(delayInput.value)) {
            errorElement.style.display = 'block';
            return;
        }

        errorElement.style.display = 'none';
        const delay = parseInt(delayInput.value);
        intervalId = setInterval(logText, delay);
        isActive = true;
        toggleBtn.textContent = 'Остановить';
        toggleBtn.classList.add('active');
        console.log(`Запущен вывод с задержкой ${delay}мс`);

        logText();
    }
}

toggleBtn.addEventListener('click', toggleOutput);

delayInput.addEventListener('input', () => {
    if (validateDelay(delayInput.value)) {
        errorElement.style.display = 'none';
    }
});

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
});