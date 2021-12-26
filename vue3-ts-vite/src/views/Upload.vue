<template>
  <div class="upload">
    <h2>文件上传类型判断</h2>

    <div ref="drag" class="drag">
      <input type="file" name="file" @change="change" />
    </div>

    <button class="btn" @click="upload">上 传</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from "vue";

export default defineComponent({
  name: "Upload",
  setup() {
    // const drag: HTMLDivElement = ref(null);
    const drag: any = ref(null);
    const form: any = reactive({
      file: null,
    });

    const fileReader = (blob: Blob) => {
      return new Promise((resolve, reject) => {
        const reader: any = new FileReader();
        reader.readAsBinaryString(blob);
        (reader.onload = (ret: any) => {
          
          console.log(reader.result);
          console.log(reader.result.split(''));
          console.log(reader.result.split('').map((o: { charCodeAt: () => any; }) => o.charCodeAt()));
          console.log(reader.result.split('').map((o: { charCodeAt: () => any; }) => o.charCodeAt()).map((o: { toString: (arg0: number) => string; }) => o.toString(16).padStart(2, '0')));
          // console.log(reader.result.split('').map((o: { charCodeAt: () => any; }) => o.charCodeAt()).map((o: { toString: (arg0: number) => { (): any; new(): any; padStart: { (arg0: number, arg1: string): { (): any; new(): any; toUpperCase: { (): any[]; new(): any; }; }; new(): any; }; }; }) => o.toString(16).padStart(2, '0').toUpperCase().join()));

          const res = reader.result.split('').map((o: { charCodeAt: () => any; }) => o.charCodeAt().toString(16).padStart(2, '0'));
          console.log(res);
          console.log(res.join(' ').toUpperCase());
          resolve(res.join(' ').toUpperCase());
        }),
          (reader.onerror = (err: any) => {
            reject(err);
          });
      });
    };

    const isPng = async (file: { slice: (arg0: number, arg1: number) => Blob; }) => await fileReader(file.slice(0, 8)) == '89 50 4E 47 0D 0A 1A 0A';
    const isJpg = async (file: { slice: (arg0: number, arg1: number) => Blob; size: any; }) => {
      const start = await fileReader(file.slice(0, 2));
      const end = await fileReader(file.slice(-2, file.size));
      return 'FF D8' == start && 'FF D9' == end;
    } 
    const isGif = async (file: { slice: (arg0: number, arg1: number) => Blob; }) => {
      const ret = await fileReader(file.slice(0, 6));
      return '47 49 46 38 39 61'  == ret || '47 49 46 38 37 61'  == ret ;
    }


    const change = async (e: { target: { files: [any]; }; }) => {
      const [file] = e.target.files;
      // console.log(file);
      if (file) {
        form.file = file;
        if (!await isPng(file)) {
          alert('请上传PNG格式的图片！');
        } else {
          alert('OK 格式正确！');
        }
      }
    };
    const upload = () => {
      const data = new FormData();
      data.append("file", form.file);
      console.log(data);
    };

    onMounted(() => {
      drag.value.addEventListener(
        "dragover",
        (e: { preventDefault: () => void }) => {
          drag.value.style.borderColor = "#409eff";
          e.preventDefault();
        },
        false
      );
      drag.value.addEventListener(
        "dragleave",
        (e: { preventDefault: () => void }) => {
          drag.value.style.borderColor = "#eee";
          e.preventDefault();
        },
        false
      );
      drag.value.addEventListener(
        "drop",
        (e: { preventDefault: () => void }) => {
          drag.value.style.borderColor = "#42b983";
          // e.preventDefault();
        },
        false
      );
    });

    return {
      drag,
      change,
      upload,
      ...toRefs(form),
    };
  },
});
</script>

<style lang="less">
.upload {
  padding: 50px 30%;
  .drag {
    margin: 50px;
    text-align: center;
    border: 2px dashed #eee;
    poniter-events: revert;
    &:hover {
      // border-color: #409eff;
      cursor: pointer;
    }
    > input {
      width: 100%;
      line-height: 100px;
    }
  }
  .btn {
    padding: 12px 20px;
    font-size: 16px;
    line-height: 1;
    color: white;
    border: 1px solid #409eff;
    border-radius: 3px;
    background: #409eff;
    user-select: none;
    cursor: pointer;
  }
}
</style>
