const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expenses');
const storage = window.localStorage;

expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;
    const expense = { date, category, amount };
    addExpenseToStorage(expense);
    displayExpenses();
    expenseForm.reset();
});

function addExpenseToStorage(expense) {
    const expenses = storage.getItem('expenses');
    if (expenses) {
        const expensesArray = JSON.parse(expenses);
        expensesArray.push(expense);
        storage.setItem('expenses', JSON.stringify(expensesArray));
    } else {
        storage.setItem('expenses', JSON.stringify([expense]));
    }
}

function displayExpenses() {
    const expenses = storage.getItem('expenses');
    if (expenses) {
        const expensesArray = JSON.parse(expenses);
        expenseList.innerHTML = '';
        expensesArray.forEach((expense) => {
            const li = document.createElement('li');
            li.textContent = `${expense.date} - ${expense.category} - ${expense.amount}`;
            expenseList.appendChild(li);
        });
    }
}

displayExpenses();