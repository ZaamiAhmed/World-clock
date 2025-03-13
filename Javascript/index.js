let selectedElement = document.querySelector("#time-element");

function updateCity() {
  let watchelement = document.querySelector(".watch");
  let selectedTimezone = document.querySelector("#time-element").value;
  let cityelement = document.querySelector("#cities");
  //  let cityDate=moment.tz(timeZone).format("ddd Do MMMM");
  let year = moment().format("YYYY");

  let selectedCity = selectedElement.value
    ? selectedElement.selectedOptions[0].text
    : "Nairobi";
 

  let timeZone = selectedTimezone ? selectedTimezone : moment.tz.guess();
  let time = moment.tz(timeZone).format("h:mm:ss a");
  let cityDate = moment.tz(timeZone).format("ddd Do MMMM");

  watchelement.innerHTML = time;

  cityelement.innerHTML = `
      <div>
      <h2 class="city">${selectedCity}</h2>
      <p class="date">${cityDate}</p>
      </div>
      <span class="year">${year}</span>

  
   `;
}

selectedElement.addEventListener("change", updateCity);

setInterval(updateCity, 1000);
