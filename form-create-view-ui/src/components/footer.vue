<template>
  <footer class="footer">
      <span><img src="../assets/form-create.png" /> MIT Licensed | Copyright © 2018-present xaboy</span> 
      <span><img src="../assets/view-ui.png" /> Copyright © 2020 北京视图更新科技有限公司 | 京ICP备16010358号-2</span>
  </footer>
</template>

<script>
export default {
  name: "Footer",

  props:{},

  data() {
    return {};
  }
  
};
</script>

<style lang="scss" scoped>
.footer{
    padding: 40px 0;
    color: white;
    text-align: center;
    font-size: 16px;
    border-top: 2px solid #2db7f5;
    background: #17233d;
    span{
        padding: 0 16px;
        img{
            vertical-align: middle;
            width: 28px;
        }
    }
}
</style>