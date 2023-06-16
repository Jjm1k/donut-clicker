export default class DonutMaker {
    constructor() {
        this.donuts = 0;
        this.clickMultiplier = 1;
        this.autoClickerCount = 0;
        this.autoClickerCost = 100;
    }

    increaseDonuts() {
        this.donuts += this.clickMultiplier;
    }

    purchaseAutoClicker() {
        if (this.donuts >= this.autoClickerCost) {
            this.autoClickerCount++;
            this.donuts -= this.autoClickerCost;
            this.autoClickerCost = Math.round(this.autoClickerCost + this.autoClickerCost * .1);
        }
    }
}