document.getElementById("btn-calculate").addEventListener("click", function () {
    const incomeAmount = getInputFieldValueById("income-input");
    const foodCostAmount = getInputFieldValueById("food-cost-input");
    const rentCostAmount = getInputFieldValueById("rent-cost-input");
    const clothesCostAmount = getInputFieldValueById("clothes-cost-input");
    if (isNaN((incomeAmount) && (foodCostAmount) && (rentCostAmount) && (clothesCostAmount))) {
        alert("Please put here a valid number");
        return;
    }
    const previousTotalExpenses = getElementValueById("total-expenses");
    const previousBalanceAmount = getElementValueById("balance");
    const newTotalExpenses = previousTotalExpenses + foodCostAmount + rentCostAmount + clothesCostAmount;
    setTextElementValueById("total-expenses", newTotalExpenses);
    const newBalanceAmount = incomeAmount - (previousBalanceAmount + newTotalExpenses);
    setTextElementValueById("balance", newBalanceAmount);
    document.getElementById("btn-save").addEventListener("click", function () {
        const savingPercentage = getInputFieldValueById("saving-percentage-input");
        if (isNaN(savingPercentage)) {
            alert("Please put here a valid number");
            return;
        }
        const previousSavingAmount = getElementValueById("saving-amount");
        const previousRemainingBalance = getElementValueById("remaining-balance");
        const newSavingAmount = previousSavingAmount + (incomeAmount * (savingPercentage / 100));
        setTextElementValueById("saving-amount", newSavingAmount);
        const newRemainingBalance = previousRemainingBalance + (newBalanceAmount - newSavingAmount);
        setTextElementValueById("remaining-balance", newRemainingBalance);
    })
})

