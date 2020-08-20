const chanceItem = (value, index) => {
    return `<li data-idx=${index}>
        <a href="#" class="box_cont">
            <div class="img_area"><img src="${value.imgSrc}" alt="${value.alt}"></div>
            <div class="desc_area">
                <dl>
                    <dt>
                        ${value.originalPrice != value.salePrice ? `<strong>${value.originalPrice}<small>${value.originalPrice}</small></strong>` : `<strong>${value.originalPrice}</strong>`}
                    </dt>
                    <dd>
                        ${value.badge.length > 0 ? `<em class="badge">${value.badge.join("+")}</em>` : ''}
                        ${value.name}
                    </dd>
                </dl>
            </div>
        </a>
    </li>`
}

const chance = setElement("#main_chance")
const chanceUrl = setUrl("mainProducts")

fetchJson(chanceUrl)
    .then((data) => {
        renderHtml(chance.title, data.mainProducts.title)
        const itemGroup = setComponent(data.mainProducts, "items", chanceItem)
        renderHtml(chance.list, itemGroup)
    })