document.getElementById("login-btn").addEventListener("click",function(event){
    event.preventDefault();
    const mobileNumber = document.getElementById("mobile-number").value ;
const pin = document.getElementById("pin").value ;

const convertedPin = parseInt(pin); 

if(mobileNumber ==="01606019623" && convertedPin === 7462){
    window.location.href = "./main.html";
}else{
    alert("Invalid mobile number or pin. Please try again.");
}


})

