<template>
<!-- teleport瞬间移动组件 https://v3.cn.vuejs.org/guide/teleport.html  -->

<!-- <teleport to="#mupiao"> -->
    <teleport to="body">
        <article class="alert">
            <section class="main">Vue3瞬移组件&lt;teleport&gt;标签, 而且还可以在同一目标上挂载多个teleport</section>
        </article>
    </teleport>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="less" scoped>
.alert {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.6);
    .main {
        padding: 50px 80px;
        font-size: 18px;
        color: blue;
        border-radius: 8px;
        background: white;
    }
}
</style>