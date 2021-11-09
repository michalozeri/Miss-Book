import { bookService } from '../services/books-service.js';
import longText from '../cmp/long-txt.cmp.js';
import addReview from '../cmp/add-review.cmp.js'

export default {
    template: `
        <section v-if="book" class="book-details">
            <!-- <button @click="$emit('unselected')" >X</button> -->
            <h3>Book Details:</h3>
            <h1>{{book.title.toUpperCase()}}</h1>
            <div class="flex">
                <div>
                    <p>{{book.subtitle}}</p>
                    <p>Price: <span :class="priceColor">{{currency}}</span></p>
                    <p>Author: <span>{{book.authors[0]}}</span></p>
                    <p>Published At: <span>{{publishedAtTxt}}</span></p>
                    <p>Page Count: <span>{{pageCount}}</span></p>
                    <p v-if="book.listPrice.isOnSale">SALE!</p>
                    <long-text v-bind:txt="book.description"></long-text>
                </div>
            </div>
    <add-review :book="book" @add-review="save"/>
        </section>
        <section v-else class="loader">
            <h2>Loading...</h2>
        </section>
    `,
    data() {
        return {
            book: null,
        };
    },
    created() {
        const { bookId } = this.$route.params;
        bookService.getById(bookId)
            .then(book => {
                this.book = book
                if (!this.review) this.review = []
            });
    },
    methods: {
        save(review) {
            bookService.addReview(this.book.id, review)
                .then(book => this.book = book);
        }
    },

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
        pageCount() {
            if (this.book.pageCount < 100) return this.book.pageCount + ' pages (Light Reading)'
            else if (this.book.pageCount > 200) return this.book.pageCount + ' pages (Decent Reading)'
            else if (this.book.pageCount > 500) return this.book.pageCount + ' pages (Long Reading)'
            else return this.book.pageCount + ' pages'
        },
        publishedAtTxt() {
            let time = new Date();
            let currYear = time.getFullYear();
            if (currYear - this.book.publishedDate > 10) return this.book.publishedDate + ' (Veteran Book)';
            else if (currYear - this.book.publishedDate < 1) return this.book.publishedDate + ' (New!)'
            else return this.book.publishedDate
        },
        priceColor() {
            if (this.book.listPrice.amount > 150) return 'red'
            else if (this.book.listPrice.amount < 20) return 'green'
        }
    },
    components: {
        longText,
        addReview
    }
}