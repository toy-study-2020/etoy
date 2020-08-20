const storeItem = (value, index) => {
    return `<li data-idx=${index}>
        <a href="#">
            <div class="circle-img"><img src="${value.imgSrc}" alt="${value.imgAlt}"></div>
            <span>${value.name}</span>
        </a>
    </li>`
}

const store = setElement("#main_store")
const storeUrl = setUrl("mainStore")

fetchJson(storeUrl)
    .then((data) => {
        renderHtml(store.title, data.mainStore.title)
        const itemGroup = setComponent(data.mainStore, "items", storeItem)
        renderHtml(store.list, itemGroup)
    })