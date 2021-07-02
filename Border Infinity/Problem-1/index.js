const background = () => {
  const randCol = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randCol;
  hex_code.innerHTML = "HEX-Color: " + "#" + randCol;
};

change_color.addEventListener("click", background);
background();
