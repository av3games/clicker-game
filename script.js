money = 0
mpc = 1
let moneyLock;
moneyLock = true
document.title = `${money} Money | Clicker Game`
document.getElementById("money").innerHTML = `<span style="color:green;">Money: ${money}</span>`;
if (money > 0 && moneyLock == true) {
    setTimeout(() =>   console.log(`Cheated money found, reseting money and disabling money lock. (${money})`), 1000)
  setTimeout(() => money = 0, 1000)
  setTimeout(() => update(), 1000)
} else {
  setTimeout(() => console.log(`No cheated money found, disabling money lock. (${money})`), 1000)
  moneyLock = false;
}

function cornerclicked() {
money = money + mpc
clickValid = true
update();

}
function update() {
document.getElementById("money").innerHTML = `<span style="color:green;">Money: ${money}</span>`;
document.title = `${money} Money | Clicker Game`
}
function loop() {
document.title = `${money} Money | Clicker Game`
  loop();
}
