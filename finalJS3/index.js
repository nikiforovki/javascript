const LS_KEY = 'todos';
const container = document.getElementById('box-task');
const input = document.getElementById('input');
const addBtn = document.querySelector('.btn-input');

if (!container) {
    console.error('Элемент #box-task не найден в DOM!');
    throw new Error('Критическая ошибка инициализации');
}

const getTodos = () => JSON.parse(localStorage.getItem(LS_KEY) || '[]');
const saveTodos = (todos) => localStorage.setItem(LS_KEY, JSON.stringify(todos));
const genId = () => Date.now().toString(36) + Math.random().toString(36).slice(2);
const getTaskId = (task) => String(task.id);
const findTask = (tasks, taskId) => tasks.find(t => getTaskId(t) === taskId);

const taskTimers = new Map();

const FILTERS = {
    all: todos => todos,
    completed: todos => todos.filter(t => t.completed),
    incomplete: todos => todos.filter(t => !t.completed)
};
const updateTaskReminder = (taskId, reminderValue) => {
    const tasks = getTodos();
    const task = findTask(tasks, taskId);
    if (task) {
        task.reminder = reminderValue;
        saveTodos(tasks);
        return task;
    }
    return null;
};

const setupTimer = (task) => {
    const id = getTaskId(task);

    if (taskTimers.has(id)) {
        clearTimeout(taskTimers.get(id));
        taskTimers.delete(id);
    }

    if (task.reminder && typeof task.reminder === 'number') {
        const now = Date.now();
        if (task.reminder <= now) {
            if (!task.completed) {
                alert(`Просроченное напоминание: ${task.title}`);
            }
            updateTaskReminder(id, null);
        } else {
            const timeoutId = setTimeout(() => {
                alert(`Напоминание: ${task.title}`);
                if (updateTaskReminder(id, null)) {
                    renderTodos();
                }
                taskTimers.delete(id);
            }, task.reminder - now);

            taskTimers.set(id, timeoutId);
        }
    }
};

const setupAllTimers = () => getTodos().forEach(task => setupTimer(task));
const createTaskElement = (task) => {
    const el = document.createElement('div');
    el.className = 'task';
    el.dataset.id = getTaskId(task);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task__checkbox';
    checkbox.checked = task.completed || false;

    const text = document.createElement('span');
    text.className = 'task__title';
    text.textContent = task.title;
    text.style.textDecoration = task.completed ? 'line-through' : 'none';

    const timerBtn = document.createElement('button');
    timerBtn.className = 'btn-task timer-btn';
    timerBtn.type = 'button';
    timerBtn.textContent = task.reminder ? 'Таймер (установлен)' : 'Таймер';

    const delBtn = document.createElement('button');
    delBtn.className = 'btn-task';
    delBtn.type = 'button';
    delBtn.textContent = 'Удалить';

    el.append(checkbox, text, timerBtn, delBtn);
    setupTimer(task);

    return el;
};

const handleCheckboxChange = (task, checkbox, text) => {
    const tasks = getTodos();
    const taskToUpdate = findTask(tasks, getTaskId(task));

    if (taskToUpdate) {
        taskToUpdate.completed = checkbox.checked;
        text.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
        saveTodos(tasks);
        renderTodos();
        setupTimer(taskToUpdate);
    }
};

const handleTimerClick = (task) => {
    const minutes = prompt('Введите минуты до напоминания (0 для отмену):');
    const minNum = parseInt(minutes, 10);

    if (isNaN(minNum) || minNum < 0) {
        alert('Некорректное значение!');
        return;
    }

    const reminderValue = minNum === 0 ? null : Date.now() + minNum * 60 * 1000;
    const updatedTask = updateTaskReminder(getTaskId(task), reminderValue);

    if (updatedTask) {
        renderTodos();
        setupTimer(updatedTask);
    }
};

const handleDeleteClick = (task) => {
    const tasks = getTodos().filter(t => getTaskId(t) !== getTaskId(task));
    saveTodos(tasks);
    const taskId = getTaskId(task);
    if (taskTimers.has(taskId)) {
        clearTimeout(taskTimers.get(taskId));
        taskTimers.delete(taskId);
    }

    renderTodos();
};

let currentFilter = 'all';

const renderTodos = () => {
    const todos = getTodos();
    const filtered = FILTERS[currentFilter](todos);

    if (!filtered.length) {
        container.innerHTML = '<p class="empty">Нет задач</p>';
        return;
    }

    container.innerHTML = '';
    filtered.forEach(task => {
        const element = createTaskElement(task);
        const checkbox = element.querySelector('.task__checkbox');
        const text = element.querySelector('.task__title');
        const timerBtn = element.querySelector('.timer-btn');
        const delBtn = element.querySelector('.btn-task:not(.timer-btn)');

        checkbox.addEventListener('change', () =>
            handleCheckboxChange(task, checkbox, text));
        timerBtn.addEventListener('click', () => handleTimerClick(task));
        delBtn.addEventListener('click', () => handleDeleteClick(task));

        container.append(element);
    });
};

const addTaskFromInput = () => {
    const value = input.value.trim();
    if (!value) return;

    const newTask = {
        id: genId(),
        title: value,
        completed: false,
        reminder: null
    };

    const updated = [newTask, ...getTodos()];
    saveTodos(updated);
    renderTodos();

    input.value = '';
    input.focus();
};

const fetchTodos = () =>
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.ok ? res.json() : Promise.reject(`HTTP ${res.status}`))
        .then(data => data.slice(0, 5).map(t => ({
            id: String(t.id),
            title: t.title,
            completed: t.completed,
            reminder: null
        })));

const init = () => {
    const cached = getTodos();

    if (cached.length) {
        renderTodos();
    } else {
        fetchTodos()
            .then(todos => {
                saveTodos(todos.length ? todos : []);
                renderTodos();
            })
            .catch(err => {
                console.error(err);
                container.innerHTML = `<p class="error">Ошибка загрузки: ${err}</p>`;
            });
    }

    const filterButtons = document.querySelectorAll('.buttom-btn');
    if (filterButtons.length === 3) {
        ['all', 'completed', 'incomplete'].forEach((filter, index) => {
            filterButtons[index].addEventListener('click', () => {
                currentFilter = filter;
                renderTodos();
            });
        });
    }

    setupAllTimers();
};

addBtn?.addEventListener('click', addTaskFromInput);
input?.addEventListener('keydown', e => {
    if (e.key === 'Enter') addTaskFromInput();
});

init();

