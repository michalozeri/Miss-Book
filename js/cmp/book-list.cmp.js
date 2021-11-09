import bookPreview from './book-preview.cmp.js';

export default {
    props: ['books'],
    template: `
        <ul class="book-list">
            <li v-for="book in books" :key="book.id" class="book-preview-container" >
                <book-preview :book="book" @click.native="getId(book.id)" />
                <div class="actions">
                <router-link :to="'/book/'+book.id">Details</router-link>
                </div>
            </li>
        </ul>
    `,
    methods: {

        // select(book) {
        //     console.log(book);
        //     this.$emit('selected', book);

        // },
        getId(bookId) {
            console.log('bookId', bookId);
        }
    },
    components: {
        bookPreview
    }
};