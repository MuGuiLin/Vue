interface IProps {
    ['key']: any;
};

interface IScrollIntoVies extends IProps {
    block: string;
    behavior: string;
};

export const clientWidth = (
    document.documentElement.clientWidth
    || document.body.clientWidth
);

export const clientHeight = (
    document.documentElement.clientWidth
    || document.body.clientWidth
);

export const query = (key: string): string | null => {
    const reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    const par = window.location.search.substr(1).match(reg);
    return par != null ? unescape(par[2]) : null;
};

let itmer: any = null;
export const clear = (fn: Function, delay: number = 300) => {
    if (typeof fn != "function") {
        return false;
    }
    if (itmer !== null) clearTimeout(itmer);
    itmer = setTimeout(fn, delay);
};

export const scrollIntoView = (dom: HTMLLIElement, ops: IScrollIntoVies | any = {
    block: "center",
    behavior: "smooth",
}) => {
    dom && dom.scrollIntoView(ops);
};
