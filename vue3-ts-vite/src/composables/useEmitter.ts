import mitt from 'mitt';
import { FormItem } from '../types/formType';

export type Events = {
    // 校验
    validate: undefined | string;
    // from项
    // formitem?: string | number | object;
    formitem: FormItem;
};

const emitter = mitt<Events>();

export {
    emitter
};