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
}