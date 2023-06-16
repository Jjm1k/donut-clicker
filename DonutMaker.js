export default class DonutMaker {
    constructor() {
        this.donuts = 0;
        this.clickMultiplier = 1;
    }

    // Method to increase the donut count
    increaseDonuts() {
        this.donuts += this.clickMultiplier;
    }
}