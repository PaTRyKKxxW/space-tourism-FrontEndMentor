fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const europaDestination = data.destinations.find(
      (destination) => destination.name === "Europa"
    );

    if (europaDestination) {
      const main = document.querySelector("main");
      const europaDiv = document.createElement("section");
      europaDiv.classList.add("left");
      europaDiv.innerHTML = `
      <div class="destination-info">
      <p class="numberdestination">01</p>
      <span>PICK YOUR DESTINATION</span>
        </div>
        <img src="${europaDestination.images.webp}" alt="Europa Image">
      `;
      const rightDiv = document.createElement("section");
      rightDiv.classList.add("right");
      rightDiv.innerHTML = `
      <div class = "info">
        <a href="destination-moon.html">MOON</a>
        <a href="destination-mars.html">MARS</a>
        <a id="active" href="destination-europa.html"><u>EUROPA</u></a>
        <a href="destination-titan.html">TITAN</a>
        <h2>${europaDestination.name}</h2>
        <p>${europaDestination.description}</p>
        <hr>
        <div id="DistanceTravelTime">
        <div class="top-info">
        <h3>AVG. DISTANCE:</h3>
        <h3>EST. TRAVEL TIME:</h3>
        </div>
        <div class="bottom-info">
        <h4>${europaDestination.distance}</h4>
        <h4>${europaDestination.travel}</h4>
        </div>
        </div>
      </div>
        `;
      main.appendChild(europaDiv);
      main.appendChild(rightDiv);
    } else {
      console.log("Destiny 'Europa' not found in the data.");
    }
  })
  .catch((error) => console.log("Błąd pobierania danych:", error));
