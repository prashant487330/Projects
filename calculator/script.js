let store=""
let display=document.querySelector("#screen")
let cal=(value)=>{
   store=store+value
   display.innerHTML=store
}

let res=()=>{
    store=eval(store).toString()
    display.innerHTML=store
}

let ac=()=>{
    store=""
    display.innerHTML=store
}

let del=()=>{
    store=store.slice(0,-1)
    display.innerHTML=store
}