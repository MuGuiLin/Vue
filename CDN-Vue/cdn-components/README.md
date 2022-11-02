# cdn-components

可用于后台管理的渐进式组件，无需打包构建。前端根据后端返回的配置规则渲染用户可见界面，达到差异化处理的目的。

## 配置项json说明

### 编辑页

- [直播编辑页json示例](./demo/addLive.json)

## 进度说明

![progress-no](https://img.shields.io/badge/%E6%9C%AA%E5%BC%80%E5%A7%8B-lightgrey)

![progress-ongoing](https://img.shields.io/badge/%E5%BC%80%E5%8F%91%E4%B8%AD-brightgreen)

![progress-complete](https://img.shields.io/badge/%E5%B7%B2%E5%AE%8C%E6%88%90-blue)

## 组件说明

### 基础组件

|  组件名称  |  说明  |  开发进度  |
|  ----  |  ----  |  ----  |
|  Button 按钮  |  [README](./components/Button/README.md)  | ![progress-ongoing](https://img.shields.io/badge/%E5%BC%80%E5%8F%91%E4%B8%AD-brightgreen) |
|  Dialog 对话框  |  [README](./components/Dialog/README.md)  | ![progress-no](https://img.shields.io/badge/%E6%9C%AA%E5%BC%80%E5%A7%8B-lightgrey) |
|  Card 卡片  |  [README](./components/Card/README.md)  | ![progress-ongoing](https://img.shields.io/badge/%E5%BC%80%E5%8F%91%E4%B8%AD-brightgreen) |
|  Dropdown 下拉菜单  |  [README](./components/Dropdown/README.md)  | ![progress-no](https://img.shields.io/badge/%E6%9C%AA%E5%BC%80%E5%A7%8B-lightgrey) |
|  Tabs 标签页  |  [README](./components/Tabs/README.md)  | ![progress-no](https://img.shields.io/badge/%E6%9C%AA%E5%BC%80%E5%A7%8B-lightgrey) |
|  Table 表格  |  [README](./components/Table/README.md)  |  ![progress-no](https://img.shields.io/badge/%E6%9C%AA%E5%BC%80%E5%A7%8B-lightgrey)  |
|  Pagination 分页  |  [README](./components/Pagination/README.md)  | ![progress-no](https://img.shields.io/badge/%E6%9C%AA%E5%BC%80%E5%A7%8B-lightgrey) |
|  Collapse 折叠面板  |  [README](./components/Collapse/README.md)  |![progress-ongoing](https://img.shields.io/badge/%E5%BC%80%E5%8F%91%E4%B8%AD-brightgreen)|

### 表单项组件

- 表单组件区分为两种：

  1. 基础表单项组件，包含单多行文本、富文本、单选、多选、下拉、上传、日期等；
  2. 特殊表单类型，根据cms需求定制化的独立表单组件。

表单项配置示例如下：

``` json
{
  cover_before: {
    name: "cover_before",//表单项name名
    label: "播前图",//表单项名称
    default: "默认值",//表单的默认值，可以通过接口拿数据填充
    required: true,//这个字段控制是否为主要核心字段，核心字段不可省略和编辑
    placeholder: "请上传图片",//字段提示文案
    validate: [//字段校验规则
      required："required",//是否必填
      rule："/^[a-zA-Z_{0-9}+$/g]",//字段内容校验正则
      message："出错提示",//消息提示
      upload_type：'jpg,gif,mp3,flv……',//如果是上传的，限制类型
      max_upload_size:'100M',//最大可上传大小
      begin_date:'2022-08-14',//日期型的设置开始时间
      end_date:'2022-10-10',//日期型的设置结束时间
      ……
    ],
    options: [//如果是选择类型的，这里罗列具体选项
      {key,value,label,select},
      //对应参数为选项字段key，字段值，字段显示名，是否默认选中
      {……}
    ],
    is_show: true,//是否显示
    field_type: "file",//表单类型，单多行文本、富文本、单选、多选、下拉、上传、日期
    style: {//样式控制，解决显示区域大小，横排问题
      display: "inline-block",
      width: "200px",
      margin: "0 15px"
    },
    length: 100//字段长度控制
  }
}
```

|  组件名称  |  说明  |  开发进度  |
|  ----  |  ----  |  ----  |
|  Input 输入框  |  [README](./components/Input/README.md)  |![progress-ongoing](https://img.shields.io/badge/%E5%BC%80%E5%8F%91%E4%B8%AD-brightgreen)|
|  Radio 单选框  |  [README](./components/Radio/README.md)  |![progress-ongoing](https://img.shields.io/badge/%E5%BC%80%E5%8F%91%E4%B8%AD-brightgreen)|
|  Switch 开关  |  [README](./components/Switch/README.md)  |![progress-ongoing](https://img.shields.io/badge/%E5%BC%80%E5%8F%91%E4%B8%AD-brightgreen)|
|  DateTimePicker 日期时间选择器  |  [README](./components/DateTimePicker/README.md)  |![progress-ongoing](https://img.shields.io/badge/%E5%BC%80%E5%8F%91%E4%B8%AD-brightgreen)|
|  Select 选择器  |  [README](./components/Select/README.md)  |![progress-no](https://img.shields.io/badge/%E6%9C%AA%E5%BC%80%E5%A7%8B-lightgrey)|
|  Checkbox 多选框  |  [README](./components/Checkbox/README.md)  |![progress-no](https://img.shields.io/badge/%E6%9C%AA%E5%BC%80%E5%A7%8B-lightgrey)|
|  Upload 上传  |  [README](./components/Upload/README.md)  |![progress-ongoing](https://img.shields.io/badge/%E5%BC%80%E5%8F%91%E4%B8%AD-brightgreen)|
|  Tag 标签  |  [README](./components/Tag/README.md)  |![progress-ongoing](https://img.shields.io/badge/%E5%BC%80%E5%8F%91%E4%B8%AD-brightgreen)|
|  UEditor 富文本组件  |  [README](./components/UEditor/README.md)  |![progress-no](https://img.shields.io/badge/%E6%9C%AA%E5%BC%80%E5%A7%8B-lightgrey)|

### 特殊表单项组件

- cms业务需求特有表单项组件

|  组件名称  |  说明  |  开发进度  |
|  ----  |  ----  |  ----  |
|  LiveStreamConfig 直播流组件  |  [README](./views/LiveStreamConfig/README.md)  |![progress-ongoing](https://img.shields.io/badge/%E5%BC%80%E5%8F%91%E4%B8%AD-brightgreen)|
|  MaterialSelector 素材库选择组件  |  [README](./views/MaterialSelector/README.md)  | ![progress-no](https://img.shields.io/badge/%E6%9C%AA%E5%BC%80%E5%A7%8B-lightgrey)|
|  TagsSelector 标签选择组件  |  [README](./views/TagsSelector/README.md)  | ![progress-ongoing](https://img.shields.io/badge/%E5%BC%80%E5%8F%91%E4%B8%AD-brightgreen)|

### 模块组件

- 模块化组件为表单项组合后产生的模块，可直接调用。

|  组件名称  |  说明  |  开发进度  |
|  ----  |  ----  |  ----  |
|  ShareConfig 分享组件  |  [README](./views/ShareConfig/README.md)  | ![progress-no](https://img.shields.io/badge/%E6%9C%AA%E5%BC%80%E5%A7%8B-lightgrey) |
|  DataShowConfig 数据展示组件  |  [README](./views/DataShowConfig/README.md)  | ![progress-no](https://img.shields.io/badge/%E6%9C%AA%E5%BC%80%E5%A7%8B-lightgrey) |
|  DisplayRatioConfig 公式系数组件  |  [README](./views/DisplayRatioConfig/README.md)  | ![progress-no](https://img.shields.io/badge/%E6%9C%AA%E5%BC%80%E5%A7%8B-lightgrey) |
|  VipConfig 权限组件  |  [README](./views/VipConfig/README.md)  | ![progress-no](https://img.shields.io/badge/%E6%9C%AA%E5%BC%80%E5%A7%8B-lightgrey) |
|  CommentConfig 评论控制组件  |  [README](./views/CommentConfig/README.md)  | ![progress-no](https://img.shields.io/badge/%E6%9C%AA%E5%BC%80%E5%A7%8B-lightgrey) |
|  UserNumShowConfig 人数开关组件  |  [README](./views/UserNumShowConfig/README.md)  | ![progress-no](https://img.shields.io/badge/%E6%9C%AA%E5%BC%80%E5%A7%8B-lightgrey) |
|  HostConfig 主持人设置组件  |  [README](./views/HostConfig/README.md)  | ![progress-no](https://img.shields.io/badge/%E6%9C%AA%E5%BC%80%E5%A7%8B-lightgrey) |
