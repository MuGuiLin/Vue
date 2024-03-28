import { nextTick } from 'vue';
import { createI18n, useI18n } from 'vue-i18n';
import zh from './modules/zh';
import en from './modules/en';

// import { verifyJsonPase } from '@/utils';
import { useUserStore, storeToRefs } from '@/store/modules/user';

export const createLang = (lang: string = 'zh') => {
    // const { lang: locale = 'zh' } = verifyJsonPase(localStorage.getItem('__LANG__') as string);

    return createI18n({

        locale: lang || localStorage.getItem('__LANG__') || 'zh', // 默认zh翻译

        legacy: false, // 使用 Composition API 模式，则需要将其设置为false （没有该参数可能会报错）

        messages: {
            zh,
            en
        },

        globalInjection: true, //全局生效$t

        modifiers: {},

    });
};


export function setupLang(app: any) {
    app.config.globalProperties.useI18n = useI18n;

    const { lang } = storeToRefs(useUserStore());
    console.log(lang.value);

    app.use(createLang(lang.value));
};

export default createLang();

// https://vue-i18n.intlify.dev/guide/advanced/lazy.html

/*

支持多元化的一些方法有：除了$tc上面都展示了

    1、$tc(只对 legacy 设置为true的生效，不介意使用)

    2、v - t   自定义指令（i18n自定义的，使用看1.2基本使用）

    3、内置翻译组件（i18n - t） (目前不太推荐使用，比较麻烦)

    4、使用解构 t  使用  i18n

    5、注入全局$t,

*/