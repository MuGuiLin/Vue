# Input

单多行文本输入框

## 配置JSON说明

```json
{
  main_title: {
    //表单项name名
    name: "main_title",
    //表单的默认值，可以通过接口拿数据填充
    default: "默认值", 
    //这个字段控制是否为主要核心字段，核心字段不可省略和编辑
    required: true, 
    //字段提示文案
    placeholder: "请填写标题",
    //是否显示
    is_show: true, 
    //表单类型，单多行文本、富文本、单选、多选、下拉、上传、日期
    field_type: "input",
    //表单项label相关属性
    label: {
      //表单项名称
      name: "主标题", 
      //label宽度，默认120px
      width: "120px", 
      //label字体大小，默认14px
      font_size: "14px", 
      //label是否显示，默认true
      is_show: true, 
      // 是否行内显示，默认false
      inline: false,
    },
    //字段校验规则
    validate: [ 
      //是否必填
      required："required", 
      //字段内容校验正则
      rule："/^[a-zA-Z_{0-9}+$/g]",
      //消息提示
      message："出错提示",
    ],
    //样式控制，解决显示区域大小，横排问题
    style: { 
      display: "inline-block",
      width: "200px",
      margin: "0 15px"
    },
    //下面是 Input 组件特有属性
    type: "text", // text 单行文本，textarea 多行文本
    //字段长度控制，默认-1表示不做限制
    max_length: 100,
    min_length: 1,
    // 是否显示剩余字数，默认false
    show-word-limit: true,
    // 是否可清空，默认false
    clearable: true
  }
}
```
