<template>
  <div class="hook">
    <p>
      注意：<a
        href="https://v3.cn.vuejs.org/guide/composition-api-lifecycle-hooks.html"
        target="_blank"
        rel="noopener noreferrer"
        >Vue3生命周期钩子</a
      >
      <br />所有生命周期钩子的 this 上下文将自动绑定至实例中，因此你可以访问 data、computed 和
      methods。这意味着你不应该使用箭头函数来定义一个生命周期方法 (例如 created: () =>
      this.fetchTodos())。因为箭头函数绑定了父级上下文，所以 this
      不会指向预期的组件实例，并且this.fetchTodos 将会是 undefined。
    </p>
    <pre>
      Vue3.0生命周期钩子
        setup() : 开始创建组件之前，在 beforeCreate 和 created 之前执行，创建的是 data 和 method
        onBeforeMount() : 组件挂载到节点上之前执行的函数；
        onMounted() : 组件挂载完成后执行的函数；
        onBeforeUpdate(): 组件更新之前执行的函数；
        onUpdated(): 组件更新完成之后执行的函数；
        onBeforeUnmount(): 组件卸载之前执行的函数；
        onUnmounted(): 组件卸载完成后执行的函数；
        onActivated(): 被包含在 &lt;keep-alive> 中的组件，会多出两个生命周期钩子函数，被激活时执行；
        onDeactivated(): 比如从 A 组件，切换到 B 组件，A 组件消失时执行；
        onErrorCaptured(): 当捕获一个来自子孙组件的异常时激活钩子函数。
    </pre>
    <h2>{{ title }}</h2>

    <a-button type="primary" @click="update">更新组件</a-button>
    <a-button type="primary" @click="update"
      ><template #icon><UndoOutlined /></template>更新组件</a-button
    >

    <a-input v-model="hook" autosize type="textarea" placeholder="Please input" />
  </div>
</template>
<script lang="ts">
import {
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onRenderTriggered,
  onRenderTracked,
  onErrorCaptured
} from 'vue'
import { UndoOutlined } from '@ant-design/icons-vue'

interface DataProps {
  title: string | number
  update: () => void
  hook: string
}
export default {
  name: 'Hook',
  components: {
    UndoOutlined
  },
  // setup(props, context) {
  setup() {
    // 注：Vue3 的生命周期在setup()中执行！！

    onErrorCaptured(() => {
      console.error(
        '* Error、在捕获一个来自后代(子孙)组件的异常、错误时被调用！------> onErrorCaptured()'
      )
      return true // 错误时继续向下执行
    })

    onDeactivated(() => {
      console.error('* 9、组件(页面)后台(失去焦点)！------> onDeactivated()')
    })

    onActivated(() => {
      console.error('* 8、组件(页面)激活(得到焦点)！------> onActivated()')
    })

    onUnmounted(() => {
      console.error('* 7、组件(页面)卸载之后！------> onUnmounted()')
    })

    onBeforeUnmount(() => {
      console.error('* 6、组件(页面)卸载之前！------> onBeforeUnmount()')
    })

    onUpdated(() => {
      console.error('* 5、组件(页面)更新之后！------> onUpdated()')
    })

    onBeforeUpdate(() => {
      console.error('* 4、组件(页面)更新之前！------> onBeforeUpdate()')
    })

    onMounted(() => {
      console.log(
        '获取DOM：',
        document.querySelector('.hook'),
        '注：获取DOM一定要在组件挂载到页面之后！！！'
      )
      console.error('* 3、组件挂载到页面之后！------> onMounted()')
    })

    onBeforeMount(() => {
      console.log('获取DOM：', document.querySelector('.hook'))
      console.error('* 2、组件挂载到页面之前！------> onBeforeMount()')
    })

    console.error('* 1、开始创建组件！------> setup()')

    /**
     * Vue3 新增的 两个 跟踪状态(数据)的改变情况，可用于代码、功能调试
     * onRenderTracked()
     * onRenderTriggered()
     **/

    // onRenderTracked(({ key, target, type }) => {
    onRenderTracked((event) => {
      console.error(
        '* 3.1 跟踪虚拟 DOM 状态(全部：数据)  重新渲染时调用！------> onRenderTracked()'
      )
      // console.log(key, target, type);
      console.log('event:', event)
    })

    // onRenderTriggered(({ key, target, type }) => {
    onRenderTriggered((event) => {
      console.error(
        '* 4.0、当虚拟 DOM 状态(具体：数据) 重新渲染被触发时调用！------> onRenderTriggered()'
      )
      // console.log(key, target, type);
      console.log('event:', event)
      console.log('修改值:', event.key)
      console.log('修改前:', event.oldValue)
      console.log('修改后:', event.newValue)
    })

    const data: DataProps = reactive({
      title: 'Hook Pages 666',
      update: () => {
        data.title = Math.random() * 1000
      },
      hook: `
            // 注：Vue3 的生命周期在setup()中执行！！
            setup() { 

                onErrorCaptured(() => {
                    console.error('* Error、在捕获一个来自后代(子孙)组件的异常、错误时被调用！------> onErrorCaptured()');
                });

                onDeactivated(() => {
                    console.error('* 9、组件(页面)后台(失去焦点)！------> onDeactivated()');
                });

                onActivated(() => {
                    console.error('* 8、组件(页面)激活(得到焦点)！------> onActivated()');
                });

                onUnmounted(() => {
                    console.error('* 7、组件(页面)卸载之后！------> onUnmounted()');
                });

                onBeforeUnmount(() => {
                    console.error('* 6、组件(页面)卸载之前！------> onBeforeUnmount()');
                });

                onUpdated(() => {
                    console.error('* 5、组件(页面)更新之后！------> onUpdated()');
                });

                onBeforeUpdate(() => {
                    console.error('* 4、组件(页面)更新之前！------> onBeforeUpdate()');
                });

                onRenderTriggered((event) => {
                    console.error('* 4.0、当虚拟 DOM 状态(具体：数据) 重新渲染被触发时调用！------> onRenderTriggered()');
                });

                onMounted(() => {
                    console.log('获取DOM：', document.querySelector('.hook'), '注：获取DOM一定要在组件挂载到页面之后！！！');
                    console.error('* 3、组件挂载到页面之后！------> onMounted()');
                });

                onRenderTracked((event) => {
                    console.error('* 3.1 跟踪虚拟 DOM 状态(全部：数据)  重新渲染时调用！------> onRenderTracked()');
                });

                onBeforeMount(() => {
                    console.log('获取DOM：', document.querySelector('.hook'));
                    console.error('* 2、组件挂载到页面之前！------> onBeforeMount()');
                });

                console.error('* 1、开始创建组件！------> setup()');
            },`
    })

    return {
      ...toRefs(data)
    }
  },

  //注：为了兼容Vue2x 这里也还能能使用Vue2中的生命周期函数，但不是推荐在Vue3中用Vue2的写法！！！

  beforeCreate() {
    console.debug('* Vue2 -> 2、组件挂载到页面之前！------> beforeCreate()')
  },

  beforeMount() {
    console.log('获取DOM：', document.querySelector('.hook'))
    console.debug('* Vue2 -> 3.1、组件挂载到页面之后！------> beforeMount()')
  },

  mounted() {
    console.log(
      '获取DOM：',
      document.querySelector('.hook'),
      '注：获取DOM一定要在组件挂载到页面之后！！！'
    )
    console.debug('* Vue2 -> 3、组件挂载到页面之后！------> mounted()')
  },

  beforeUpdate() {
    console.debug('* Vue2 -> 4、组件(页面)更新之前！------> beforeUpdate()')
  },

  updated() {
    console.debug('* Vue2 -> 5、组件(页面)更新之后！------> updated()')
  },

  // beforeDestroy() {    // 已废弃
  //     console.debug('* Vue2 -> 6、组件(页面)卸载之前！------> beforeUnmount()');
  // },

  beforeUnmount() {
    console.debug('* Vue2 -> 6、组件(页面)卸载之前！------> beforeUnmount()')
  },

  // destroyed() {     // 已废弃
  //     console.debug('* Vue2 -> 7、组件(页面)卸载之后！------> unmounted()');
  // },

  unmounted() {
    console.debug('* Vue2 -> 7、组件(页面)卸载之后！------> unmounted()')
  },

  activated() {
    console.debug('* Vue2 -> 8、组件(页面)激活(得到焦点)！------> activated()')
  },

  deactivated() {
    console.debug('* Vue2 -> 9、组件(页面)后台(失去焦点)！------> deactivated()')
  },

  errorCaptured(err: any, vm: any, info: any) {
    console.debug(
      '* Vue2 -> Error、在捕获一个来自后代(子孙)组件的异常、错误时被调用！------> errorCaptured()'
    )
  }
}
</script>

<style lang="less" scoped>
.hook {
  padding: 20px;
  text-align: left;
  p {
    line-height: 32px;
  }
  pre{
    line-height: 26px;
  }
}
</style>