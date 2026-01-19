document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("open-menu");
  const closeBtn = document.getElementById("close-menu");
  const menu = document.getElementById("side-menu");

  if (openBtn) {
    openBtn.addEventListener("click", () => {
      menu.style.left = "0";
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      menu.style.left = "-260px";
    });
  }
});
