const init = async () => {
    const ui = new UI(document.getElementById('cards-container'));
    const fillText = new FillText();

    const newData = await fillText.fetchData();
    ui.drawCards(newData);
}

document.addEventListener('DOMContentLoaded', init);