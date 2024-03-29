import { ref, watchEffect, getCurrentInstance } from 'vue';
type Theme = 'light' | 'dark';
const STORE_KEY = '__hteme__';

const theme = ref<Theme>(localStorage.getItem(STORE_KEY) as Theme || 'dark');

// 监听theme变量值变化
watchEffect(() => {
    // document.documentElement.dataset.theme = theme.value;
    document.documentElement.setAttribute('data-theme', theme.value);
    localStorage.setItem(STORE_KEY, theme.value);
});

export function useTheme() {
    return {
        theme
    }
};