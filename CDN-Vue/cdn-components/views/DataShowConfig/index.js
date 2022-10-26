import CmsCollapse from "../../components/Collapse/index.js";
import CmsInput from "../../components/Input/index.js";
import CmsSelect from "../../components/Select/index.js";

const { ref, reactive } = Vue
const { ElInputNumber } = ElementPlus

export default {
  template: /*html*/`
  <cms-collapse label="数据展示">
    <cms-select :options="typeList" label="展示方式" required></cms-select>
    <div class="cms-form-item">
      <label>访问量</label>
      <div class="flex-row">
        <label style="font-weight: normal;margin: 0 10px 0 0;">基数</label>
        <el-input-number v-model="visit_num" :controls="false" style="padding: 0"></el-input-number>
        <label style="font-weight: normal;margin: 0 10px;">放大倍数范围</label>
        <el-input-number v-model="visit_rand_min" :controls="false"></el-input-number>
        <label style="font-weight: normal;margin: 0 10px;">~</label>
        <el-input-number v-model="visit_rand_max" :controls="false"></el-input-number>
      </div>
    </div>
    <div class="cms-form-item">
      <label>点赞量</label>
      <div class="flex-row">
        <label style="font-weight: normal;margin: 0 10px 0 0;">基数</label>
        <el-input-number v-model="praise_num" :controls="false"></el-input-number>
        <label style="font-weight: normal;margin: 0 10px;">放大倍数范围</label>
        <el-input-number v-model="praise_rand_min" :controls="false"></el-input-number>
        <label style="font-weight: normal;margin: 0 10px;">~</label>
        <el-input-number v-model="praise_rand_max" :controls="false"></el-input-number>
      </div>
    </div>
  </cms-collapse>
  `,
  components: {
    CmsCollapse,
    CmsInput,
    CmsSelect,
    ElInputNumber
  },
  setup() {
    const typeList = ref([
      {
        label: "真实数据",
        value: 0
      },
      {
        label: "美化数据",
        value: 1
      }
    ]);

    return {
      typeList
    }
  }
}