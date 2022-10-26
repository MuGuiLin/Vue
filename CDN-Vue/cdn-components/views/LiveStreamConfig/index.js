import CmsInput from './../../components/Input/index.js';
import CmsButton from './../../components/Button/index.js';
import ListItem from './listItem.js';

const { ref, reactive, onMounted } = Vue
const { ElPopover } = ElementPlus

// 1播流 2推流 3拉流 默认推流
export default {
  template: /*html*/`
  <div class="live-stream-config">
    <list-item v-for="item in streamList" :type="item.type"></list-item>
    <div class="flex-row justify-end" style="margin-top: 10px;">
      <el-popover placement="top" :width="80" v-model:visible="visible">
        <div class="flex-row flex-col inline">
          <cms-button @click="handleAddCardClick(2)" :link="true" style="color:black;">推流</cms-button>
          <cms-button @click="handleAddCardClick(3)" :link="true" style="color:black;">拉流</cms-button>
          <cms-button @click="handleAddCardClick(1)" :link="true" style="color:black;">播流</cms-button>
        </div>
        <template #reference>
          <cms-button @click="visible = true" type="success" :outline="true" size="small">添加线路</cms-button>
        </template>
      </el-popover>
    </div>
  </div>
  `,
  components: {
    CmsInput,
    CmsButton,
    ListItem,
    ElPopover
  },
  setup() {
    const visible = ref(false);
    const streamList = ref([]);

    onMounted(() => {
      streamList.value = [
        {
          type: 2
        }
      ]
    })

    const handleAddCardClick = (type) => {
      visible.value = false;
      streamList.value.push({
        type: type
      })
    }

    return {
      visible,
      handleAddCardClick,
      streamList
    }
  }
}