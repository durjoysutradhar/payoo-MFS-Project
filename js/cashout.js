document.getElementById("cashout-btn").addEventListener("click", function(event){
    event.preventDefault();
    const mainAmount = document.getElementById("main-amount").innerText ;
    const convertedMainAmount = parseFloat(mainAmount);

    const cashoutAmount = document.getElementById("cashout-amount").value ;
    const convertedCashoutAmount = parseFloat(cashoutAmount);

    const pin = document.getElementById("cashout-pin").value;
    const convertedPin = parseInt(pin);

    if(convertedPin === 7462){
        const newAmount = convertedMainAmount - convertedCashoutAmount;
        console.log(newAmount);
        document.getElementById("main-amount").innerText = newAmount;
        alert("Money cashed out successfully!");
    }else{
        alert("Invalid Pin. Please try again.");
    }


})