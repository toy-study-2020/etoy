const connectTag = (arr, cb) => {
    if(arr != undefined) {
        const tag = arr.reduce((acc, cur, idx) => {
            return acc += cb(cur, idx)
        }, "");
    
        return tag;
    }
}

const renderTag = (targetElement, renderItem) => targetElement.innerHTML = renderItem;

export { connectTag, renderTag }