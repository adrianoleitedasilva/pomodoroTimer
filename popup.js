const timeElement = document.getElementById("time")
const currentTime = new Date().toISOString()
timeElement.textContent = `The time is: ${currentTime}`

chrome.action.setBadgeText({
  text: "Time", 
}, ()=>{
  console.log("Finalizado!")
})