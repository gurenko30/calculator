let symbols = ['C', '←', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.', 'MS', 'MR', 'M+', 'M-', 'MRC'];

// Создаем контейнер
const container = document.querySelector('.buttons');

symbols.map((value) => {
    // Создаем элемент кнопки
    const el = document.createElement('button');
    // Присваиваем текст кнопки
    el.textContent = value;
    // Добавляем кнопку в контейнер
    container.appendChild(el);

    el.addEventListener('click', () => {
        switch (value) {
            case 'C':
                clearScreen();
                break;
            case '←':
                backspace();
                break;
            case '=':
                calculate();
                break;
            case 'MS':
                memoryStore();
                break;
            case 'MR':
                memoryRecall();
                break;
            case 'M+':
                memoryAdd();
                break;
            case 'M-':
                memorySubtract();
                break;
            case 'MRC':
                memoryReadClear();
                break;
            default:
                appendToDisplay(value);
        }
    });
});

// Создаем переменные display и memory
const display = document.getElementById('display');
let memory = 0;

function appendToDisplay(value) {
    display.value += value;
}

function clearScreen() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function memoryStore() {
    memory = parseFloat(display.value) || 0;
}

function memoryRecall() {
    display.value = memory;
}

function memoryAdd() {
    memory += parseFloat(display.value) || 0;
    display.value = memory;
}

function memorySubtract() {
    memory -= parseFloat(display.value) || 0;
    display.value = memory;
}

function memoryReadClear() {
    display.value = memory;
}
