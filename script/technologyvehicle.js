fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const launchVehicle = data.technology.find(
      (tech) => tech.name === "Launch vehicle"
    );

    if (launchVehicle) {
      const main = document.querySelector("main");
      const launchVehicleSectionTop = document.createElement("section");
      launchVehicleSectionTop.classList.add("top");

      launchVehicleSectionTop.innerHTML = `
      <p class="numbertechnology">01</p>
      <span>PICK YOUR DESTINATION</span>
      `;
      const launchVehicleSectionLeft = document.createElement("section");
      launchVehicleSectionLeft.classList.add("left");
      launchVehicleSectionLeft.innerHTML = `
      <div id="lefta">
      <a href="technology-vehicle.html">1</a>
      <a href="technology-spaceport.html">2</a>
      <a href="technology-capsule.html">3</a>
      </div>
      <div id="leftdata">
      <h2>${launchVehicle.name}</h2>
      <p>${launchVehicle.description}</p>
      </div>
      `;
      const launchVehicleSectionRight = document.createElement("section");
      launchVehicleSectionRight.classList.add("right");

      launchVehicleSectionRight.innerHTML = `
      <img src="${launchVehicle.images.portrait}" alt="${launchVehicle.name}">
      `;
      main.appendChild(launchVehicleSectionTop);
      main.appendChild(launchVehicleSectionLeft);
      main.appendChild(launchVehicleSectionRight);
    }
  });
