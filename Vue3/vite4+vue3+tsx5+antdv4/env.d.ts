/// <reference types="vite/client" />
/// <reference types="ant-design-vue/typings/global.d.ts" />

// 解决在在router中页面组件导入报错 component: () => import('@/views/xxxx/Index.vue'),
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module '*.module.less' {
    const style: { readonly [key: string]: string }
    export default style
}
