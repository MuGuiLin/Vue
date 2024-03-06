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
    {
        // 动画持续时间
        const duration = 1000
        // 用 WeakMap 保存动画对象（不要直接用Map，因为可能会导致dom元素无法被垃圾回收，面dom还在Map中），避免重复创建，并能在当元素进入视口时匹配到对应的DOM元素才触发动画。
        const animationMap = new WeakMap();

        // 创建观察者
        const ob = new IntersectionObserver((entries: any) => {
            entries.forEach((entry: any) => {
                if (entry.isIntersecting) {
                    console.info('进入视口的元素：', entry.target)
                    // 在保存的animationMap对象中找到对应的DOM元素
                    const animation = animationMap.get(entry.target)
                    if (animation) {
                        // 触发动画
                        animation.play()

                        // 如查果只触发1次（就是在触发后移除观察者，避免在向上滚动时重复触发）
                        // ob.unobserve(entry.target)
                        // animationMap.delete(entry.target)
                    }
                } else {
                    console.warn('离开视口的元素：', entry.target)
                }
            })
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        });

        // 判断元素是否在视口内
        const isBelowViewport = (el: any) => {
            const rect = el.getBoundingClientRect()
            // return rect.top <= 0 && rect.bottom >= 0
            return rect.top > window.innerHeight
        }

        // 元素平滑上升动效
        app.directive('smoothIn', {
            mounted(el: any, binding: any) {
                console.log('自定义全局指令 smooth-元素平滑上升', el, binding);

                // 判断如果元素没有在视口内，直接返回，就不用创建动画了。
                if (!isBelowViewport(el)) {
                    return;
                }
                // 创建动画
                const animation = el.animate([
                    { transform: `translateY(10px) scale(0)`, opacity: 0.5 },
                    { transform: `translateY(0px)`, opacity: 1 }
                ], {
                    duration: duration,
                    // easing: 'ease-in-out',
                    easing: 'ease',
                    // delay: 1000,
                    // fill: 'forwards'
                })

                // 暂停动画（在元素进入视口时才触发）
                animation.pause()
                // 保存动画对象
                animationMap.set(el, animation)
                // 添加观察者（el 就是要观察的元素）
                ob.observe(el)

            },
            // 销毁动画
            unmounted(el: any) {
                console.log('自定义全局指令 smooth-元素平滑上升', el);
                // 取消观察
                ob.unobserve(el)
            }
        })
    }
}