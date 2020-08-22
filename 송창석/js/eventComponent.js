const eventItem = (value, index) => {
    return `<li data-idx=${index}>
        <a href="#" class="event_cont">
            <div class="img_area"><img src="${value.imgSrc}" alt="${value.alt}"></div>
            <div class="desc_area">
                <dl>
                    <dt>${value.name}</dt>
                    <dd>${value.description}</dd>
                </dl>
            </div>
        </a>
    </li>`
}

const eventUrl = setUrl("mainEvent")
const event = {
    title: setElement("#main_event", ".title"),
    list: setElement("#main_event", "ul"),
}


fetchJson(eventUrl)
    .then((data) => {
        const itemGroup = setComponent(data.mainEvent, "items", eventItem)

        renderHtml(event.title, data.mainEvent.title)
        renderHtml(event.list, itemGroup)
    })