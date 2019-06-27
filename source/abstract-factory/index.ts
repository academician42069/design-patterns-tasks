import { B1 } from "./classes/b1";
import { Rx24 } from "./classes/rx24";
import { IDroid } from "./interfaces/IDroid";

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
