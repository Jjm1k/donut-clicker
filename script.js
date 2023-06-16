// DonutMaker class imported
import DonutMaker from "./DonutMaker.js";

const donutMaker = new DonutMaker();

const donutCountElement = document.getElementById("donutCount");
const clickButton = document.getElementById("clickButton");
const autoClickButton = document.getElementById("autoClickButton");

// Update Status Functions Start
function updateDonutCount() {
    donutCountElement.textContent = `Donuts: ${donutMaker.donuts}`;
}

// Function to update the auto-clicker button status
function updateAutoClickButton() {
    autoClickButton.textContent = `Purchase Auto-Clicker (Cost: ${donutMaker.autoClickerCost})`;
    if (donutMaker.autoClickerCost < donutMaker.donuts) {
    autoClickButton.removeAttribute("disabled")
    } else {
        autoClickButton.disabled = true;
    }
}

function activateAutoClicker() {
    setInterval(() => {
        donutMaker.increaseDonuts();
        updateDonutCount();
    }, 1000); // Auto-click every 1 second
}
// Update Status Functions End


// Event Listeners For Buttons Start
clickButton.addEventListener("click", () => {
    donutMaker.increaseDonuts();
    updateDonutCount();
    updateAutoClickButton();
});

autoClickButton.addEventListener("click", () => {
    donutMaker.purchaseAutoClicker();
    updateDonutCount();
    updateAutoClickButton();
    activateAutoClicker();
});
// Event Listeners For Buttons End

updateDonutCount();
updateAutoClickButton();
