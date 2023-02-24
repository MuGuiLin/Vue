type type = 'success' | 'warning' | 'info' | 'error';

export interface iAuthType {
  Authorization: string;
}

export interface iMessageType {
  message: string | Function;
  type: type;
  icon?: string;
  dangerouslyUseHTMLString?: boolean;
  customClass?: string;
  duration?: number;
  showClose?: boolean;
  center?: boolean;
  onClose?: Function;
  offset?: string | HTMLElement;
  grouping?: boolean;
}
