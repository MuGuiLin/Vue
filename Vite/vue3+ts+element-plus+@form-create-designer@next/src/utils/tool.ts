let itmer: any = null;
export const debounce = (fn: Function, delay: number = 500) => {
  if (typeof fn != 'function') {
    return false;
  }
  if (itmer !== null) clearTimeout(itmer);
  itmer = setTimeout(fn, delay);
};