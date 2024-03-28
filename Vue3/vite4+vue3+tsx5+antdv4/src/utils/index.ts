import type { App, Plugin, ComponentPublicInstance, ComponentOptions } from 'vue'

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