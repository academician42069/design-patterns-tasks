import { IClonable } from "./interfaces/IClonable";
import { ISheep } from "./interfaces/ISheep";

class Sheep implements IClonable<Sheep>, ISheep {

    public name: string;
    public weight: number;

    constructor(name: string, weight: number) {
        this.name = name;
        this.weight = weight;
    }

    public clone(): Sheep {
        return new Sheep(this.name, this.weight);
    }
}

export default Sheep;
