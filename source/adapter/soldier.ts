import { ISoldier } from "./interfaces";

export class Soldier implements ISoldier {
    public level: number;

    constructor(level: number) {
        this.level = level;
    }

    public attack(): number {
        return this.level * 1;
    }
}
