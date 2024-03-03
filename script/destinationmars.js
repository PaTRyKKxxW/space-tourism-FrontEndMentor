fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const marsDestination = data.destinations.find(
      (destination) => destination.name === "Mars"
    );

    if (marsDestination) {
      const main = document.querySelector("main");
      const marsDiv = document.createElement("section");
      marsDiv.classList.add("left");
      marsDiv.innerHTML = `
      <div class="destination-info">
      <p class="numberdestination">01</p>
      <span>PICK YOUR DESTINATION</span>
        </div>
        <img src="${marsDestination.images.webp}" alt="Mars Image">
      `;
      const rightDiv = document.createElement("section");
      rightDiv.classList.add("right");
      rightDiv.innerHTML = `
      <div class = "info">
        <a href="destination-moon.html">MOON</a>
        <a id="active" href="destination-mars.html"><u>MARS</u></a>
        <a href="destination-europa.html">EUROPA</a>
        <a href="destination-titan.html">TITAN</a>
        <h2>${marsDestination.name}</h2>
        <p>${marsDestination.description}</p>
        <hr>
        <div id="DistanceTravelTime">
        <div class="top-info">
        <h3>AVG. DISTANCE:</h3>
        <h3>EST. TRAVEL TIME:</h3>
        </div>
        <div class="bottom-info">
        <h4>${marsDestination.distance}</h4>
        <h4>${marsDestination.travel}</h4>
        </div>
        </div>
      </div>
        `;
      main.appendChild(marsDiv);
      main.appendChild(rightDiv);
    } else {
      console.log("Destiny 'Mars' not found in the data.");
    }
  })
  .catch((error) => console.log("Błąd pobierania danych:", error));
