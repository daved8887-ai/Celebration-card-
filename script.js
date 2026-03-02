const fireworksLayer = document.getElementById("fireworks-layer");
const button = document.getElementById("celebrate-btn");
const card = document.getElementById("card");

const modeToggle = document.getElementById("modeToggle");
const soundToggle = document.getElementById("soundToggle");
const downloadBtn = document.getElementById("downloadBtn");
const langSelect = document.getElementById("langSelect");

const music = document.getElementById("bgMusic");

/* 🎆 Fireworks */
function fireworkBurst() {
  for (let i = 0; i < 12; i++) {
    const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", 200);
    c.setAttribute("cy", 300);
    c.setAttribute("r", 0);
    c.setAttribute("fill", "none");
    c.setAttribute("stroke", "#fff");
    c.setAttribute("stroke-width", "2");
    c.classList.add("firework");
    fireworksLayer.appendChild(c);
    setTimeout(() => c.remove(), 1600);
  }
}

button.onclick = fireworkBurst;

/* 🌙 Dark Mode */
modeToggle.onclick = () => {
  document.body.classList.toggle("dark");
};

/* 🎵 Sound */
soundToggle.onclick = () => {
  music.paused ? music.play() : music.pause();
};

/* ⬇️ Download Card */
downloadBtn.onclick = () => {
  html2canvas(document.getElementById("capture")).then(canvas => {
    const link = document.createElement("a");
    link.download = "birthday-card.png";
    link.href = canvas.toDataURL();
    link.click();
  });
};

/* 🌍 Multi-language */
const translations = {
  en: {
    title: "Happy Birthday",
    message: "May your day be filled with joy ✨"
  },
  am: {
    title: "መልካም ልደት",
    message: "ቀንሽ በደስታ ይሙላ ✨"
  }
};

langSelect.onchange = () => {
  const lang = langSelect.value;
  document.getElementById("titleText").textContent = translations[lang].title;
  document.getElementById("msgText").textContent = translations[lang].message;
};
