import { IBmw, modelName } from "./interfaces/";

export class Bmw implements IBmw {
    public model: modelName;
    public price: number;
    public maxSpeed: number;

    constructor(model: modelName, price: number, maxSpeed: number) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}
