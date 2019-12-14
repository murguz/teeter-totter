import MainState from '../store/main.js';
import Config from '../configuration/config.js';

export default class Grid {

    constructor() {
        this.mainState = new MainState();
        this.config = new Config();

        this.canvas = this.mainState.getCanvas();
        this.context = this.mainState.getContext();
    }

    update() {
        this.context.fillStyle = '#221709';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

        const barLength = this.canvas.width - 2 * this.config.getPadding();

        for (let i = 0; i <= 10; i++) {
            let x = barLength / 10 * i + this.config.getPadding();
            this.context.beginPath();
            this.context.moveTo(x, 0);
            this.context.lineTo(x, this.canvas.height);
            this.context.closePath();

            this.context.strokeStyle = "#503716";
            this.context.stroke();
        }
    }
}