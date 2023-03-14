import { MyElement } from "./MyElement.js";

export class ElementBuilder {
    /**
     * @returns {MyElement}
     */
    static createElement() {
        return new MyElement();
    }
}
