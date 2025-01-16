const btn = document.querySelector("#btn");
const colorDigit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const outputTxt = document.querySelector("#output-txt");
const box = document.querySelector("main");
btn.addEventListener("click", function () {
  let colorCode = "";
  for (let i = 0; i < 6; i++) {
    colorCode += colorDigit[Math.floor(Math.random() * 16)];
  }
  const fullColorCode = `#${colorCode}`;
  outputTxt.textContent = fullColorCode;
  box.style.backgroundColor = fullColorCode;
});
