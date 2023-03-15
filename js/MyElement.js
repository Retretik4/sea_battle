export class MyElement {
    _tagName = "div";
    _classNames = [];
    _idName;
    _cssText;

    /**
     * @returns {string}
     */
    get tagName() {
        return this._tagName;
    }

    /**
     * @returns {string[]}
     */
    get classNames() {
        return this._classNames;
    }

    /**
     * @returns {string}
     */
    get idName() {
        return this._idName;
    }

    /**
     * @returns {string}
     */
    get cssText() {
        return this._cssText;
    }

    /**
     * @param {string} value
     * @returns {MyElement}
     */
    setTagName(value) {
        this._tagName = value;
        return this;
    }

    /**
     * @param {string} value
     * @returns {MyElement}
     */
    setClassName(value) {
        this._classNames.push(value);
        return this;
    }

    /**
     * @param {string} value
     * @returns {MyElement}
     */
    setIdName(value) {
        this._idName = value;
        return this;
    }

    /**
     * @param {string} value
     * @returns {MyElement}
     */
    setCssText(value) {
        this._cssText = value;
        return this;
    }

    /**
     * @returns {HTMLElement}
     */
    build() {
        const element = document.createElement(this.tagName);
        this.idName && (element.id = this.idName);
        this.cssText && (element.style.cssText = this.cssText);
        this.classNames.forEach(className => element.classList.add(className));
        return element;
    }
}
