export default (app: any) => {
    app.directive('focus', {
        mounted(el: any) {
            console.log('focus', el)
            el.focus()
            el.style = 'border: 2px solid #08d308'
        },
    })

    // 点击防抖
    app.directive('debounce', {
        mounted(el: any, binding: any) {
            console.log('自定义全局指令 debounce-点击防抖', el, binding)
            let timer: any
            el.addEventListener('click', () => {
                if (timer) {
                    clearTimeout(timer)
                }
                timer = setTimeout(() => {
                    binding.value()
                }, 1000)
            })
        }
    })

    const distance = 200
    const duration = 1000

    const ob = new IntersectionObserver((entries: any) => {
        entries.forEach((entry: any) => {
            if (entry.isIntersecting) {
                console.log('进入视口')
            } else {
                console.log('离开视口')
            }
        })
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    })
    // 元素平滑上升
    app.directive('smoothIn', {

        mounted(el: any, binding: any) {
            console.log('自定义全局指令 smooth-元素平滑上升', el, binding);

            // 创建动画
            const animation = el.animate([
                { transform: `translateY(${distance}px)`, opacity: 0.5 },
                { transform: `translateY(0px)`, opacity: 1 }
            ], {
                duration: duration,
                // easing: 'ease-in-out',
                easing: 'ease',
                // delay: 1000,
                // fill: 'forwards'
            })

            // 暂停动画
            // animation.pause()
            ob.observe(el)
        },
        unmounted(el: any) {
            console.log('自定义全局指令 smooth-元素平滑上升', el);
            ob.unobserve(el)
        }
    })
}