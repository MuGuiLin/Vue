import { InjectionKey } from "vue";
import { Rules, Values } from "async-validator";

// 类型别名 导出
export type FormData = {
    model: Record<string, unknown>
    rules?: Rules
}

export type FormItem = {
    validate: () => Promise<Values>
}

export type Form = {
    // 表单所有项
    validate: (cb: (isValid: boolean) => void) => void;
}

export const icKey: InjectionKey<FormData> = Symbol('form-data');

