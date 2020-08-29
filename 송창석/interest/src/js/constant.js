const CLASS_NAME = {
    WRAP: "interest_wrap",
    TITLE: "title",
    INTEREST: "interest",
    LIST: "list_interest",
    WRITE: "write_interest",
    ITEM: "item_interest",
    ERASE: "item_erase",
}

const PLACE_HOLDER = "관심사 입력"

const SET_ELEMENT = (root) => {
    return {
        interest: root.querySelector(".interest"),
        write: root.querySelector(".write_interest"),
        list: root.querySelector(".list_interest"),
        items: []
    }
}

export { CLASS_NAME, PLACE_HOLDER, SET_ELEMENT }