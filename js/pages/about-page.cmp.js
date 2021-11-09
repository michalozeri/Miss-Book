export default {
    template: `
        <section class="about-page app-main">
            <h3 ref="header">About us...</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus illo molestiae est explicabo assumenda consequatur sit incidunt, optio deleniti mollitia soluta unde ea similique labore placeat aspernatur magnam dolorem nam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum aliquam similique dolorem incidunt cupiditate aut quasi. Iste possimus modi sapiente, saepe ut officiis corporis distinctio. Sint, sapiente. Dignissimos, quaerat.</p>
            <button @click="callBus">Call the bus!</button>
        </section>
    `,
    methods: {
        callBus() {
            // eventBus.$emit('puk');
            // eventBus.$emit('puk2');
        }
    },
    created() {
        console.log('Created');
    },
    mounted() {
        console.log('Mounted');
        console.log(this.$refs.header);
    }
};