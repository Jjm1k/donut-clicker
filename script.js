// Import the DonutMaker class
import DonutMaker from "./DonutMaker.js";

// Create a new instance of the DonutMaker class
const donutMaker = new DonutMaker();

// Get the elements from the HTML document
const donutCountElement = document.getElementById("donutCount");
const clickButton = document.getElementById("clickButton");

// Function to update the donut count on the screen
function updateDonutCount() {
    donutCountElement.textContent = `Donuts: ${donutMaker.donuts}`;
}

// Add event listener to the click button
clickButton.addEventListener("click", () => {
    donutMaker.increaseDonuts();
    updateDonutCount();
});

// Initial update of the donut count
updateDonutCount();