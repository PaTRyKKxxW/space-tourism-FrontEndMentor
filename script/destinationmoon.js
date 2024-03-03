// Pobierz dane z pliku data.json
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // Znajdź destynację "Moon"
    const moonDestination = data.destinations.find(
      (destination) => destination.name === "Moon"
    );

    if (moonDestination) {
      // Utwórz elementy HTML z danymi
      const main = document.querySelector("main");
      const moonDiv = document.createElement("section");
      moonDiv.classList.add("left");
      moonDiv.innerHTML = `
      <div class="destination-info">
      <p class="numberdestination">01</p>
      <span>PICK YOUR DESTINATION</span>
        </div>
        <img src="${moonDestination.images.webp}" alt="Moon Image">
      `;
      const rightDiv = document.createElement("section");
      rightDiv.classList.add("right");
      rightDiv.innerHTML = `
      <div class = "info">
        <a id="active" href="destination-moon.html"><u>MOON</u></a>
        <a href="destination-mars.html">MARS</a>
        <a href="destination-europa.html">EUROPA</a>
        <a href="destination-titan.html">TITAN</a>
        <h2>${moonDestination.name}</h2>
        <p>${moonDestination.description}</p>
        <p>Distance: ${moonDestination.distance}</p>
        <p>Travel time: ${moonDestination.travel}</p>
      </div>
        `;
      // Dodaj stworzony element do sekcji main w pliku HTML
      main.appendChild(moonDiv);
      main.appendChild(rightDiv);
    } else {
      console.log("Destiny 'Moon' not found in the data.");
    }
  })
  .catch((error) => console.log("Błąd pobierania danych:", error));
