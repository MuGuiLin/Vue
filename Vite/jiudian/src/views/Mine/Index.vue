<script setup lang="ts">
</script>

<template>
  <section class="mine">
    <header class="user">
      <img src="@/assets/imgs/logo.png" alt="user" />
      <h2>九九</h2>
    </header>

    <main class="navs">
      <nut-cell-group>
        <nut-cell title="充值记录" to="/record">
          <template v-slot:icon>
            <img
              class="nut-icon"
              src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
            />
          </template>
        </nut-cell>
        <nut-cell icon="order" title="消费记录" to="/spend"></nut-cell>
      </nut-cell-group>

      <nut-cell-group>
        <nut-cell icon="edit" title="意见反馈" to="/feedback"></nut-cell>
        <nut-cell icon="setting" title="设置" to="/setting"></nut-cell>
        <nut-cell
          icon="share-n"
          title="关于我们"
          desc="https://www.xxx.com"
          is-link
          url="/"
        ></nut-cell>
      </nut-cell-group>
    </main>
  </section>
</template>



<style lang="scss" scoped>
.mine {
  min-height: 100vh;
  background: #f7f7f7;
  .user {
    position: relative;
    margin: 80px auto 30px;
    width: 355px;
    height: 120px;
    background: #ffffff;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    text-align: center;
    img {
      position: absolute;
      top: -33px;
      left: 50px;
      width: 66px;
      height: 66px;
    }
  }
  .navs {
    padding: 10px;
  }
}
</style>