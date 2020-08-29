import { INTEREST_CLASS_NAME } from './constants.js';

const btnComponent = btnList => {
    return btnList.reduce((html, idx) => {
        return html += `
            <div class="${INTEREST_CLASS_NAME.BTN}" data-id=${idx.id}>
                <div>${idx.item}</div>
                <button type="button" class="${INTEREST_CLASS_NAME.DELETE}" data-id=${idx.id}>X</button>
            </div>
        `
    }, '');
};

export default btnComponent;
