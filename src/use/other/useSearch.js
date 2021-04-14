import { ref } from "vue";

export default function useSearch(func, cleanFunc) {
    const results = ref([]);
    const loading = ref(false);


    const createPromise = async (...args) => {
        loading.value = true;

        try {
            results.value = await func(...args);
        } catch (error) {
            return error;
        }finally{
            loading.value=false;
        }
    }
    const cleanPromise = async (...args) => {
        loading.value = true;

        try {
            await cleanFunc(...args);
        } catch (error) {
            return error;
        }finally{
            loading.value=false;
        }

    }

    return { results, loading, createPromise, cleanPromise }
}