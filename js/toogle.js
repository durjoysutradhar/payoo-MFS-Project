document.getElementById("add-money-box").addEventListener("click",function(){
    document.getElementById("add-money-id").style.display = "block";
    document.getElementById("cashout-id").style.display = "none";
})

document.getElementById("cashout-box").addEventListener("click",function(){
    document.getElementById("add-money-id").style.display = "none";
    document.getElementById("cashout-id").style.display = "block";
})