import { IColor } from "./interfaces";

export class Color implements IColor {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}
