import { defineComponent, computed } from 'vue'

// import buttonProps from './buttonTypes';
// import type { ButtonType } from './buttonTypes';


import style from './style.module.less'

// console.log(buttonProps);

const pre = 'mu_btn'

export default defineComponent({
    name: "MuButton",
    props: {
        type: String
    },
    setup(props, ctx) {
        console.log(props, ctx);

        const isType = (type: string = 'default') => {
            switch (type) {
                case 'primary':
                    return style.mu_btn__primary;

                case 'success':
                    // console.log(999, `${pre}${style}__${type}`);

                    return style.mu_btn__success;

                case 'warning':
                    return style.mu_btn__warning;

                case 'error':
                    return style.mu_btn__error;

                default:
                    return 'default'
                    break;
            }
        };

        const classs = computed(() => {
            const { type } = props;

            const m = isType(type);



            // const sizeClassNameMap = { large: 'lg', small: 'sm', middle: undefined };
            // const sizeFullname = size.value;
            // const sizeCls = sizeFullname ? sizeClassNameMap[sizeFullname] || '' : '';

            return {
                //   [`${pre}`]: true,
                // [`${pre}-${type}`]: type,
                [`${m}`]: type,
                //   [`${pre}-${shape}`]: shape !== 'default' && shape,
                //   [`${pre}-${sizeCls}`]: sizeCls,
                //   [`${pre}-loading`]: innerLoading.value,
                //   [`${pre}-background-ghost`]: ghost && !isUnborderedButtonType(type),
                //   [`${pre}-two-chinese-chars`]: hasTwoCNChar.value && autoInsertSpace.value,
                //   [`${pre}-block`]: block,
                //   [`${pre}-dangerous`]: !!danger,
                //   [`${pre}-rtl`]: direction.value === 'rtl',
            };
        });
        // console.log(666, style.btn, style, classs);

        const buttonProps = {
            // ...attrs,
            // title,
            // disabled,
            class: [
                style.mu_btn,
                classs.value,
                //   attrs.class,
                //   { [`${prefixCls.value}-icon-only`]: children.length === 0 && !!iconType },
            ],
            // onClick: handleClick,
            // onMousedown,
        };


        // http://events.jianshu.io/p/d89fb4755879

        return () => {
            return <button {...buttonProps}>
                {ctx.slots.default ? ctx.slots.default() : '按扭'}
            </button>
        }
    },
})