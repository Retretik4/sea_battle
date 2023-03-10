export class DivCreator {

    /**
     * @param {string} className
     * @param {string, null} cssText
     * @returns {HTMLElement}
     */
    create(className, cssText = null) {
        let divCreate = document.createElement('div');
        divCreate.classList.add(className);
        if (cssText !== null) {
            divCreate.style.cssText = cssText
        }
        return divCreate;
    }
}