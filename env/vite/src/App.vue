<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'

console.log('.meta配置文件内容：', import.meta);
console.log('.env配置文件内容：', import.meta.env);
console.log('.env配置文件中的后端API域名', import.meta.env.VITE_API_URL);

const click = () => {
  alert(666);
}

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>

    <h2>pointer-events: none; 设置元素是否对鼠标事件做出反应</h2>
    <div class="pointer">
      <div class="table-box">
        <table class="table">
          <thead>
            <tr>
              <th>标题</th>
              <th>标题</th>
              <th>标题</th>
              <th>标题</th>
              <th>标题</th>
              <th width="200px"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><button @click="click">1</button></td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td></td>
            </tr>
            <tr>
              <td><button @click="click">1</button></td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td></td>
            </tr>
            <tr>
              <td><button @click="click">1</button></td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td></td>
            </tr>
            <tr>
              <td><button @click="click">1</button></td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td></td>
            </tr>
            <tr>
              <td><button @click="click">1</button></td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="table-fixed">
        <table class="table">
          <!-- <thead>
            <tr>
              <th>标题</th>
            </tr>
          </thead> -->
          <tbody>
            <tr>
              <td>
                <button @click="click">编辑</button>
                <button @click="click">删除</button>
              </td>
            </tr>
            <tr>
              <td>
                <button @click="click">编辑</button>
                <button @click="click">删除</button>
              </td>
            </tr>
            <tr>
              <td>
                <button @click="click">编辑</button>
                <button @click="click">删除</button>
              </td>
            </tr>
            <tr>
              <td>
                <button @click="click">编辑</button>
                <button @click="click">删除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.pointer {
  position: relative;
  overflow: hidden;
  border: 1px solid white;
}

.table {
  width: 800px;
}

.table-box {
  height: 260px;
  overflow-y: auto;
}

.table-fixed {
  position: absolute;
  pointer-events: none; /* pointer-events:none 取消当前dom元素鼠标事件的触发（包括它下面的所有子孙元素） */
  right: 0;
  top: 0;
  background: rgba(255, 255, 255, 0.5)
}

.table-fixed .table {
  width: 242px;
}

.table th,
.table td {
  padding: 10px;
  border: 1px solid white;
}

.table-fixed .table th,
.table td {
  border: none;
}

.table td button {
  margin: 0 10px;
  border: 1px solid white;
}

.table-fixed .table button {
  pointer-events: auto; /* pointer-events:auto 恢复子孙具体某个dom元素鼠标事件的触发 */
}
</style>
