const connectHtml = (arr, cb) => {
    if(arr != undefined) {
        const list = arr.reduce((acc, cur, idx) => {
            return acc += cb(cur, idx);
        }, "");
    
        return list;
    }
};

const renderHtml = (targetElement, renderItem) => targetElement.innerHTML = renderItem;

export { connectHtml, renderHtml };