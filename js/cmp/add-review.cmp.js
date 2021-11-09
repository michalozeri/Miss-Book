import { bookService } from '../services/books-service.js';


export default {
    props: ['book'],
    template: `
      <section>
          <form @submit.prevent="save" >
              <input v-model="review.fullName" type="text" placeholder="Full Name">
              <input v-model="review.rate" type="number" name="" min="1" max="5" id="" placeholder="Rate">
              <input v-model="review.readAt" type="date" placeholder="Date">
              <textarea v-model="review.comment" name="" id="" cols="30" rows="5" placeholder="Add More..."></textarea>
              <button>Save</button>
            </form>
            <div v-if="book.review">
            <h3>review</h3>
                 <ul v-for="rev in book.review">
                     <li>{{rev.fullName}}</li>
                     <li>{{rev.rate}}</li>
                     <li>{{rev.readAt}}</li>
                     <li>{{rev.comment}}</li>
                 </ul>
            </div>
      </section>
    `,
    data() {
        return {

            review: {
                fullName: null,
                rate: null,
                readAt: null,
                comment: '',
            }
        };
    },
    methods: {
        save() {
            this.$emit('add-review', this.review)
        }
    },
}