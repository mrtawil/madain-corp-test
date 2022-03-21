var ui;
var fillText;

const onBottomPageReach = async () => {
    if (fillText.isLoading) {
        return;
    }

    const newData = await fillText.fetchData();
    ui.drawCards(newData);
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
}

const init = async () => {
    addListeners();

    ui = new UI(document.getElementById('cards-container'));
    fillText = new FillText();

    const newData = await fillText.fetchData();
    ui.drawCards(newData);
}

document.addEventListener('DOMContentLoaded', init);
