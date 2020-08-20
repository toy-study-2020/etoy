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

const event = setElement("#main_event")
const eventUrl = setUrl("mainEvent")

fetchJson(eventUrl)
    .then((data) => {
        renderHtml(event.title, data.mainEvent.title)
        const itemGroup = setComponent(data.mainEvent, "items", eventItem)
        renderHtml(event.list, itemGroup)
    })