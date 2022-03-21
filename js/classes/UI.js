class UI {
    constructor(categoriesContainer, cardsContainer) {
        this.categoriesContainer = categoriesContainer;
        this.cardsContainer = cardsContainer;
    }

    drawCategories(categories) {
        let htmlOutput = ``;
        for (let i = 0; i < categories.length; i++) {
            let category = categories[i];

            htmlOutput += `
                <span class="category ${category.selected ? 'selected' : ''}" onclick="onCategoryClick('${i}')">${category.name}</span>
            `;
        }

        this.categoriesContainer.innerHTML = htmlOutput;
    }

    drawCards(raws) {
        let htmlOutput = ``;
        for (let i = 0; i < raws.length; i++) {
            let row = raws[i];

            htmlOutput += `
                <div class="card">
                    <div class="avatar-container">
                        <div class="avatar">${this.getAvatarName(row)}</div>
                    </div>
                    <div class="info-container">
                        <div class="name">${this.getRowFullName(row)}</div>
                        <div class="category-container">
                            <span class="category">${row.category}</span>
                        </div>
                    </div>
                </div>
            `;
        }

        this.cardsContainer.innerHTML += htmlOutput;
    }

    resetCards() {
        this.cardsContainer.innerHTML = '';
    }

    getRowFullName(row) {
        return row.fname + ' ' + row.lname;
    }

    getAvatarName(row) {
        return row.fname[0] + row.lname[0];
    }
}