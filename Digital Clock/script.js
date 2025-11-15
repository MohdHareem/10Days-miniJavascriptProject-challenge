const timeDiv = document.getElementById("time");
const dateDiv = document.getElementById("date")

setInterval(() =>{
let time = new Date();
timeDiv.textContent = time.toLocaleTimeString();

dateDiv.textContent = time.toLocaleDateString("en-In",{
    weekday: "long",
    day:"2-digit",
    month: "long",
    year: "numeric"
})

},1000)