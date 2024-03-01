// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
    // Your code goes here...
    let sumDeposits;
    let sumWihdrawals;
    let currentbalance;
    let wrongBalance = [];
    for (let item of array) {
        sumDeposits = 0;
        sumWihdrawals = 0;
        currentbalance = 0;
        if (item.deposits) {
            for (let deposit of item.deposits) {
                sumDeposits += deposit;
            }
        }
        if (item.withdrawals) {
            for (let withdrawal of item.withdrawals) {
                sumWihdrawals += withdrawal;
            }
        }
        currentbalance = sumDeposits - sumWihdrawals;
        if (currentbalance !== item.balance) {
            wrongBalance.push(item);
        }
    }
    return wrongBalance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
