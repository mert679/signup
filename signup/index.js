const username =  document.querySelector(".username")
const email =  document.querySelector(".email")
const password =  document.querySelector(".password")
const fullname =  document.querySelector(".fullname")
const btn = document.querySelector(".upbtn")
btn.addEventListener("click",(e)=>{
    e.preventDefault()
    if (username.value == ""){
        alert("Please enter username.")
    
    }
    if (email.value == ""){
        alert("Please enter email.")
    
    }
    if (password.value == ""){
        alert("You have to fill in the password section and also ")
       
    }
    if (fullname.value == ""){
        alert("You have to fill in the FullName section")
       
    }
    if (password.value.length > "8"){
        alert(" you have to enter max 8 character ")
       
    }
    
})

