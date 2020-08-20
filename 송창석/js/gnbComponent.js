const gnbItem = (value, index) => {
    return `<li data-idx=${index}><a href="${value.url}">${value.name}</a></li>`
}

const gnb = gnbElement("#gnb")
const gnbUrl = setUrl("menu")

fetchJson(gnbUrl)
    .then((data) => {
        const itemMain = setComponent(data, "mainMenu", gnbItem)
        const itemSide = setComponent(data, "sideMenu", gnbItem)
        renderHtml(gnb.main, itemMain)
        renderHtml(gnb.side, itemSide)
    })