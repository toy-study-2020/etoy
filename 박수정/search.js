// Search TODO
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const recommendKeywordWrap = document.querySelector('.recommend-keyword');

function handleSubmit(e) {
    e.preventDefault()
    searchInput.value = '';
}

function resetKeywords() {
    recommendKeywordWrap.innerHTML = '';
}

function loadToKeywords(enteredData) {
    const filteredKeyword = keyword.filter(data => {
        return data.includes(enteredData);
    });

    filteredKeyword.forEach(function(item) {
        recommendKeywordWrap.insertAdjacentHTML('beforeend', `<li><a href="#">${item}</a></li>`);
    });
}

function handleInput() {
    const value = this.value;

    resetKeywords();
    if (value.length) loadToKeywords(value);
}

function init() {
    searchForm.addEventListener('submit', handleSubmit)
    searchInput.addEventListener('input', handleInput)
}

init();
