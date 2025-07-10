let fetchData=async()=>{
    let url='http://localhost:3000/DrData'
    let resp=await fetch(url,{method:"GET"})
    let data=await resp.json()
    console.log(data)
let show=document.querySelector("#showData")
data.map((e)=>{
    show.innerHTML+=`
    <tr>
        <td>${e.Name}</td>
        <td>${e.Specialization}</td>  
        <td>${e.Experiance}</td>
        <td>${e.Date}</td>
        <td>${e.Time}</td>
        <td>${e.Number}</td>
        <td onclick="Del('${e.id}')"><button style="background-color: red;">Delete</button></td>
        <td onclick="formOpen('${e.id}')"><button style="background-color: green;">Update</button></td>
    </tr>`
})
}
let Del=(id)=>{
let url=`http://localhost:3000/DrData/${id}`
fetch(url,{method:"DELETE"})
}
let Ins=()=>{
    let name=document.querySelector("#name").value
    let specialization=document.querySelector("#dept").value
    let experiance=document.querySelector("#exp").value
    let date=document.querySelector("#date").value
    let time=document.querySelector("#time").value
    let mobile=document.querySelector("#mbl").value

    let url=`http://localhost:3000/DrData`

    fetch(url,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            Name:name,
            Specialization:specialization,
            Experiance:experiance,
            Date:date,
            Time:time,
            Number:mobile
        })
    })
    location.href="finaldata.html"
    return false
}
let formOpen=async(id)=>{
    let url=`http://localhost:3000/DrData/${id}`
    let resp=await fetch(url,{method:"GET"})
    let data=await resp.json()
    let formData=`
    <form>
    <label for="">Doctor Name</label>
        <br>
        <input id="upname" type="text" name="name" value="${data.Name}" placeholder="Enter Doctor Name" required>
        <br>
        <label for="">Specialization</label>
        <br>
        <select id="updept">
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Surgen">Surgen</option>
          <option value="Dentist">Dentist</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Gynecologist">Gynecologist</option>
          <option value="Other">Other</option>
        </select>
        <br>
        <label for="">Experience</label>
        <br>
        <input id="upexp" type="number" value="${data.Experiance}" placeholder="Experience in Years" required>
        <br>
        <label for="">Appointment Date and Time</label>
        <br><br>
        <input id="update" type="date" value="${data.Date}" placeholder="Enter Appointment Date" required>
        <input id="uptime" type="time" value="${data.Time}" placeholder="Enter Time" required>
        <br><br>
        <label for="">Mobile Number</label>
        <br>
        <input id="upmbl" type="number" value="${data.Number}" placeholder="Enter Your number" required>
        <br><br>
        <input type="submit" value="Update now" onclick="return updateData('${data.id}')">
        </form>`
         document.querySelector("#formShow").innerHTML=formData
}
let updateData=(id)=>{
    let name=document.querySelector("#upname").value
    let specialization=document.querySelector("#updept").value
    let experiance=document.querySelector("#upexp").value
    let date=document.querySelector("#update").value
    let time=document.querySelector("#uptime").value
    let mobile=document.querySelector("#upmbl").value

    let url=`http://localhost:3000/DrData/${id}`
    fetch(url,{
        method:"PUT",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            Name:name,
            Specialization:specialization,
            Experiance:experiance,
            Date:date,
            Time:time,
            Number:mobile
        })
    })
    location.href="finaldata.html"
    return false 
}