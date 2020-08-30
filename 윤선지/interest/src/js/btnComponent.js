const btnComponent = (btnList, interestTarget) => {
    const {BTN, DELETE} = interestTarget;
    
    return btnList.reduce((html, idx) => {
        return html += `
            <div class="${BTN}" data-id=${idx.id}>
                <div>${idx.item}</div>
                <button type="button" class="${DELETE}" data-id=${idx.id}>X</button>
            </div>
        `
    }, '');
};

export default btnComponent;
