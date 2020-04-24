<template>
  <div class="home">

    <div class="hero">
      <img src="../assets/form-create.png" />
      <h1>form-create</h1>
      <p>具有动态渲染、数据收集、校验和提交功能的表单生成器。</p>
      <p style="text-align: left;">轻松搞定 form 表单,让你不再为表单而烦恼form-create 是一个可以通过 JSON 生成具有动态渲染、数据收集、验证和提交功能的表单生成器。并且支持生成任何 Vue 组件。结合内置17种常用表单组件和自定义组件，再复杂的表单都可以轻松搞定。hidden、input、inputNumber、checkbox、radio、switch、select、autoComplete、cascader、colorPicker、datePicker、timePicker、rate、slider、upload、tree、frame、group。</p>
      <div class="btn-box">
          <Button class="btn" size="large" type="success" target="_blank" to="http://www.form-create.com"> form-create 快速上手 <Icon type="ios-arrow-forward" /></Button>
      </div>
    </div>

    <div class="hero">
      <img src="../assets/view-ui.png" />
      <h1>View UI</h1>
      <p>View UI，即原先的 iView，是一套基于 Vue.js 的开源 UI 组件库，主要服务于 PC 界面的中后台产品。</p>
      <p style="text-align: left;">丰富的组件和功能，满足绝大部分网站场景、提供开箱即用的 Admin 系统 和 高阶组件库，极大程度节省开发成本、提供专业、优质的一对一技术支持、友好的 API ，自由灵活地使用空间、细致、漂亮的 UI、事无巨细的文档、可自定义主题。</p>
      <div class="btn-box"> 
          <Button class="btn" size="large" type="primary" target="_blank" to="//iviewui.com"> ViewUI 快速上手 <Icon type="ios-arrow-forward" /></Button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style lang="scss" scoped>
.home {
  .hero {
    padding: 10%;
    img{
      width: 360px;
    }
    h1{
      font-size: 50px;
      line-height: 100px;
      color: #ff9900;
    }
    p{
      padding: 20px;
      line-height: 32px;
      font-size: 18px;
      color: #515a6e;
    }
    .btn-box{
      .btn{
        display: inline-block;
        margin: 20px;
      }
    }
  }
}
</style>
