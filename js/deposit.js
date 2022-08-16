// step-1 add eventlistener to deposit button

document.getElementById('btn-deposit').addEventListener('click', function () {

    //step-2 get the input value
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //step-3 update the deposit value
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    //step-4 add the sum
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    //step-5 get the balance field
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceString = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    //step-6 update the current balance
    const currentBalance = previousBalance + newDepositAmount;
    balanceTotal.innerText = currentBalance;

    //step-7 clear the deposit field
    depositField.value = '';

})