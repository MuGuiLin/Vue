<template>
  <section>
    {{title}}
    <Input v-model="value" :name="field" :placeholder="placeholder" @input="inputFn" />
  </section>
</template>

<script>
export default {
  name: "myInput",
  props: {
    field: String,
    title: String,
    placeholder: String
  },
  data() {
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      field: "",
      // eslint-disable-next-line vue/no-dupe-keys
      value: "",
      // eslint-disable-next-line vue/no-dupe-keys
      placeholder: "请输入内容"
    };
  },
  methods: {
    inputFn() {
      console.log(this.value);
      this.$emit("inputFn", this.value);
    }
  },
  mounted() {
    window.setTimeout(() => {
      console.log(this.props);
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
</style>