const connectTag = (arr, cb) => {
    const tag = arr.reduce((acc, cur, idx) => {
        return acc += cb(cur, idx)
    }, "");

    return tag;
}

const resetTag = (interest) => {
    const itemsTag = interest.querySelectorAll(".item_interest");
    for(let i = 0; i < itemsTag.length; i++) {
        interest.removeChild(itemsTag[i]);
    }
}

const renderTag = (targetElement, renderItem, dir) => targetElement.insertAdjacentHTML(dir, renderItem)

export { connectTag, renderTag, resetTag }