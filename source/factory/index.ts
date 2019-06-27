import { Bmw } from "./bmw";

class BmwFactory {
    public static create(type: string) {
        if (type === "X5") {
            return new Bmw(type, 108000, 300);
        }
        if (type === "X6") {
            return new Bmw(type, 111000, 320);
        }
    }
}

export default BmwFactory;
