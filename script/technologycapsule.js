fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const Spacecapsule = data.technology.find(
      (tech) => tech.name === "Space capsule"
    );

    if (Spacecapsule) {
      const Left = document.querySelector(".LeftLeft");
      const Right = document.querySelector(".Right");
      const SpacecapsuleSectionTop = document.createElement("section");
      SpacecapsuleSectionTop.classList.add("top");

      SpacecapsuleSectionTop.innerHTML = `
      <p class="numbertechnology">03</p>
      <span>SPACE LAUNCH 101</span>
      `;
      const SpacecapsuleSectionLeft = document.createElement("section");
      SpacecapsuleSectionLeft.classList.add("left");
      SpacecapsuleSectionLeft.innerHTML = `
      <div id="lefta">
      <a href="technology-vehicle.html"><p>1</p></a>
      <a href="technology-spaceport.html"><p>2</p></a>
      <a class="active" href="technology-capsule.html"><p>3</p></a>
      </div>
      <div id="leftdata">
      <p>THE TERMINOLOGY...</p>
      <h2>${Spacecapsule.name}</h2>
      <p>${Spacecapsule.description}</p>
      </div>
      `;
      const SpacecapsuleSectionRight = document.createElement("section");
      SpacecapsuleSectionRight.classList.add("right");

      SpacecapsuleSectionRight.innerHTML = `
      <img src="${Spacecapsule.images.portrait}" alt="${Spacecapsule.name}">
      `;
      Left.appendChild(SpacecapsuleSectionTop);
      Left.appendChild(SpacecapsuleSectionLeft);
      Right.appendChild(SpacecapsuleSectionRight);
    }
  });
