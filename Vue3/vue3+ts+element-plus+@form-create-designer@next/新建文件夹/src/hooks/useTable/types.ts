import type { Ref } from 'vue';

export interface RuleFormType<T = any> {
  keyword?: string;
}

export interface ResponseDataType<T = any> {
  list: T;
  total: Ref<number>;
}

export interface ExportLinkType {
  link: string;
}

export interface MessageType {
  GET_DATA_IF_FAILED?: string;
  GET_DATA_IF_SUCCEED?: string;
  EXPORT_DATA_IF_FAILED?: string;
  EXPORT_DATA_IF_SUCCEED?: string;
}

export interface TableReturn<T = any> {
  data: T[];
  total: Ref<number>;
}

export interface OptionsType<T = any> {
  requestError?: () => void;
  requestSuccess?: () => void;
  exportError?: () => void;
  exportSuccess?: () => void;
  filterPar?: Ref<T>;
  transformFn?: (...args) => TableReturn;
  exportRequestFn?: (...args: any) => Promise<ResponseDataType<ExportLinkType>>;
  message?: MessageType;
  preRequest?: Function;
  immediate?: boolean;
}
