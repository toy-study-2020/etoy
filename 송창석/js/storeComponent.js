const storeItem = (value, index) => {
    return `<li data-idx=${index}>
        <a href="#">
            <div class="circle-img"><img src="${value.imgSrc}" alt="${value.imgAlt}"></div>
            <span>${value.name}</span>
        </a>
    </li>`
}

const storeUrl = setUrl("mainStore")
const store = {
    title: setElement("#main_store", ".title"),
    list: setElement("#main_store", "ul")
}

fetchJson(storeUrl)
    .then((data) => {
        const itemGroup = setComponent(data.mainStore, "items", storeItem)

        renderHtml(store.title, data.mainStore.title)
        renderHtml(store.list, itemGroup)
    })