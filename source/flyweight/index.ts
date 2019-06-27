import { Color } from "./color";

class ColorFactory {
    public colors: {
        [name: string]: Color;
    };

    constructor(name: string) {
        this.colors = {};
    }

    public create(name: string) {
        const color = this.colors[name];

        if (color) {
            return color;
        }

        this.colors[name] = new Color(name);
        return this.colors[name];
    }
}

export {
    ColorFactory,
};
