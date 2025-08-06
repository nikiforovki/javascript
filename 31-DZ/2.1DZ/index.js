const form = document.getElementById('expense-form');
const list = document.getElementById('expenses-list');



function getExpenses() {
    return JSON.parse(localStorage.getItem('expenses')) || [];

}

function saveExpenses(expenses) {
    localStorage.setItem('expenses', JSON.stringify(expenses));
}


function renderExpenses() {
    const expenses = getExpenses();
    list.innerHTML = expenses.map((expenses, i) => `
    <div class="expense">
        <h3>${expenses.description}</h3>
        <p>${expenses.amount} руб. • ${expenses.date}</p>
        <button onclick="deleteExpense(${i})">Удалить</button>
        </div>
    `).join('');
}



window.deleteExpense = function(index) {
    const expenses = getExpenses().filter((_, i) => i !== index);
    saveExpenses(expenses);
    renderExpenses();
};


form.onsubmit = e => {
    e.preventDefault();
    const expense = {
        description: document.getElementById('description').value,
        amount: parseFloat(document.getElementById('amount').value),
        date: document.getElementById('date').value
    };
    saveExpenses([...getExpenses(), expense]);
    form.reset();
    renderExpenses();
};


renderExpenses();