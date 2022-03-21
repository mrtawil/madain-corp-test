class UI {
    constructor(cardsContainer) {
        this.cardsContainer = cardsContainer;
    }

    drawCards(data) {
        let htmlOutput = ``;
        for (let i = 0; i < data.length; i++) {
            let row = data[i];

            htmlOutput += `
                <div class="card">
                    <div class="avatar-container">
                        <div class="avatar">${this.getAvatarName(row)}</div>
                    </div>
                    <div class="info-container">
                        <div class="name">${this.getRowFullName(row)}</div>
                        <div class="category-container">
                            <span class="category">Category 1</span>
                        </div>
                    </div>
                </div>
            `;
        }

        this.cardsContainer.innerHTML = htmlOutput;
    }

    getRowFullName(row) {
        return row.fname + ' ' + row.lname;
    }

    getAvatarName(row) {
        return row.fname[0] + row.lname[0];
    }
}