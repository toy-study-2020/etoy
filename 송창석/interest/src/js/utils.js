const renderHtml = (targetElement, renderItem, direction) => targetElement.insertAdjacentHTML(direction, renderItem);

const eraseHtml = (targetElement, interest) => {
    if(targetElement != undefined) return interest.removeChild(targetElement);
}

export { renderHtml, eraseHtml };