money = 0
// Sets the money per click and money amount.
mpc = 1
// Locks the money amount to 0.
let moneyLock;
moneyLock = true
// Sets the title to the money amount for startup.
document.title = `${money} Money | Clicker Game`
// Sets the money graphic to the money amount.
document.getElementById("money").innerHTML = `<span style="color:green;">Money: ${money}</span>`;
// Startup money anti money cheat.
if (money > 0 && moneyLock == true) {
    setTimeout(() =>   console.log(`Cheated money found, reseting money and disabling money lock. (${money})`), 1000)
  setTimeout(() => money = 0, 1000)
  setTimeout(() => update(), 1000)
} else {
  setTimeout(() => console.log(`No cheated money found, disabling money lock. (${money})`), 1000)
  moneyLock = false;
}
// Button click function for the clicker.
function cornerclicked() {
money = money + mpc
clickValid = true
update();

}
// Text and title update function.
function update() {
document.getElementById("money").innerHTML = `<span style="color:green;">Money: ${money}</span>`;
document.title = `${money} Money | Clicker Game`
}
// Extra loop function, ignore this.
function loop() {
document.title = `${money} Money | Clicker Game`
  loop();
}
