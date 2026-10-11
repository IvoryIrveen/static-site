// Shows the visitor's local time, so a served page visibly runs its script.
const clock = document.querySelector("[data-clock]");
if (clock) {
  const tick = () => { clock.textContent = new Date().toLocaleTimeString(); };
  tick();
  setInterval(tick, 1000);
}
