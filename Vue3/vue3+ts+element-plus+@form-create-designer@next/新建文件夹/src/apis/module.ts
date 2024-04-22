import { ElMessage } from 'element-plus';
import type { iMessageType } from './types';

export const $ElMessage = (ops: iMessageType | any, time?: number) => {
  if (time) {
    setTimeout(() => {}, time || 3000);
  } else {
    ElMessage(ops);
  }
};
