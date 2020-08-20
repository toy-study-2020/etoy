const bestItem = (value, index) => {
    return `<li data-idx=${index}>
        <a href="#" class="box_cont best_cont">
            <label class="discount">
                <div class="rate">${value.labels.typeDiscountRate}</div>
                <div class="fee">${value.labels.typeDiscountFee}</div>
            </label>
            <div class="img_area"><img src="${value.imgSrc}" alt="${value.alt}"></div>
            <div class="desc_area">
                <dl>
                    <dt>${value.name}</dt>
                    <dd>${value.description}</dd>
                </dl>
                <div class="price">
                ${value.originalPrice != value.salePrice ? `<span class="origin">${value.originalPrice}</span><strong class="now">${value.salePrice}</strong>` : `<strong class="now">${value.originalPrice}</strong>`}
                </div>
            </div>
        </a>
    </li>`
}

const best = setElement("#main_best")
const bestUrl = setUrl("mainBest")

fetchJson(bestUrl)
    .then((data) => {
        renderHtml(best.title, data.mainBest.title)
        const itemGroup = setComponent(data.mainBest, "items", bestItem)
        renderHtml(best.list, itemGroup)
    })