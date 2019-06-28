export class Ink {
    public type: string

    constructor(type: string) {
        this.type = type;
    }

    public get() {
        return this.type;
    }
}
