export default {
    props: ['book'],
    template: `
        <div class="book-preview">
            <h1>{{book.title.toUpperCase()}}</h1>
            <p>Price : {{currency}}</p>
            <img :src="book.thumbnail" alt="">
        </div>
    `,
    computed: {

        currency() {
            if (this.book.listPrice.currencyCode === 'USD') {
                return this.book.listPrice.amount + '$';

            } else if (this.book.listPrice.currencyCode === 'EUR') {
                return this.book.listPrice.amount + '€';
            } else {
                return this.book.listPrice.amount + '₪'
            }
        },
    }
}