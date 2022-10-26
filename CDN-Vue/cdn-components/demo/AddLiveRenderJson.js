export default {
  left: [
    {
      label: "基础信息",
      field_type: "cms-section",
      children: [
        { field_type: "input", hidden: true, name: "live[id]" },
        {
          field_type: "div",
          class: "flex-row justify-between",
          children: [
            {
              field_type: "cms-input",
              name: "model[title]",
              label: "主标题",
              inline: "true",
              style: "flex:3;",
              placeholder: "请输入标题",
              required: true,
            },
            {
              field_type: "cms-radio",
              is_label_show: false,
              inline: true,
              name: "model[apply_for_all]",
              style: "flex:1;justify-content: flex-end;",
              options: [
                { key: "", value: 1, label: "一改即改", select: false },
              ],
            },
          ],
        },
        {
          field_type: "div",
          class: "flex-row justify-between",
          children: [
            {
              field_type: "cms-input",
              name: "model[subtitle]",
              label: "副标题",
              inline: "true",
              style: "flex:3;",
              placeholder: "请输入副标题",
              required: true,
            },
            { field_type: "div", style: "flex:1;" },
          ],
        },
        {
          label: "24小时慢直播",
          field_type: "cms-switch",
          name: "live[is_long_time]",
          inline: true,
        },
        {
          field_type: "div",
          class: "flex-row",
          children: [
            {
              label: "直播开始",
              field_type: "cms-date-time-picker",
              name: "live[start_time]",
              style: "flex:3;",
              required: true,
            },
            { field_type: "div", style: "flex:1;" },
            {
              label: "直播结束",
              field_type: "cms-date-time-picker",
              name: "live[end_time]",
              style: "flex:3;",
              required: true,
            },
          ],
        },
        {
          field_type: "div",
          class: "flex-row",
          children: [
            {
              label: "简介",
              field_type: "cms-input",
              name: "model[introduction]",
              style: "flex:3;",
              type: "textarea",
              placeholder: "请输入简介",
            },
            { field_type: "div", style: "flex:1;" },
            {
              label: "封面图",
              field_type: "cms-upload",
              name: "model[cover]",
              style: "flex:2;",
              required: true,
            },
          ],
        },
      ],
    },
    {
      label: "素材信息",
      field_type: "cms-section",
      style: "align-items: flex-start;",
      children: [
        {
          field_type: "live-stream-config",
          name: "streams",
          operators: [
            { label: "网宿", value: "ws" },
            { label: "阿里", value: "al" },
            { label: "腾讯", value: "tx" },
            { label: "火山", value: "hs" },
          ],
          live_types: "1,2,3",
        },
        {
          field_type: "tags-selector",
          level: 2,
          source_type: "by_variable",
          source_variable: "labels",
          has_custom_labels: true,
          system_labels: "model.system_labels",
          custom_labels: "model.custom_labels",
        },
      ],
    },
  ],
  right: [
    {
      label: "权限设置",
      field_type: "cms-collapse",
      children: [
        {
          name: "model[vip]",
          field_type: "cms-switch",
          label: "VIP观看",
          label_width: "80px",
          inline: true,
        },
      ],
    },
    {
      label: "评论设置",
      field_type: "cms-collapse",
      children: [
        {
          field_type: "div",
          class: "flex-row justify-between",
          style: "margin-right: 100px;",
          children: [
            {
              name: "model[comment_able]",
              field_type: "cms-switch",
              label: "允许评论",
              label_width: "80px",
              inline: true,
            },
            {
              name: "model[ask_able]",
              field_type: "cms-switch",
              label: "允许问题",
              label_width: "80px",
              inline: true,
            },
          ],
        },
      ],
    },
    {
      label: "数据展示",
      field_type: "cms-collapse",
      is_show: "by_variable",
      is_show_variable: 1,
      children: [
        {
          name: "live[prettify]",
          field_type: "cms-select",
          label: "展示方式",
          required: "true",
          options: [
            { label: "真实数据", value: 0 },
            { label: "美化数据", value: 1 },
          ],
        },
        {
          field_type: "div",
          class: "cms-form-item",
          children: [
            { field_type: "label", text: "访问量" },
            {
              field_type: "div",
              class: "flex-row",
              children: [
                {
                  field_type: "label",
                  style: "font-weight: normal;margin: 0 10px 0 0;",
                  text: "基数",
                },
                {
                  field_type: "el-input-number",
                  name: "live[visit_num]",
                  style: "padding: 0;",
                  controls: false,
                  default: 1,
                },
                {
                  field_type: "label",
                  style: "font-weight: normal;margin: 0 10px;",
                  text: "放大倍数范围",
                },
                {
                  field_type: "el-input-number",
                  name: "live[visit_rand_min]",
                  controls: false,
                  default: 1,
                },
                {
                  field_type: "label",
                  style: "font-weight: normal;margin: 0 10px;",
                  text: "~",
                },
                {
                  field_type: "el-input-number",
                  name: "live[visit_rand_max]",
                  controls: false,
                  default: 1,
                },
              ],
            },
          ],
        },
        {
          field_type: "div",
          class: "cms-form-item",
          children: [
            { field_type: "label", text: "点赞量" },
            {
              field_type: "div",
              class: "flex-row",
              children: [
                {
                  field_type: "label",
                  style: "font-weight: normal;margin: 0 10px 0 0;",
                  text: "基数",
                },
                {
                  field_type: "el-input-number",
                  name: "live[praise_num]",
                  style: "padding: 0;",
                  controls: false,
                  default: 1,
                },
                {
                  field_type: "label",
                  style: "font-weight: normal;margin: 0 10px;",
                  text: "放大倍数范围",
                },
                {
                  field_type: "el-input-number",
                  name: "live[praise_rand_min]",
                  controls: false,
                  default: 1,
                },
                {
                  field_type: "label",
                  style: "font-weight: normal;margin: 0 10px;",
                  text: "~",
                },
                {
                  field_type: "el-input-number",
                  name: "live[praise_rand_max]",
                  controls: false,
                  default: 1,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "公式系数设置",
      field_type: "cms-collapse",
      is_show: "by_variable",
      is_show_variable: 1,
      children: [
        {
          name: "live[base_play]",
          field_type: "cms-input",
          label: "xxx人在看系数",
          placeholder: "请输入在看系数",
        },
        {
          name: "live[base_popularity]",
          field_type: "cms-input",
          label: "xxx人气系数",
          placeholder: "请输入人气系数",
        },
        {
          name: "live[base_hot]",
          field_type: "cms-input",
          label: "xxx热度系数",
          placeholder: "请输入热度系数",
        },
      ],
    },
    {
      label: "分享设置",
      field_type: "cms-collapse",
      children: [
        {
          name: "model[share_cover]",
          field_type: "cms-upload",
          label: "分享头图",
        },
        {
          name: "model[share_title]",
          field_type: "cms-input",
          label: "分享标题",
          placeholder: "请输入分享标题",
        },
        {
          name: "model[share_intro]",
          field_type: "cms-input",
          label: "分享描述",
          placeholder: "请输入分享描述",
          type: "textarea",
        },
      ],
    },
    {
      label: "主持人设置",
      field_type: "cms-collapse",
      children: [
        {
          name: "live[host_name]",
          field_type: "cms-input",
          label: "主持人昵称",
          placeholder: "请输入主持人昵称",
          default: "观察君",
        },
        {
          name: "live[host_cover]",
          field_type: "cms-upload",
          label: "主持人头像",
        },
      ],
    },
  ],
};
