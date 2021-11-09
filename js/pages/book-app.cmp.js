import { bookService } from '../services/books-service.js';
import bookList from '../cmp/book-list.cmp.js';
import bookFilter from '../cmp/book-filter.cmp.js';
import bookDetails from './book-details.cmp.js';

export default {
    template: `
        <section class="book-app">
        <book-details v-if="selectedBook" :book="selectedBook"  @unselected="unselectedBook"></book-details>    
        <book-filter v-if="!selectedBook" @filtered="setFilter"></book-filter>
        <book-list v-if="!selectedBook" :books="booksToShow" @selected="selectBook"></book-list>    
    </section>
    `,
    data() {
        return {
            books: null,
            selectedBook: null,
            filterBy: null,
        };
    },
    created() {
        this.loadBooks();
    },
    methods: {
        loadBooks() {
            bookService.query()
                .then(books => this.books = books);
        },
        selectBook(book) {
            this.selectedBook = book;
        },
        unselectedBook() {
            this.selectedBook = null;
        },
        setFilter(filterBy) {
            this.filterBy = filterBy;
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            const searchStr = this.filterBy.title.toLowerCase();
            const booksToShow = this.books.filter(book => {
                return (
                    book.title.toLowerCase().includes(searchStr) &&
                    book.listPrice.amount >= this.filterBy.fromPrice &&
                    book.listPrice.amount <= this.filterBy.toPrice
                )
            });
            return booksToShow;
        }
    },
    components: {
        bookList,
        bookDetails,
        bookFilter
    }
};