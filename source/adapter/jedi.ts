import { IJedi } from "./interfaces";

export class Jedi implements IJedi {
    public level: number;

    constructor(level: number) {
        this.level = level;
    }

    public attackWithSaber(): number {
        return this.level * 100;
    }
}
