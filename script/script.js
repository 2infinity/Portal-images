//Variables 
const timeStamp = document.getElementById("timeStamp");

//Time Function
function timeywimey(){
    const now = new Date();
    let hour = now.getHours();
    hour = hour%12;
    hour = hour.toString().padStart(2, "0");
    const mid = hour>=12?"PM":"AM";
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const timeString = `${hour}:${minutes}:${seconds} ${mid}`;
    timeStamp.textContent = timeString;
}
setInterval(timeywimey,1000);
// End of Time

