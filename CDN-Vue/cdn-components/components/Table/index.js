export default {
  template: /*html*/`
<div class="cms-list">
  <table>
    <thead>
      <tr>
        <th v-for="item in columns" :key="item">{{item.label}}</th>
      </tr>
    </thead>
  </table>
</div>
  `,
  props: {
    
  }
}