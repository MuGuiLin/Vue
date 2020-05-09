<template>
  <section class="vuex">
    <pre>
            <h3>一经设置在所有的页面和组件都可以直接访问！！</h3>
            $store.state 访问所有： {{$store.state}}
            $store.state.random 访问某个：<b>{{$store.state.random}}</b>

            <button @click="$store.commit('addRmb')">访问方法</button>

            <button @click="$store.commit('getUserInfo')">获取用户信息</button>
            
            <hr />
            <h3>vue单页面应用刷新网页后vuex的state数据丢失的解决方案</h3> 
            最近在用vue写pc端项目，用vuex来做全局的状态管理， 发现当刷新网页后，保存在vuex实例store里的数据会丢失。
                
            <b>1. 产生原因：</b>
                其实很简单，因为store里的数据是保存在运行内存中的,当页面刷新时，页面会重新加载vue实例，store里面的数据就会被重新赋值。

            <b>2. 解决思路</b> 
                一种是state里的数据全部是通过请求来触发action或mutation来改变。
                一种是将state里的数据保存一份到本地存储(localStorage、sessionStorage、cookie）中。
                很显然，第一种方案基本不可行，除非项目很小或者vuex存储的数据很少。而第二种可以保证刷新页面数据不丢失且易于读取。

            <b>3. 解决过程</b>    
                首先得选择合适的客户端存储;
                localStorage是永久存储在本地，除非你主动去删除;
                sessionStorage是存储到当前页面关闭为止;
                cookie则根据你设置的有效时间来存储，但缺点是不能储存大数据且不易读取。

                我选择的是sessionStorage,选择的原因vue是单页面应用，操作都是在一个页面跳转路由，
                另一个原因是sessionStorage可以保证打开页面时sessionStorage的数据为空，而如果是localStorage则会读取上一次打开页面的数据。
                然后是怎么用sessionStorage来保存state里的数据。

            <b>解决方案1：</b>    
                由于state里的数据是响应式，所以sessionStorage存储也要跟随变化。又由于vuex规定所有state里数据必须通过mutation方法来修改，
                所以第一种方案就是mutation修改state的同时修改sessionStorage对应存储的属性

            <b>解决方案2：</b>    
                第一种方案确实可以解决问题，但这种方法很明显让人觉得怪异，都这样了，那不如直接用sessionStorage来做状态管理。
                那怎么才能不用每次修改state时同时也要修改sessionStorage呢？
                这时我们可以换一个思路，因为我们是只有在刷新页面时才会丢失state里的数据，那有没有办法在点击页面刷新时先将state数据保存到sessionStorage,然后才真正刷新页面?
                当然有，beforeunload这个事件在页面刷新时先触发的。那这个事件应该在哪里触发呢？
                我们总不能每个页面都监听这个事件，所以我选择放在app.vue这个入口组件中，这样就可以保证每次刷新页面都可以触发。

            <b>具体的代码如下：</b>    
            <code>
                export default {
                    name: 'App',
                    created () {
                        // 在页面加载时读取sessionStorage里的状态信息
                        if (sessionStorage.getItem("store") ) {
                            this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))));
                        } 

                        // 在页面刷新时将vuex里的信息保存到sessionStorage里
                        window.addEventListener("beforeunload",()=>{
                            sessionStorage.setItem("store",JSON.stringify(this.$store.state));
                        });
                    }
                }
            </code>

        </pre>
  </section>
</template>

<script>
export default {
  name: "Vuex",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.vuex {
  text-align: left;
  pre {
    padding: 50px;
    line-height: 32px;
    border: 1px solid gray;
    border-radius: 8px;
    font-size: 16px;
    button{
        padding: 6px 12px;
        font-size: 16px;
        cursor: pointer;
    }
    code{
        display: block;
        font-size: 18px;
        border-radius: 8px;
        color: cornsilk;
        background: #2b2b2b;
    }
  }
}
</style>