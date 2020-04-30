<template>
  <section class="about">
    <div class="demo-image__lazy">
      <img src="../assets/form-create.png" alt />
      <!-- <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image> -->
    </div>

    <el-row>
      <h1 class="large">form-create</h1>
      <h4>具有动态渲染、数据收集、校验和提交功能的表单生成器。</h4>
      <p>form-create 是一个可以通过 JSON 生成具有动态渲染、数据收集、验证和提交功能的表单生成器。并且支持生成任何 Vue 组件。结合内置17种常用表单组件和自定义组件，再复杂的表单都可以轻松搞定。</p>
      <el-button type="success" icon>
        <a href="http://www.form-create.com/v2/guide/" target="_blank" rel="noopener noreferrer">
          快速上手
          <i class="el-icon-s-promotion el-icon--right"></i>
        </a>
      </el-button>
    </el-row>
  </section>
</template>

<script>
export default {
  name: "MyForms",
  components: {},
  data() {
    return {
      urls: [
        "../assets/form-create.png"
        // 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        // 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        // 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        // 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        // 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        // 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        // 'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.about {
  h1 {
    font-size: 36px;
  }
  img {
    width: 300px;
  }
  p {
    padding: 20px 100px;
    text-align: left;
  }
  a{
    font-size: 24px;
    color: white;
    text-decoration: none;
  }
}
</style>