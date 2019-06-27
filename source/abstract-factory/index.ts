import { B1 } from "./b1";
import { IDroid } from "./interfaces/";
import { Rx24 } from "./rx24";

function droidProducer(kind: string): () => IDroid {
    if (kind === "battle") {
        return battleDroidFactory;
    }

    return pilotDroidFactory;
}

function battleDroidFactory(): IDroid {
    return new B1();
}

function pilotDroidFactory(): IDroid {
    return new Rx24();
}

export default droidProducer;
