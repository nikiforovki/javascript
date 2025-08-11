document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.btn:not(.load-posts-btn)');
    const loadPostsBtn = document.querySelector('.load-posts-btn');
    const answerDiv = document.querySelector('.style-answer');
    const postsContainer = document.querySelector('.posts-container');

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

    loadPostsBtn.addEventListener('click', async () => {
        postsContainer.innerHTML = '<p>Загрузка постов...</p>';

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');

            if (!response.ok) {
                throw new Error(`Ошибка сервера: ${response.status}`);
            }

            const posts = await response.json();
            renderPosts(posts);

        } catch (error) {
            postsContainer.innerHTML = `<p class="error">${error.message}</p>`;
        }
    });

    function renderPosts(posts) {
        const limitedPosts = posts.slice(0, 10);

        postsContainer.innerHTML = '';

        limitedPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post-card';
            postElement.innerHTML = `
                <p class="post-title">${post.title}</p>
                <p class="post-body">${post.body}</p>
                <p class="post-user">User ID: ${post.userId} | Post ID: ${post.id}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    }
});