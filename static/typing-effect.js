document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".typing-effect");
  const text = el.textContent;
  el.textContent = ""; // очистить перед началом печати

  let index = 0;
  const speed = 100; // скорость печати (мс на символ)

  function typeChar() {
    if (index < text.length) {
      el.textContent += text.charAt(index);
      index++;
      setTimeout(typeChar, speed);
    }
  }

  typeChar();
});
