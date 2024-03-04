fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const AnoushehAnsari = data.crew.find(
      (crew) => crew.name === "Anousheh Ansari"
    );

    if (AnoushehAnsari) {
      const main = document.querySelector("main");
      const leftSection = document.createElement("section");
      leftSection.classList.add("left");

      leftSection.innerHTML = `
        <div class="crew-info">
          <div id="numberandname">
          <p class="numbercrew">02</p>
          <span>MEET YOUR CREW</span>
          </div>
          <p id="role">${AnoushehAnsari.role}</p>
          <h2>${AnoushehAnsari.name}</h2>
          <p id="bio">${AnoushehAnsari.bio}</p>
          <a class="slider" href="crew-commander.html"></a>
          <a class="slider" href="crew-specialist.html"></a>
          <a class="slider" href="crew-pilot.html"></a>
          <a class="active" href="crew-engineer.html"></a> 
        </div>
      `;
      const RightSection = document.createElement("section");
      RightSection.classList.add("right");
      RightSection.innerHTML = `
      <img src="${AnoushehAnsari.images.png}" alt="Douglas Hurley">
      `
      main.appendChild(leftSection);
      main.appendChild(RightSection)
    }
  });

