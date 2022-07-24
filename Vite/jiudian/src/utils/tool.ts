import { is } from './index';

export const setCheck = (arr: any, check = false) => {
    if (!is.isArray(arr)) {
        return [];
    }
    return arr.map((o: any) => {
        o.check = check;
        return o;
    });
};

export const getCheck = (arr: any) => {
    if (!is.isArray(arr)) {
        return [];
    }
    return arr.filter((o: any) => {
        return o.check;
    });
};

export const getCheckFalse = (arr: any) => {
    if (!is.isArray(arr)) {
        return [];
    }
    return arr.filter((o: any) => {
        return !o.check;
    });
};