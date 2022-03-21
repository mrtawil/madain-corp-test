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
                <div class="card animate__animated animate__fadeIn" style="animation-duration:${this.getAnimationDuration(i)}s">
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

    getAnimationDuration(index) {
        switch (true) {
            case index <= 3:
                return index * 0.5;
                break;

            case index <= 6:
                return index * 0.25;
                break;

            case index <= 10:
                return index * 0.1;
                break;

            default:
                return index * 0.05;
                break;
        }
    }
}