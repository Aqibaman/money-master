document.getElementById("btn-calculate").addEventListener("click", function () {
    const incomeAmount = getInputFieldValueById("income-input");
    const foodCostAmount = getInputFieldValueById("food-cost-input");
    const rentCostAmount = getInputFieldValueById("rent-cost-input");
    const clothesCostAmount = getInputFieldValueById("clothes-cost-input");
    if (isNaN((incomeAmount) && (foodCostAmount) && (rentCostAmount) && (clothesCostAmount))) {
        alert("Please put here a valid number");
        return;
    }
    const newTotalExpenses = foodCostAmount + rentCostAmount + clothesCostAmount;
    setTextElementValueById("total-expenses", newTotalExpenses);
    const newBalanceAmount = incomeAmount - newTotalExpenses;
    setTextElementValueById("balance", newBalanceAmount);
    document.getElementById("btn-save").addEventListener("click", function () {
        const savingPercentage = getInputFieldValueById("saving-percentage-input");
        if (isNaN(savingPercentage)) {
            alert("Please put here a valid number");
            return;
        }
        const newSavingAmount = (incomeAmount * (savingPercentage / 100));
        setTextElementValueById("saving-amount", newSavingAmount);
        const newRemainingBalance = (newBalanceAmount - newSavingAmount);
        setTextElementValueById("remaining-balance", newRemainingBalance);
    })
})

