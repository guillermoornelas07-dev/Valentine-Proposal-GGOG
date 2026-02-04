const yesBtn = document.getElementById("yesBtn");
const noBtn  = document.getElementById("noBtn");
const msg    = document.getElementById("msg");

const noPhrases = [
  "Are you sure? 🥺",
  "Really sure??",
  "What if I asked nicely?",
  "I made this site though 😭",
  "Ok but… pretty please?",
  "Last chance 😶‍🌫️"
];

let noCount = 0;

yesBtn.addEventListener("click", () => {
  msg.textContent = "YAY!! 💞 I can’t wait. (Screenshot this 😄)";
  confettiBurst();
});

noBtn.addEventListener("click", () => {
  noCount++;
  msg.textContent = noPhrases[Math.min(noCount - 1, noPhrases.length - 1)];
  // Make "Yes" button grow a little each time 😈
  const scale = 1 + noCount * 0.12;
  yesBtn.style.transform = `scale(${scale})`;
  // Make "No" button scoot around slightly
  noBtn.style.transform = `translate(${rand(-18,18)}px, ${rand(-10,10)}px)`;
});

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Tiny confetti without libraries
function confettiBurst() {
  for (let i = 0; i < 60; i++) {
    const s = document.createElement("span");
    s.textContent = ["💖","✨","💘","💝","💕"][i % 5];
    s.style.position = "fixed";
    s.style.left = `${Math.random() * 100}vw`;
    s.style.top = `-10px`;
    s.style.fontSize = `${12 + Math.random() * 18}px`;
    s.style.transition = "transform 1.2s ease, opacity 1.2s ease";
    s.style.zIndex = 9999;
    document.body.appendChild(s);

    requestAnimationFrame(() => {
      s.style.transform = `translateY(${110 + Math.random() * 80}vh) rotate(${rand(-180,180)}deg)`;
      s.style.opacity = "0";
    });

    setTimeout(() => s.remove(), 1400);
  }
}
