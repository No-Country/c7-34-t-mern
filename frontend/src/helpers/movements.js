
export const handleMovements = (movements) => {
    const expenses = movements.filter(mov => mov.balance_type === "expense");
    const incomes = movements.filter(mov => mov.balance_type === "income");
    
    let expenses_sum = 0;
    expenses.map(expense => expenses_sum += expense.amount);

    let incomes_sum = 0;
    incomes.map(income => incomes_sum += income.amount);

    const balance = incomes_sum - expenses_sum;

    return { expenses, incomes, balance }
}

