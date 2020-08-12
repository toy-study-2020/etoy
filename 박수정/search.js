// Search TODO
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

function handleSubmit(e) {
    e.preventDefault()
    searchInput.value = '';
}

function handleInput() {
console.log('input')
}

function loadToKeywords() {
    console.log(keyword)
}

function init() {
    loadToKeywords();
    searchForm.addEventListener('submit', handleSubmit)
    searchInput.addEventListener('input', handleInput)

}

init();
