<template>
  <header class="header">
    <Menu mode="horizontal" :theme="theme" active-name="1">
      <MenuItem name="1">
        <router-link to="/">
          <Icon type="ios-home" />首 页
        </router-link>
      </MenuItem>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-stats" />多级导航菜单
        </template>
        <MenuGroup title="使用">
          <router-link to="/about">
            <MenuItem name="3-1">关于我们</MenuItem>
          </router-link>
        </MenuGroup>
        <MenuGroup title="留存">
          <MenuItem name="3-4">用户留存</MenuItem>
          <MenuItem name="3-5">新增流量</MenuItem>
        </MenuGroup>
      </Submenu>
      <MenuItem name="4">
        <router-link to="/forms">
          <Icon type="ios-construct" />自定义form-create表单组件
        </router-link>
      </MenuItem>
      <section>
        <b>切换导航主题:</b>
        <RadioGroup v-model="theme">
          <Radio label="light"></Radio>
          <Radio label="dark"></Radio>
          <Radio label="primary"></Radio>
        </RadioGroup>
      </section>
    </Menu>
  </header>
</template>

<script>
export default {
  name: "Header",

  props: {},

  data() {
    return {
      theme: "light"
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  li {
    text-align: left;
    font-size: 16px;
    color: #515a6e;
    a {
      color: #515a6e;
    }
    i {
      font-size: 18px;
    }
  }

  b {
    padding: 4px;
    color: #42b983;
  }
}
</style>