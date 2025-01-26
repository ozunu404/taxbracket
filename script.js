function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    const annualIncome = income * 12;
    let tax = 0;
    let bracket = '';

    if (annualIncome <= 237100) {
        tax = annualIncome * 0.18;
        bracket = '18%';
    } else if (annualIncome <= 370500) {
        tax = 42678 + (annualIncome - 237100) * 0.26;
        bracket = '26%';
    } else if (annualIncome <= 512800) {
        tax = 77362 + (annualIncome - 370500) * 0.31;
        bracket = '31%';
    } else if (annualIncome <= 673000) {
        tax = 121475 + (annualIncome - 512800) * 0.36;
        bracket = '36%';
    } else if (annualIncome <= 857900) {
        tax = 179147 + (annualIncome - 673000) * 0.39;
        bracket = '39%';
    } else if (annualIncome <= 1817000) {
        tax = 251258 + (annualIncome - 857900) * 0.41;
        bracket = '41%';
    } else {
        tax = 644489 + (annualIncome - 1817000) * 0.45;
        bracket = '45%';
    }

    const monthlyTax = tax / 12;
    const netMonthlyIncome = income - monthlyTax;

    document.getElementById('result').innerText = `Net monthly income: R${netMonthlyIncome.toFixed(2)}\nTax Bracket: ${bracket}`;
}