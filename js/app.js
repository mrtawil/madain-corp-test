var ui;
var fillText;

const onCategoryClick = async (index) => {
    if (!fillText) return;

    fillText.toggleCategorySelect(index);
    ui.drawCategories(fillText.categories);

    fillText.resetData();
    ui.resetCards();
    ui.drawCards(await fillText.fetchData());
}

const onBottomPageReach = async () => {
    if (fillText.isLoading) return;
    ui.drawCards(await fillText.fetchData());
}

const onPageSizeSelectChange = (event) => {
    if (!fillText) return;
    fillText.setPageSize(event.target.value);
}

const addListeners = () => {
    document.addEventListener('scroll', function (event) {
        let documentHeight = document.body.scrollHeight;
        let currentScroll = window.scrollY + window.innerHeight;
        let modifier = 50;
        if (currentScroll + modifier > documentHeight) {
            onBottomPageReach();
        }
    });

    document.getElementById('page-size-select').addEventListener('change', onPageSizeSelectChange);
}

const init = async () => {
    addListeners();

    ui = new UI(document.getElementById('categories-container'), document.getElementById('cards-container'));
    fillText = new FillText();

    ui.drawCategories(fillText.categories);
    ui.drawCards(await fillText.fetchData());
}

document.addEventListener('DOMContentLoaded', init);
