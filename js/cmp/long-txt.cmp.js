export default {
    props: ['txt'],
    template: `
        <section class="long-text">
            <p @click="isExtend=!isExtend">{{txtForDisplay}}
            <span v-if="!isExtend">...</span>
            </p>
            
</section>
    `,
    created() {
        console.log('this.txt.length', this.txt.length);
        if (this.txt.length < 100) this.isExtend = true
    },
    data() {
        return {
            isExtend: false
        }
    },
    computed: {
        txtForDisplay() {
            if (this.txt.length > 100 && !this.isExtend) return this.txt.substring(0, 100)
            else if (this.isExtend) return this.txt
        }
    }
}