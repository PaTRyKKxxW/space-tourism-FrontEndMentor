fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const douglasHurley = data.crew.find(
      (crew) => crew.name === "Douglas Hurley"
    );

    if (douglasHurley) {
      const main = document.querySelector("main");
      const leftSection = document.createElement("section");
      leftSection.classList.add("left");

      leftSection.innerHTML = `
        <div class="crew-info">
          <div id="numberandname">
          <p class="numbercrew">02</p>
          <span>MEET YOUR CREW</span>
          </div>
          <p id="role">${douglasHurley.role}</p>
          <h2>${douglasHurley.name}</h2>
          <p id="bio">${douglasHurley.bio}</p>
          <a class="active" href="crew-commander.html"></a>
          <a class="slider" href="crew-specialist.html"></a>
          <a class="slider" href="crew-pilot.html"></a>
          <a class="slider" href="crew-engineer.html"></a> 
        </div>
      `;
      const RightSection = document.createElement("section");
      RightSection.classList.add("right");
      RightSection.innerHTML = `
      <img src="${douglasHurley.images.png}" alt="Douglas Hurley">
      `
      main.appendChild(leftSection);
      main.appendChild(RightSection)
    }
  });

