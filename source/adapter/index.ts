import { Jedi } from "./jedi";
import { Soldier } from "./soldier";

class JediAdapter {
    public jedi: Jedi;

    constructor(jedi: Jedi) {
        this.jedi = jedi;
    }

    public attack(): number {
        return this.jedi.attackWithSaber();
    }
}

export {
    Soldier,
    Jedi,
    JediAdapter,
};
