const colors = ["#ffd36e", "#8fd3ff", "#caa6ff"];

for(let i = 0; i < 35; i++){
  const light = document.createElement("div");
  light.className = "light";
  light.style.left = Math.random() * 100 + "vw";
  light.style.background = colors[Math.floor(Math.random() * colors.length)];
  light.style.animationDelay = Math.random() * 10 + "s";
  light.style.width = light.style.height = (6 + Math.random() * 6) + "px";
  document.body.appendChild(light);
}
