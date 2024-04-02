<script setup lang="ts">
import { ref, onMounted, onActivated } from 'vue'
import type { TableColumnsType, UploadProps } from 'ant-design-vue'
import { SmileOutlined, DownOutlined, PlusOutlined } from '@ant-design/icons-vue'

const previewVisible = ref(false)
const previewImage = ref('')
const previewTitle = ref('')

const fileList = ref<UploadProps['fileList']>([
  {
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  },
  {
    uid: '-2',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  },
  {
    uid: '-xxx',
    percent: 50,
    name: 'image.png',
    status: 'uploading',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  },
  {
    uid: '-5',
    name: 'image.png',
    status: 'error'
  }
])

const handleCancel = () => {
  previewVisible.value = false
  previewTitle.value = ''
}
function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}
const handlePreview = async (file: UploadProps['fileList'][number]) => {
  if (!file.url && !file.preview) {
    file.preview = (await getBase64(file.originFileObj)) as string
  }
  previewImage.value = file.url || file.preview
  previewVisible.value = true
  previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1)
}

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address:
      'London No. 1 Lake Park, London No. 1 Lake Park, London No. 1 Lake Park, London No. 1 Lake Park, London No. 1 Lake Park, London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

const columns = ref<TableColumnsType>([
  {
    dataIndex: 'name',
    key: 'name',
    resizable: true,
    width: 150
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    resizable: true,
    width: 100,
    minWidth: 100,
    maxWidth: 200
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    resizable: true,
    ellipsis: true
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags'
  },
  {
    title: 'Action',
    key: 'action'
  }
])
function handleResizeColumn(w, col) {
  col.width = w
}

onMounted(() => {
  console.log('mounted')
})

onActivated(() => {
  console.warn(
    '注：Vue 钩子函数中的activated()和deactivated()只有在<keep-alive></keep-alive>包裹的时候才会触发！！'
  )
})
</script>

<template>
  <section class="antdv">
    <h1>AntdV</h1>
    <hr />
    <h2>
      <router-link to="/antdv/muinput">二次封装UI组件</router-link>
    </h2>

    <a-upload
      v-model:file-list="fileList"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture-card"
      @preview="handlePreview"
    >
      <div v-if="fileList.length < 8">
        <plus-outlined />
        <div style="margin-top: 8px">Upload</div>
      </div>
    </a-upload>
    <a-modal :open="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>

    <a-table :columns="columns" :data-source="data" @resizeColumn="handleResizeColumn">
      <template #headerCell="{ column }">
        <template v-if="column.key === 'name'">
          <span>
            <smile-outlined />
            Name
          </span>
        </template>
      </template>

      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'">
          <a>
            {{ record.name }}
          </a>
        </template>
        <template v-else-if="column.key === 'tags'">
          <span>
            <a-tag
              v-for="tag in record.tags"
              :key="tag"
              :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
            >
              {{ tag.toUpperCase() }}
            </a-tag>
          </span>
        </template>
        <template v-else-if="column.key === 'action'">
          <span>
            <a>Invite 一 {{ record.name }}</a>
            <a-divider type="vertical" />
            <a>Delete</a>
            <a-divider type="vertical" />
            <a class="ant-dropdown-link">
              More actions
              <down-outlined />
            </a>
          </span>
        </template>
      </template>
    </a-table>
  </section>
</template>

<style scoped lang="less">
.antdv{
  h1{
    line-height: 60px;
    font-size: 36px;
    color: #1890ff;
    text-align: center;
  }
}
</style>