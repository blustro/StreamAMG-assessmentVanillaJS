const smallScreen = window.matchMedia("(max-width: 992px)");
const fighter1 = document.querySelector(".fighter1");
const fighter2 = document.querySelector(".fighter2");
const fighterBg1 = document.querySelector(".fighter-bg1");
const fighterBg2 = document.querySelector(".fighter-bg2");
const sidebar = document.getElementById("menuItems");
const overlay = document.getElementById("overlay");

fighter1.addEventListener("animationend", function () {
  onScroll("fighter1");
});

fighter2.addEventListener("animationend", function () {
  onScroll("fighter2");
});

if (smallScreen.matches) {
  fighterBg1.addEventListener("animationend", function () {
    onScroll("fighter-bg1");
  });

  fighterBg2.addEventListener("animationend", function () {
    onScroll("fighter-bg2");
  });
}

window.addEventListener("resize", () => {
  onScroll("fighter1");
  onScroll("fighter2");

  if (smallScreen.matches) {
    onScroll("fighter-bg1");
    onScroll("fighter-bg2");
  }
});

const onScroll = (fighter) => {
  fighter = document.querySelector(`.${fighter}`);

  if (
    fighter.classList.contains("fighter2") ||
    fighter.classList.contains("fighter-bg2")
  ) {
    fighter.style.left = "auto";
  }
  const getPos = fighter.getBoundingClientRect();
  window.addEventListener("scroll", function () {
    let s = window.scrollY,
      d = document.body.clientHeight,
      c = window.innerHeight;

    scrollPercent = s / (d - c);

    if (
      fighter.classList.contains("fighter1") ||
      fighter.classList.contains("fighter-bg1")
    ) {
      let position = (-scrollPercent * d) / 5 + getPos.left;
      fighter.style.left = `${position}px`;
    }
    if (
      fighter.classList.contains("fighter2") ||
      fighter.classList.contains("fighter-bg2")
    ) {
      let position = (scrollPercent * d) / 5 + getPos.left;
      fighter.style.left = `${position}px`;
    }
  });
};

document.getElementById("toggleMenu").addEventListener("click", function () {
  sidebar.classList.add("open");
  overlay.classList.add("open");
});

document.getElementById("close").addEventListener("click", function () {
  sidebar.classList.remove("open");
  overlay.classList.remove("open");
});
