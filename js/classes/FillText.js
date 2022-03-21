class FillText {
    constructor() {
        this.url = 'https://filltext.com/';
        this.rows = 10;
        this.isLoading = false;
        this.data = [];
        this.categories = [
            { name: 'Category 1', selected: true },
            { name: 'Category 2', selected: false },
            { name: 'Category 3', selected: false },
        ];
    }

    getFullUrl() {
        var fullUrl = `${this.url}/?rows=${this.rows}&fname={firstName}&lname={lastName}&pretty=true`;
        if (this.getSelectedCategoriesNames().length > 0) fullUrl += `&category=${JSON.stringify(this.getSelectedCategoriesNames())}`;
        return fullUrl;
    }

    async fetchData() {
        try {
            this.isLoading = true;
            const response = await axios.get(this.getFullUrl());
            this.data.push(...response.data);
            this.isLoading = false;
            return response.data;
        } catch (errors) {
            alert(errors);
        }
    }

    resetData() {
        this.data = [];
    }

    toggleCategorySelect(index) {
        this.categories[index].selected = !this.categories[index].selected;
    }

    getSelectedCategoriesNames() {
        return this.categories.filter((category) => category.selected).map((category) => category.name);
    }
}