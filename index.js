// Get elements from the HTML page using DOM
const containerElem = document.querySelector(".js-container");

// a for loop to generate the color container divs
for (let i = 0; i < 30; i++) {
  const colorContainerElem = document.createElement("div");
  colorContainerElem.classList.add("color-container");
  // append the color container element to the js-container
  containerElem.appendChild(colorContainerElem);
}

// A function to create random color codes
const randomColor = () => {
  const colorDigits = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let i = 0; i < colorCodeLength; i++) {
    let randomNumber = Math.floor(Math.random() * colorDigits.length);
    let randomDigit = colorDigits.substring(randomNumber, randomNumber + 1);
    colorCode += randomDigit;
  }
  return colorCode;
};

// Get all the containers and update them using the generated color codes
const colorContainerElems = document.querySelectorAll(".color-container");

// A function to generate the random colors
const generateColors = ()=>{
    // Iterate over all the containers and add a random background color
    colorContainerElems.forEach((colorContainer)=>{
        const newColorCode = randomColor();
        colorContainer.style.backgroundColor = `#${newColorCode}`;
        colorContainer.innerText = `#${newColorCode}`;
    });
};

// Call the fucntion to see action
generateColors();