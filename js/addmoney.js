document.getElementById("add-money-btn").addEventListener("click", function(event){
    event.preventDefault();
    const mainAmount = document.getElementById("main-amount").innerText ;
    const convertedMainAmount = parseFloat(mainAmount);

    const addedAmount = document.getElementById("added-amount").value ;
    const convertedAddedAmount = parseFloat(addedAmount);

    const pin = document.getElementById("pin").value;
    const convertedPin = parseInt(pin);

    if(convertedPin === 7462){
        const newAmount = convertedMainAmount + convertedAddedAmount;
        console.log(newAmount);
        document.getElementById("main-amount").innerText = newAmount;
        alert("Money added successfully!");
    }else{
        alert("Invalid Pin. Please try again.");
    }


})