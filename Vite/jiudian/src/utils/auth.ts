import { BasicKeys } from '@/enums/cacheEnum';

const parseStr = (str: any) => {
    try {
        const obj = JSON.parse(str);
        return ('[object Object]' === Object.prototype.toString.call(obj)) ? obj : false;
    } catch (err) {
        return false;
    }
}

export function getAuthCache<T>(key: any) {
    return parseStr(localStorage.getItem(key));
}

export function setAuthCache(key: any, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
}

export function clearAuthCache() {
    localStorage.clear();
}
