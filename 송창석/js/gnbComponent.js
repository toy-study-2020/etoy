const gnbItem = (value, index) => {
    return `<li data-idx=${index}><a href="${value.url}">${value.name}</a></li>`
}

const gnbUrl = setUrl("menu")
const gnb = {
    main: setElement("#gnb", ".main_list"),
    side: setElement("#gnb", ".side_list")
}

fetchJson(gnbUrl)
    .then((data) => {
        const itemMain = setComponent(data, "mainMenu", gnbItem)
        renderHtml(gnb.main, itemMain)

        const itemSide = setComponent(data, "sideMenu", gnbItem)
        renderHtml(gnb.side, itemSide)
    })