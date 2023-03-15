import { MyElement } from "./MyElement.js";

export class ElementBuilder {
    /**
     * @returns {MyElement}
     */
    createElement() {
        return new MyElement();
    }
}
