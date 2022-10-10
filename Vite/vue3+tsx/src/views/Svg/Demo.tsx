import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'SvgDemo',
    props: {

    },
    setup(props, ctx) {
        console.log(props);
        let num = ref(888);
        
        return () => {
            console.log(this);
            return <h2>{{ num }}</h2>
        }
    },
});