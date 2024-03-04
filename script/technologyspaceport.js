fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const Spaceport = data.technology.find(
      (tech) => tech.name === "Spaceport"
    );

    if (Spaceport) {
      const Left = document.querySelector(".LeftLeft");
      const Right = document.querySelector(".Right");
      const SpaceportSectionTop = document.createElement("section");
      SpaceportSectionTop.classList.add("top");

      SpaceportSectionTop.innerHTML = `
      <p class="numbertechnology">03</p>
      <span>SPACE LAUNCH 101</span>
      `;
      const SpaceportSectionLeft = document.createElement("section");
      SpaceportSectionLeft.classList.add("left");
      SpaceportSectionLeft.innerHTML = `
      <div id="lefta">
      <a href="technology-vehicle.html"><p>1</p></a>
      <a class="active" href="technology-spaceport.html"><p>2</p></a>
      <a href="technology-capsule.html"><p>3</p></a>
      </div>
      <div id="leftdata">
      <p>THE TERMINOLOGY...</p>
      <h2>${Spaceport.name}</h2>
      <p>${Spaceport.description}</p>
      </div>
      `;
      const SpaceportSectionRight = document.createElement("section");
      SpaceportSectionRight.classList.add("right");

      SpaceportSectionRight.innerHTML = `
      <img src="${Spaceport.images.portrait}" alt="${Spaceport.name}">
      `;
      Left.appendChild(SpaceportSectionTop);
      Left.appendChild(SpaceportSectionLeft);
      Right.appendChild(SpaceportSectionRight);
    }
  });
