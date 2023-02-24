import type { FormInstance } from 'element-plus';
import type { RuleFormType, TableReturn, ResponseDataType } from './types';

import { ref, watch, onMounted } from 'vue';
import { debounce } from '@/utils/index';

export const useTable = <T extends (_args: any) => Promise<ResponseDataType<any>> | any>(
  requestApi: T,
  ruleForm: RuleFormType,
) => {
  const formRef = ref();

  const loading = ref(true);

  const page = ref(1);

  const total = ref(1);

  const keyword = ref('');

  const pageSize = ref(10);

  const data = ref<TableReturn[]>([]);

  const request = (props = {}): Promise<any> => {
    return new Promise((resolve, reject) => {
      loading.value = true;
      debounce(async () => {
        try {
          const { data: o }: ResponseDataType | any = await requestApi({
            ...props,
            ...ruleForm,
            page: page.value,
            pageSize: pageSize.value,
          });
          data.value = o.list || [];
          total.value = o.total || 1;
          resolve(o);
        } catch (err) {
          reject(err);
          throw new Error(`API请求出错：${err}`);
        } finally {
          loading.value = false;
        }
      });
    });
  };

  const reset = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.resetFields();
  };

  const submit = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.validate(async (valid) => {
      if (valid) {
        page.value = 1;
        request();
      }
    });
  };

  watch([page, pageSize], () => {
    request();
  });

  onMounted(() => {
    request();
  });

  return {
    data,
    page,
    total,
    loading,
    keyword,
    pageSize,
    formRef,
    reset,
    submit,
    request,
  };
};
