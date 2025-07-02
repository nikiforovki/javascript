// 1
const btn1 = document.getElementById("myBtn1");
console.log('Элемент:', btn1);

btn1.addEventListener('click', () => {
    if (btn1.style.fontSize === '20px') {
        btn1.style.fontSize = '';
    } else {
        btn1.style.fontSize = '20px';
    }
});

// 2

const btn2 = document.getElementById("myBtn2");
btn2.addEventListener('mouseover', () => {
    btn2.style.padding = '30px';
})

btn2.addEventListener('mouseout', () => {
    btn2.style.padding = '';
})

// 3
const input = document.getElementById('input');

input.addEventListener('keyup', (event) => {
    console.log(`Нажата клавиша: ${event.key}`);
});

// 4

document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Отправка формы:', e.target)
})

// 5

const themeButton = document.getElementById('theme');
themeButton.addEventListener('click', () => {
    const body = document.body;
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    } else {
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }
});

