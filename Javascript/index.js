function updateCity() {
   let watchelement = document.querySelector(".watch"); 
   let selectedCity = document.querySelector("#time-element").value;
   let time=moment().format("h:mm:ss");
   if (selectedCity==="nairobi") {
     time = moment.tz("Africa/Nairobi").format("h:mm:ss a");
    
   }if (selectedCity==="paris") {
    time=moment.tz("Europe/Paris").format("h:mm:ss a");
    
   } if (selectedCity=="utah") {
    time = moment.tz("America/Denver").format("h:mm:ss a");

    
   }if (selectedCity==="cairo") {

    time = moment.tz("Africa/Cairo").format("h:mm:ss a");
    
   } if (selectedCity==="lagos") {
    time = moment.tz("Africa/Lagos").format("h:mm:ss a");

    
   }
   watchelement.innerHTML=time;
   
}


let selectedElement=document.querySelector("#time-element");
selectedElement.addEventListener("change",updateCity);

setInterval(updateCity, 1000);