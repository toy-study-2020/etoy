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

const bestUrl = setUrl("mainBest")
const best = {
    title: setElement("#main_best", ".title"),
    list: setElement("#main_best", "ul")
}

fetchJson(bestUrl)
    .then((data) => {
        const itemGroup = setComponent(data.mainBest, "items", bestItem)

        renderHtml(best.title, data.mainBest.title)
        renderHtml(best.list, itemGroup)
    })