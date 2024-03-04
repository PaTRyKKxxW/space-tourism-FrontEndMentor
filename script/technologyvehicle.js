fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const launchVehicle = data.technology.find(
      (tech) => tech.name === "Launch vehicle"
    );

    if (launchVehicle) {
      const Left = document.querySelector(".LeftLeft");
      const Right = document.querySelector(".Right");
      const launchVehicleSectionTop = document.createElement("section");
      launchVehicleSectionTop.classList.add("top");

      launchVehicleSectionTop.innerHTML = `
      <p class="numbertechnology">03</p>
      <span>SPACE LAUNCH 101</span>
      `;
      const launchVehicleSectionLeft = document.createElement("section");
      launchVehicleSectionLeft.classList.add("left");
      launchVehicleSectionLeft.innerHTML = `
      <div id="lefta">
      <a class="active" href="technology-vehicle.html"><p>1</p></a>
      <a href="technology-spaceport.html"><p>2</p></a>
      <a href="technology-capsule.html"><p>3</p></a>
      </div>
      <div id="leftdata">
      <p>THE TERMINOLOGY...</p>
      <h2>${launchVehicle.name}</h2>
      <p>${launchVehicle.description}</p>
      </div>
      `;
      const launchVehicleSectionRight = document.createElement("section");
      launchVehicleSectionRight.classList.add("right");

      launchVehicleSectionRight.innerHTML = `
      <img src="${launchVehicle.images.portrait}" alt="${launchVehicle.name}">
      `;
      Left.appendChild(launchVehicleSectionTop);
      Left.appendChild(launchVehicleSectionLeft);
      Right.appendChild(launchVehicleSectionRight);
    }
  });
