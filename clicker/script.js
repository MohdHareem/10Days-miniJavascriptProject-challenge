const body = document.querySelector("body");

body.addEventListener("click", (e) => {
  const circleElement = document.createElement("div");
  circleElement.classList.add("circle");
  circleElement.textContent = "Hi";

  const colors = [
    "#ff007f",  
    "#00e5ff",  
    "#39ff14",  
    "#ffef00",  
    "#ff6f00",  
    "#b700ff"   
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  circleElement.style.backgroundColor = randomColor;
  circleElement.style.boxShadow = `0 0 25px ${randomColor}, 0 0 55px ${randomColor}`;

  circleElement.style.top = `${e.clientY - 25}px`;
  circleElement.style.left = `${e.clientX - 25}px`;

  body.append(circleElement);

  setTimeout(() => {
    circleElement.remove();
  }, 5000);
});
