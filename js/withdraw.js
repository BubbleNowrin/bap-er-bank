// step-1 add eventlistener to deposit button

document.getElementById('btn-withdraw').addEventListener('click', function () {

    //step-2 get the input value
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //step-3 update the withdraw value
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //step-4 add the sum
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //step-5 get the balance field
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceString = balanceTotal.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    //step-6 update the current balance
    const currentBalance = previousBalance - newWithdrawAmount;
    balanceTotal.innerText = currentBalance;

    //step-7 clear the deposit field
    withdrawField.value = '';

})