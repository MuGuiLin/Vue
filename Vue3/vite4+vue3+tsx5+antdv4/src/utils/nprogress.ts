import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// export * as NProgress from 'nprogress';

/**
 * NProgress是一款前端轻量级的web进度条插件，一般配合全局的axios数据请求，也可以配合router路由守卫使用，来达到实时反馈页面进度的效果。
 * 官网： http://ricostacruz.com/nprogress/
 * github：https://github.com/rstacruz/nprogress
 * 
 * NProgress一般与axios相结合，实时监听axios请求的进度，实现实时反馈进度的效果，增强用户体验。
 */

//全局进度条的配置
NProgress.configure({
    easing: 'ease', // 动画方式
    speed: 600, // 递增进度条的速度
    showSpinner: true, // 是否显示加载ico
    trickleSpeed: 300, // 自动递增间隔
    minimum: 0.3, // 更改启动时使用的最小百分比
    parent: 'body', //指定进度条的父容器 也可以设置为元素id，如 #app
    // parent: '#app' 
});

// NProgress.set(n)	设置进度条的百分比，其中 n 是 0 ~1 之间的数字
// NProgress.inc() 以随机量递增进度条，但永远不会达到 100%

// 打开进度条 （可在axios请求拦截器中调用、也可在router.beforeEach路由前置守卫中调用）
export const start = () => {
    NProgress.start(); // 动态创建进度条DOM
};

// 关闭进度条 （可在axios响应拦截器中调用、也可在router.afterEach路由后置守卫中调用）
export const close = () => {
    NProgress.done(); // 动态删除进度条DOM
};

