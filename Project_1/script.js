
//Get data/

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

//Validation data
function validateForm(){
if(nameInput.ariaValueMax.length < 1){
    errorNodes[0].innerText = ("Name Cannot be blank");
    nameInput.classList.add("error-border");
}

if(!emailIsValid (email.Value)){
    errorNodes[1].innerText = ("Invalid email address");
    email.classList.add("error-border");
}
}

//Clear error / success messages
function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";

nameInput.classList.remove("error-border");
}


function emailIsValid(email){
    let pattern = 

}
