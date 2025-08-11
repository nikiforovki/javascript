document.addEventListener('DOMContentLoaded', () => {
    const createPostBtn = document.querySelector('.btn:not(.update-user-btn):not(.load-posts-btn)');
    const loadPostsBtn = document.querySelector('.load-posts-btn');
    const updateUserBtn = document.querySelector('.update-user-btn');
    const answerDiv = document.querySelector('.style-answer');
    const postsContainer = document.querySelector('.posts-container');
    const userProfileDiv = document.querySelector('.user-profile');

    function handleError(error) {
        if (error instanceof TypeError && error.message === 'Failed to fetch') {
            return 'Ошибка сети: Проверьте подключение к интернету.';
        }
        return error.message;
    }

    createPostBtn.addEventListener('click', async () => {
        const userId = document.getElementById('user-id').value;
        const title = document.getElementById('title').value;
        const bodyText = document.getElementById('txt').value;

        if (!userId || !title || !bodyText) {
            answerDiv.textContent = 'Ошибка: заполните все поля';
            return;
        }

        answerDiv.textContent = 'Отправка данных...';
        answerDiv.classList.add('loading-text');

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
            answerDiv.classList.remove('loading-text');

        } catch (error) {
            answerDiv.textContent = `Ошибка: ${handleError(error)}`;
            answerDiv.classList.remove('loading-text');
        }
    });

    loadPostsBtn.addEventListener('click', async () => {
        postsContainer.innerHTML = '<p class="loading-text">Загрузка постов...</p>';

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');

            if (!response.ok) {
                throw new Error(`Ошибка сервера: ${response.status}`);
            }

            const posts = await response.json();
            renderPosts(posts);

        } catch (error) {
            postsContainer.innerHTML = `<p class="error">Ошибка: ${handleError(error)}</p>`;
        }
    });

    updateUserBtn.addEventListener('click', async () => {
        const userId = document.getElementById('update-user-id').value;
        const name = document.getElementById('update-name').value;
        const email = document.getElementById('update-email').value;
        const city = document.getElementById('update-city').value;

        if (!userId || !name || !email) {
            answerDiv.textContent = 'Ошибка: ID, имя и email обязательны';
            return;
        }

        answerDiv.textContent = 'Обновление пользователя...';
        answerDiv.classList.add('loading-text');

        try {
            const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            if (!userResponse.ok) {
                throw new Error(`Ошибка при получении пользователя: ${userResponse.status}`);
            }

            const userData = await userResponse.json();

            const updatedUser = {
                ...userData,
                name: name,
                email: email,
                address: {
                    ...(userData.address || {}),
                    city: city
                }
            };

            const updateResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedUser)
            });

            if (!updateResponse.ok) {
                throw new Error(`Ошибка обновления: ${updateResponse.status}`);
            }

            const updatedData = await updateResponse.json();

            displayUserProfile(updatedData);
            answerDiv.textContent = 'Пользователь успешно обновлен!';
            answerDiv.classList.remove('loading-text');

        } catch (error) {
            answerDiv.textContent = `Ошибка: ${handleError(error)}`;
            answerDiv.classList.remove('loading-text');
        }
    });

    function renderPosts(posts) {
        const limitedPosts = posts.slice(0, 10);
        postsContainer.innerHTML = '';

        limitedPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post-card';
            postElement.dataset.postId = post.id;
            postElement.innerHTML = `
                <p class="post-title">${post.title}</p>
                <p class="post-body">${post.body}</p>
                <p class="post-user">User ID: ${post.userId} | Post ID: ${post.id}</p>
                <button class="btn delete-btn" data-id="${post.id}">Удалить</button>
            `;
            postsContainer.appendChild(postElement);
        });

        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(btn => {
            btn.addEventListener('click', deletePost);
        });
    }

    async function deletePost(event) {
        const button = event.target;
        const postId = button.dataset.id;
        const postCard = button.closest('.post-card');

        try {
            const originalText = button.textContent;
            button.textContent = 'Удаление...';
            button.disabled = true;

            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error(`Ошибка сервера: ${response.status}`);
            }

            postCard.style.opacity = '0';
            setTimeout(() => {
                postCard.remove();
            }, 500);

        } catch (error) {
            button.innerHTML = `<span class="error">Ошибка: ${handleError(error)}</span>`;
            button.disabled = false;
            setTimeout(() => {
                button.textContent = 'Удалить';
                button.disabled = false;
            }, 3000);
        }
    }

    function displayUserProfile(user) {
        userProfileDiv.innerHTML = `
            <p><span>ID:</span> ${user.id}</p>
            <p><span>Имя:</span> ${user.name}</p>
            <p><span>Email:</span> ${user.email}</p>
            <p><span>Телефон:</span> ${user.phone || 'не указан'}</p>
            <p><span>Город:</span> ${user.address?.city || 'не указан'}</p>
        `;
    }
});