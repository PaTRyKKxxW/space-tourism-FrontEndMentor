fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const VictorGlover = data.crew.find(
      (crew) => crew.name === "Victor Glover"
    );

    if (VictorGlover) {
      const main = document.querySelector("main");
      const leftSection = document.createElement("section");
      leftSection.classList.add("left");

      leftSection.innerHTML = `
        <div class="crew-info">
          <div id="numberandname">
          <p class="numbercrew">02</p>
          <span>MEET YOUR CREW</span>
          </div>
          <p id="role">${VictorGlover.role}</p>
          <h2>${VictorGlover.name}</h2>
          <p id="bio">${VictorGlover.bio}</p>
          <a class="slider" href="crew-commander.html"></a>
          <a class="slider" href="crew-specialist.html"></a>
          <a class="active" href="crew-pilot.html"></a>
          <a class="slider" href="crew-engineer.html"></a> 
        </div>
      `;
      const RightSection = document.createElement("section");
      RightSection.classList.add("right");
      RightSection.innerHTML = `
      <img src="${VictorGlover.images.png}" alt="Douglas Hurley">
      `
      main.appendChild(leftSection);
      main.appendChild(RightSection)
    }
  });

