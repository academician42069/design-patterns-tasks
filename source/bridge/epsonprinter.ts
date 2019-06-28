import { Ink } from "./ink";
import { Printer } from "./printer";

export class EpsonPrinter extends Printer {
    constructor(ink: Ink) {
        super(ink);
    }

    public print(): string {
        return "Printer: Epson, Ink: " + this.ink.get();
    }
}
