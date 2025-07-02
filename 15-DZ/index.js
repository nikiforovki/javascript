// 1
const h1 = document.getElementById('main-text-h1');
if (h1) {
    h1.textContent = 'Новый текст H1';
}

// 2
const textH1 = document.querySelector('.text-h1');
if (textH1) {
    textH1.style.color = 'green';
    textH1.style.backgroundColor = 'black';
}

// 3
const newP = document.createElement('p');
newP.textContent = 'Я тут';
document.body.appendChild(newP);

// 4
function removeElementById(id) {
    const element = document.getElementById(id);
    if (element) {
        element.remove();
        console.log(`Элемент ${id} успешно удалён`);
    } else {
        console.warn(`Элемент ${id} не найден`);
    }
}
removeElementById('main-text-h3');

// 5
const link = document.getElementById('linkColor');
if (link) {
    console.log('Было:', link.href);
    link.href = 'https://google.com';
    console.log('Стало:', link.href);
} else {
    console.error('Ссылка не найдена');
}

// 6
const newDiv = document.createElement('div');
newDiv.className = 'new-class';
newDiv.textContent = 'Новый элемент с классом';
document.body.appendChild(newDiv);

// 7
const linkColor = document.getElementById('linkColor');
if (linkColor) {
    linkColor.classList.toggle('red');
    console.log('Класс red:', linkColor.classList.contains('red'));
} else {
    console.error('Элемент для переключения класса не найден');
}
