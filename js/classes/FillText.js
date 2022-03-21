class FillText {
    constructor() {
        this.url = 'https://filltext.com/';
        this.isLoading = false;
        this.data = [];
    }

    async fetchData() {
        try {
            this.isLoading = true;

            const response = await axios.get(`${this.url}/?rows=10&fname={firstName}&lname={lastName}&pretty=true&category=["category1", "category2", "category3", "ali"]`);
            this.data.push(...response.data);

            console.log('data:', this.data);

            this.isLoading = false;
            return response.data;
        } catch (errors) {
            alert(errors);
        }
    }
}