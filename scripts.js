document.addEventListener("DOMContentLoaded", function() {
    const expenseForm = document.getElementById("expenseForm");
    const expenseList = document.getElementById("expenseList");

    expenseForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const description = document.getElementById("description").value;
        const amount = document.getElementById("amount").value;

        addExpense(description, amount);
        expenseForm.reset();
    });

    function addExpense(description, amount) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "add_expense.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onload = function() {
            if (xhr.status === 200) {
                loadExpenses();
            }
        };
        xhr.send(`description=${description}&amount=${amount}`);
    }

    function loadExpenses() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "get_expenses.php", true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                expenseList.innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    }

    loadExpenses();
});
