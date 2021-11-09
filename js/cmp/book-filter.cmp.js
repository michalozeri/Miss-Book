export default {
    template: `
        <div class="book-filter">
        <form @submit.prevent="filter">
                  <label>Search Book</label>
                  <input v-model="filterBy.title" type="text" placeholder="Book Name">
                  <input v-model.number="filterBy.priceFrom" type="number" placeholder="From Price">
                  <input v-model.number="filterBy.priceTo" type="number" placeholder="To Price">
                  <button class="search-btn">Search</button>
            </form>
        </div>
    `,
    data() {
        return {
            filterBy: {
                title: '',
                priceFrom: '',
                priceTo: ''
            }
        };
    },
    methods: {
        filter() {
            this.$emit('filtered', {...this.filterBy });
        }
    }
}