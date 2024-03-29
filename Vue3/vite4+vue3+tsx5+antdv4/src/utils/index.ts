import type { App, Plugin, ComponentPublicInstance, ComponentOptions } from 'vue'
import { ref } from 'vue'

export const getAssetsFile = (url: string): string =>
    new URL(`../assets/${url}`, import.meta.url).href


export function verifyJsonPase(str: string = "{}") {
    try {
        const obj = JSON.parse(str);
        if (Object.prototype.toString.call(obj) === '[object Object]') {
            return obj;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}

export const install = <T extends ComponentPublicInstance>(component: T, alias?: string) => {
    const comp = component as any
    comp.install = (app: App) => {
        app.component(comp.name || comp.displayName, component)
        if (alias) {
            app.config.globalProperties[alias] = component
        }
    }
    return component as T & Plugin
}


export const nowTime = ref<string>('00:00:00');
const into = (n: number) => {
    return Number(n) < 10 ? '0' + n : n;
}
export const getNowTime = () => {
    const now = new Date();
    const YYYY = now.getFullYear();
    const MM = now.getMonth() + 1;
    const DD = now.getDate();
    const hh = now.getHours();
    const mm = now.getMinutes();
    const ss = now.getSeconds();
    const day = now.getDay();
    const week: any = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    nowTime.value = `现在时刻：${into(YYYY)}年 ${into(MM)}月 ${into(DD)}日 ${week[day]} ${into(hh)}：${into(mm)}：${into(ss)}`;
    setTimeout(getNowTime, 1000);
};
