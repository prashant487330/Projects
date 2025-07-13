let Value=Math.floor(1+Math.random()*6)

let show=document.querySelector("#one")
show.style.display="none"

let show1=document.querySelector("#two")
show1.style.display="none"

let show2=document.querySelector("#three")
show2.style.display="none"

let show3=document.querySelector("#four")
show3.style.display="none"

let show4=document.querySelector("#five")
show4.style.display="none"

let show5=document.querySelector("#six")
show5.style.display="none"
   
if(Value==1){
    let show=document.querySelector("#one")
    show.style.display="block"
}
else if(Value==2){
    let show1=document.querySelector("#two")
    show1.style.display="block"
}
else if(Value==3){
    let show2=document.querySelector("#three")
    show2.style.display="block"
}
else if(Value==4){
    let show3=document.querySelector("#four")
    show3.style.display="block"
}
else if(Value==5){
    let show4=document.querySelector("#five")
    show4.style.display="block"
}
else if(Value==6){
    let show5=document.querySelector("#six")
    show5.style.display="block"
}

