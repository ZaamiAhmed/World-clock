let selectedElement = document.querySelector("#time-element");

const citySelectedTimezone={
  "America/Denver": "Utah",
  "Africa/Cairo":"Cairo",
  "Europe/Paris":"Paris",
  "Africa/Mogadishu":"Mogadishu",
  "Africa/Lagos":"Lagos",
  // "Africa/Nairobi": "Nairobi",
  "Asia/Kolkata": "New Delhi",
  "Europe/Lisbon":"Lisbon",
 

}
// I used the object above to mapp the city time zones because some timezones donot match the
// expected city names given.



function updateCity() {
  let watchelement = document.querySelector(".watch");
  let selectedTimezone = document.querySelector("#time-element").value;
  let cityelement = document.querySelector("#cities");

if (!selectedTimezone || selectedTimezone==="Current") {
  selectedTimezone=moment.tz.guess();
  
}
let cityName=citySelectedTimezone[selectedTimezone] ||selectedTimezone.split("/")[1];


    // Format time and date using Moment.js
  let time = moment.tz(selectedTimezone).format("h:mm:ss a");
  let cityDate = moment.tz(selectedTimezone).format("ddd Do MMMM");
 let year = moment.tz(selectedTimezone).format("YYYY");
  watchelement.innerHTML = time;


// user interface.
  cityelement.innerHTML = `
      <div>
      <h2 class="city">${cityName}</h2>
      <p class="date">${cityDate}</p>
      </div>
      <span class="year">${year}</span>

  
   `;
}
// Event listener for timezone selection
selectedElement.addEventListener("change", updateCity);

setInterval(updateCity, 1000);
