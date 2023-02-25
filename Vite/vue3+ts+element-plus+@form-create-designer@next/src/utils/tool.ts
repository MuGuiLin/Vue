import type { IScrollIntoVies } from './types';

let itmer: any = null;
export const debounce = (fn: Function, delay: number = 500) => {
  if (typeof fn != 'function') {
    return false;
  }
  if (itmer !== null) clearTimeout(itmer);
  itmer = setTimeout(fn, delay);
};

export const query = (key: string): string | null => {
  const reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
  const par = window.location.search.substr(1).match(reg);
  return par != null ? unescape(par[2]) : null;
};

let id = 0;
export const uniqueId = (): string => {
  return (
    'F' + Math.random().toString(36).substr(3, 3) + Number(`${Date.now()}${++id}`).toString(36)
  );
};

export const scrollIntoView = (
  dom: HTMLLIElement,
  ops: IScrollIntoVies | any = {
    block: 'center',
    behavior: 'smooth',
  },
) => {
  dom && dom.scrollIntoView(ops);
};

const hexList: string[] = [];
for (let i = 0; i <= 15; i++) {
  hexList[i] = i.toString(16);
}

export const uuid = (): string => {
  let uuid = '';
  for (let i = 1; i <= 36; i++) {
    if (i === 9 || i === 14 || i === 19 || i === 24) {
      uuid += '-';
    } else if (i === 15) {
      uuid += 4;
    } else if (i === 20) {
      uuid += hexList[(Math.random() * 4) | 8];
    } else {
      uuid += hexList[(Math.random() * 16) | 0];
    }
  }
  return uuid.replace(/-/g, '');
};

let unique = 0;
export const suuid = (prefix = ''): string => {
  const time = Date.now();
  const random = Math.floor(Math.random() * 1000000000);
  unique++;
  return prefix + '_' + random + unique + String(time);
};
