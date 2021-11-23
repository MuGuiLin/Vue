import { ref } from 'vue';
import axios from 'axios';

export default function (url: string) {
    const loading = ref(true);
    const result = ref(null);
    const error = ref(null);

    axios.get(url).then(res => {
        result.value = res.data;

    }).catch(err => {
        error.value = err;

    }).finally((_: any) => {
        loading.value = false;

    });

    return { result, loading, error };
}