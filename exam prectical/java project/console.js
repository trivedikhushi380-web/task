let budget = 10000;
let expenses = [
    {
        title: "Grocery",
        amount: 2000
    },

    {
        title: "Electricity",
        amount: 1500
    },

    {
        title: "Loan",
        amount: 1000
    },

    {
        title: "Shopping",
        amount: 3000
    }

];

displayExpenses();
updateSummary();

function addBudget() {

    let input =
        document.getElementById("budgetInput");

    let value =
        Number(input.value);


    if (value <= 0 || isNaN(value)) {

        alert("Please enter a valid budget.");

        return;
    }


    budget = value;


    input.value = "";


    updateSummary();
}

function addExpense() {

    let title =
        document.getElementById("expenseTitle")
            .value
            .trim();


    let amount =
        Number(
            document.getElementById("expenseAmount")
                .value
        );


    if (title === "") {

        alert("Please enter expense title.");

        return;
    }


    if (amount <= 0 || isNaN(amount)) {

        alert("Please enter a valid amount.");

        return;
    }


    expenses.push({

        title: title,

        amount: amount

    });

    document.getElementById("expenseTitle")
        .value = "";

    document.getElementById("expenseAmount")
        .value = "";


    displayExpenses();

    updateSummary();
}

function displayExpenses() {

    let table =
        document.getElementById("expenseTable");


    table.innerHTML = "";


    expenses.forEach(
        function(expense, index) {


            let row =
                document.createElement("tr");


            row.innerHTML = `

                <td>
                    ${expense.title}
                </td>

                <td>
                    ${expense.amount.toFixed(2)}
                </td>

                <td>

                    <button
                        class="remove-btn"
                        onclick="removeExpense(${index})"
                    >
                        Remove
                    </button>

                </td>

            `;


            table.appendChild(row);

        }
    );

}

function removeExpense(index) {

    expenses.splice(index, 1);


    displayExpenses();

    updateSummary();
}

function updateSummary() {

    let total = 0;


    expenses.forEach(
        function(expense) {

            total += Number(expense.amount);

        }
    );


    let left =
        budget - total;


    document.getElementById("totalBudget")
        .textContent =
        budget.toFixed(2);


    document.getElementById("totalExpenses")
        .textContent =
        total.toFixed(2);


    document.getElementById("budgetLeft")
        .textContent =
        left.toFixed(2);
}

function resetAll() {

    let confirmReset =
        confirm(
            "Are you sure you want to reset everything?"
        );


    if (!confirmReset) {

        return;
    }


    budget = 0;
    expenses = [];

    displayExpenses();
    updateSummary();
}
