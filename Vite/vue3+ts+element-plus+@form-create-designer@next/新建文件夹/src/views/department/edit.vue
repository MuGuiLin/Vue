<script setup lang="ts" name="departmentEdit">
  import { ref, reactive, onMounted } from 'vue';
  import { uniqueId } from '@/utils';

  import { $msg, useRoute, useRouter, depGetDoApi, depReleaseDoApi } from '@/apis/department';

  const { query } = useRoute();
  const router = useRouter();

  const designer: any = ref();

  // http://designer.form-create.com/guide
  const config = reactive({
    showBaseForm: true,
    disabled: {
      showBaseForm: false,
    },
  });
  const menu = reactive([
    {
      name: 'main',
      title: '基础控件',
      list: [
        {
          icon: 'icon-input',
          name: 'input',
          label: '输入框',
        },
        {
          icon: 'icon-radio',
          name: 'radio',
          label: '单选框',
        },
        {
          icon: 'icon-checkbox',
          name: 'checkbox',
          label: '多选框',
        },
        {
          icon: 'icon-select',
          name: 'select',
          label: '选择器',
        },
        {
          icon: 'icon-switch',
          name: 'switch',
          label: '开关',
        },
        {
          icon: 'icon-slider',
          name: 'slider',
          label: '滑块',
        },
        {
          icon: 'icon-date',
          name: 'datePicker',
          label: '日期',
        },
        {
          icon: 'icon-time',
          name: 'timePicker',
          label: '时间',
        },
      ],
    },
    // {
    //   name: 'aide',
    //   title: '辅助组件',
    //   list: ['alert', 'button', 'span', 'divider'],
    // },
    // {
    //   name: 'layout',
    //   title: '布局组件',
    //   list: ['row', 'tab', 'space'],
    // },

    //  {
    //         name: 'main',
    //         title: t('menu.main'),
    //         list: [
    //             input, number, radio, checkbox, select, _switch, time, date, slider, rate, color, cascader, upload, transfer, tree, editor
    //         ]
    //     },
    //     {
    //         name: 'aide',
    //         title: t('menu.aide'),
    //         list: [
    //             alert, button, span, divider
    //         ]
    //     },
    //     {
    //         name: 'layout',
    //         title: t('menu.layout'),
    //         list: [
    //             row, tab, space
    //         ]
    //     },
  ]);

  const state: any = reactive({
    depID: query.id || '',
    depName: '',
  });

  // 清空表单
  const clearRule = () => {
    designer.value.clearDragRule();
    designer.value.clearActiveRule();
  };

  // 预览表单
  const preview = () => {
    designer.value.previewFc();
  };

  // 保存表单
  const editDep = async () => {
    if (!state.depName) {
      $msg({
        showClose: true,
        message: '对不起：请填写部门名称！',
        type: 'warning',
      });
      return false;
    }
    if (designer.value.getRule().length) {
      const formField: Array<any> = [];
      const getJson = JSON.parse(designer.value.getJson());
      getJson.forEach((o: any) => {
        if (o?.field) {
          formField.push({
            filed: o?.field || uniqueId(),
            filedName: o.title,
            fieldType: 'timePicker' === o.type || 'datePicker' === o.type ? 'timestamp' : 'text',
          });
        }
      });
      const { message = '保存成功！' }: any = await depReleaseDoApi({
        ...state,
        formJson: designer.value.getJson(),
        formOption: JSON.stringify(designer.value.getOption()),
        formField: JSON.stringify(formField),
      });
      $msg({
        showClose: true,
        message,
        type: 'success',
        onClose: router.back,
      });
    } else {
      $msg({
        showClose: true,
        message: '对不起：请正确添加表单项！',
        type: 'error',
      });
    }
  };

  onMounted(async () => {
    console.log('designer', designer.value);
    if (state.depID) {
      try {
        const {
          data: { dep },
        }: any = await depGetDoApi({ depID: state.depID });
        state.depID = dep.depID;
        state.depName = dep.depName;
        dep.formOption && designer.value.setOption(JSON.parse(dep.formOption));
        dep.formJson && designer.value.setRule(JSON.parse(dep.formJson));
      } catch (error) {
        console.error(error);
      }
    }
  });
</script>

<template>
  <el-main class="department-edit">
    <el-card>
      <template #header>
        <el-row class="top-setup">
          <el-col :span="6">
            <el-form-item label="部门名称" prop="depName">
              <el-input
                v-model.trim="state.depName"
                placeholder="请输入部门名称！"
                autocomplete="off"
                clearable
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-popconfirm
              width="300"
              icon-color="#F56C6C"
              confirm-button-text="清空"
              cancel-button-text="取消"
              title="注：清空后将不能恢复，确定要清空吗？"
              @confirm="clearRule"
            >
              <template #reference>
                <el-button type="danger">
                  <el-icon><Delete /></el-icon>清 空
                </el-button>
              </template>
            </el-popconfirm>
            <el-button type="success" @click="preview">
              <el-icon><View /></el-icon>预 览
            </el-button>
            <el-button type="primary" @click="editDep">
              <el-icon><List /></el-icon> 保 存
            </el-button>
          </el-col>
        </el-row>
      </template>
      <fc-designer ref="designer" :menu="menu" :config="config" height="740px" />
    </el-card>
  </el-main>
</template>

<style scoped lang="less">
  .department-edit {
    .el-card {
      .top-setup {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        font-size: 14px;
        .el-col:last-child {
          text-align: right;
        }
        .el-form-item {
          margin-bottom: 0;
        }

        .el-button {
          .el-icon {
            margin-right: 2px;
          }
        }
      }

      .el-card__body {
        padding-top: 0 !important;
      }

      ::v-deep {
        ._fc-m-drag {
          // background: url(@/assets/img/iphone-box.png) no-repeat center top;
          // background-size: contain;
        }

        ._fc-l {
          ._fc-l-item {
            margin: 23px 15px;
            border: 1px solid #ccc;
          }
        }

        ._fc-m-tools {
          display: none;
        }
      }
    }
  }
</style>
