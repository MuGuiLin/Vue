<template>
  <div class="box">
    <ul class="ul">
      <li v-for="(o, i) in listData" :key="i">{{o.value}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NativeList",
  props: {
    //所有列表数据
    listData: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    //获取真实显示列表数据
    visibleData() {
      return this.listData.slice(
        this.start,
        Math.min(this.end, this.listData.length)
      );
    }
  },
  mounted() {},
  data() {
    return {};
  },
  methods: {}
};
</script>


<style scoped lang="scss">
.box {
  height: 100%;
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
}
.ul {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.ul li {
  list-style: none;
  height: 100px;
  line-height: 100px;
  color: #555;
  box-sizing: border-box;
  border-bottom: 1px solid #999;
}
</style>