fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const titanDestination = data.destinations.find(
      (destination) => destination.name === "Titan"
    );

    if (titanDestination) {
      const main = document.querySelector("main");
      const titanDiv = document.createElement("section");
      titanDiv.classList.add("left");
      titanDiv.innerHTML = `
      <div class="destination-info">
      <p class="numberdestination">01</p>
      <span>PICK YOUR DESTINATION</span>
        </div>
        <img src="${titanDestination.images.webp}" alt="Titan Image">
      `;
      const rightDiv = document.createElement("section");
      rightDiv.classList.add("right");
      rightDiv.innerHTML = `
      <div class = "info">
        <a href="destination-moon.html">MOON</a>
        <a href="destination-mars.html">MARS</a>
        <a href="destination-europa.html">EUROPA</a>
        <a id="active" href="destination-titan.html"><u>TITAN</u></a>
        <h2>${titanDestination.name}</h2>
        <p>${titanDestination.description}</p>
        <hr>
        <div id="DistanceTravelTime">
        <div class="top-info">
        <h3>AVG. DISTANCE:</h3>
        <h3>EST. TRAVEL TIME:</h3>
        </div>
        <div class="bottom-info">
        <h4>${titanDestination.distance}</h4>
        <h4>${titanDestination.travel}</h4>
        </div>
        </div>
      </div>
        `;
      main.appendChild(titanDiv);
      main.appendChild(rightDiv);
    } else {
      console.log("Destiny 'Titan' not found in the data.");
    }
  })
  .catch((error) => console.log("Błąd pobierania danych:", error));
