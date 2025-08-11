document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.btn');
    const answerDiv = document.querySelector('.style-answer');

    button.addEventListener('click', async () => {
        const userId = document.getElementById('user-id').value;
        const title = document.getElementById('title').value;
        const bodyText = document.getElementById('txt').value;

        answerDiv.textContent = 'Отправка данных...';

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: userId,
                    title: title,
                    body: bodyText
                })
            });

            if (!response.ok) {
                throw new Error(`Ошибка сервера: ${response.status}`);
            }

            const data = await response.json();
            answerDiv.textContent = JSON.stringify(data, null, 2);

        } catch (error) {
            answerDiv.textContent = `Ошибка: ${error.message}`;
        }
    });
});
