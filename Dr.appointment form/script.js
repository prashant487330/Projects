
// signup section

let signup=()=>{
    let Name=document.querySelector("#name").value.trim()
    let Num=document.querySelector("#num").value.trim()
    let Mail=document.querySelector("#mail").value.trim()
    let Pass=document.querySelector("#pass").value.trim()
    let Cpass=document.querySelector("#cpass").value.trim()

    let errname=document.querySelector("#errname")
    let errnum=document.querySelector("#errnum")
    let errmail=document.querySelector("#errmail")
    let errpass=document.querySelector("#errpass")
    let errcpass=document.querySelector("#errcpass")

    errname.innerHTML=""
    errnum.innerHTML=""
    errmail.innerHTML=""
    errpass.innerHTML=""
    errcpass.innerHTML=""

    if(Name==""){
        errname.innerHTML="Please Enter Patient Name"
        return false
    }
    else if(Num==""){
        errnum.innerHTML="Please Enter Number"
        return false
    }
    else if(Num.length!=10){
        errnum.innerHTML="Please Enter 10 Digits"
        return false
    }
    else if(isNaN(Num)){
         errnum.innerHTML="Please Enter Digits only"
        return false
    }
    else if(Mail==""){
        errmail.innerHTML="Please Enter Email ID"
        return false
    }
    else if(!(Mail.includes("@")&&(Mail.includes(".com")))){
        errmail.innerHTML="Please Enter Correct Mail Id"
        return false
    }
    else if(Pass==""){
        errpass.innerHTML="Please Enter Your Password"
        return false
    }
    else if(!(Pass.match(/[!@#$%&*]/) &&
            Pass.match(/[a-z]/) &&
            Pass.match(/[0-9]/) &&
            Pass.match(/[A-Z]/))){
        errpass.innerHTML="Please Write Strong Password"
        return false
    }
    else if(Cpass==""){
        errcpass.innerHTML="Please Confirm Password"
        return false
    }
    else if(Pass!=Cpass){
        errcpass.innerHTML="Please Enter Same Password"
        document.querySelector("#cpass").value=""
        document.querySelector("#cpass").focus()
        return false 
    }
    // local storage
    localStorage.setItem("name",Name)
    localStorage.setItem("number",Num)
    localStorage.setItem("email",Mail)
    localStorage.setItem("password",Pass)
    

    location.href="login.html"
    return false
}

// login section

let login=()=>{
    let Uname=document.querySelector("#uname").value
    let Upass=document.querySelector("#upass").value

    let localname=localStorage.getItem("name")
    let localpass=localStorage.getItem("password")

    if(Uname==localname && Upass==localpass){
        location.href="home.html"
        return false
    }
    else{
        alert("Please Enter Correct Information")
    }
    return false
}
