const registerButton = document.querySelector("#register-button")

const removeValue = (e) => {
    document.querySelector(`#${e}`).value = "";
}

const requiredInput = (element) => {
   if(document.querySelector(`#${element}-input`).value.trim().length == 0){
        document.querySelector(`#${element}-error`).innerHTML = "Zehmet olmasa melumatlari doldurun"
        document.querySelector(`#${element}-input`).style.borderColor = "red"
    }else{
        document.querySelector(`#${element}-error`).innerHTML = ``
        // document.querySelector(`#${element}-input`).value = "";
        document.querySelector(`#${element}-input`).style.borderColor = ""
    }
};

document.querySelector("#password-input-1").addEventListener("keyup",(e)=>{
    if(e.target.value.length<8){
        document.querySelector("#password-1-error").innerHTML = "Sifre 8 simvoldan uzun olmalidir"
        document.querySelector("#password-input-1").style.outlineColor = "red"
    }else{
        document.querySelector("#password-1-error").innerHTML = ""
        document.querySelector("#password-input-1").style.outlineColor = ""
    }
})
document.querySelector("#password-input-2").addEventListener("keyup",(e)=>{
    if(e.target.value.length<8){
        document.querySelector("#password-2-error").innerHTML = "Sifre 8 simvoldan uzun olmalidir"
        document.querySelector("#password-input-2").style.outlineColor = "red"
    }else{
        document.querySelector("#password-2-error").innerHTML = ""
        document.querySelector("#password-input-2").style.outlineColor = ""
    }
})

registerButton.addEventListener("click",()=>{
    requiredInput("name")
    requiredInput("surname")
    requiredInput("email")

    if(document.querySelector("#password-input-1").value.length==0){
        document.querySelector("#password-1-error").innerHTML = "Sifreni daxil edin"
        document.querySelector("#password-input-1").style.borderColor = "red"
    }else{
        document.querySelector("#password-1-error").innerHTML = ""
        document.querySelector("#password-input-1").style.borderColor = ""
    }
    if(document.querySelector("#password-input-2").value.length==0){
        document.querySelector("#password-2-error").innerHTML = "Sifreni daxil edin"
        document.querySelector("#password-input-2").style.borderColor = "red"
    }else{
        document.querySelector("#password-2-error").innerHTML = ""
        document.querySelector("#password-input-2").style.borderColor = ""
    }    
    if(document.querySelector("#password-input-1").value!==document.querySelector("#password-input-2").value){
        document.querySelector("#password-match-error").innerHTML = "Sifreler uygun deyil"
        document.querySelector("#password-input-1").style.borderColor = "red"
        document.querySelector("#password-input-2").style.borderColor = "red"
    }else{
        document.querySelector("#password-match-error").innerHTML = ""
        document.querySelector("#password-input-1").style.borderColor = ""
        document.querySelector("#password-input-2").style.borderColor = ""
    }
    if(document.querySelector("#name-input").value.length !==0 && document.querySelector("#surname-input").value.length !==0 && document.querySelector("#email-input").value.length !==0 && document.querySelector("#password-input-1").value.length !==0 && document.querySelector("#password-input-2").value.length !==0 && document.querySelector("#password-input-1").value==document.querySelector("#password-input-2").value){
        removeValue("name-input");
        removeValue("surname-input");
        removeValue("email-input");
        removeValue("password-input-1")
        removeValue("password-input-2")
    }
})


document.querySelector("#show-1").onclick = 
function Toggle(){
    inputPass1 = document.querySelector("#password-input-1")
    if(inputPass1.type === "password"){
        inputPass1.type = "text"
        document.querySelector("#show-1").innerHTML = `Hide`
    }else{
        inputPass1.type = "password"
        document.querySelector("#show-1").innerHTML = `Show`
    }
}


document.querySelector("#show-2").onclick = 
function Toggle(){
    inputPass2 = document.querySelector("#password-input-2")
    if(inputPass2.type === "password"){
        inputPass2.type = "text"
        document.querySelector("#show-2").innerHTML = `Hide`
    }else{
        inputPass2.type = "password"
        document.querySelector("#show-2").innerHTML = `Show`
    }
}