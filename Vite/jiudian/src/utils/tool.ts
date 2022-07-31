import { is } from './index';
import { clientWidth, clientHeight } from './web';

interface IProps {
    ["key"]: any;
};

export const setCheck = (arr: IProps, check = false) => {
    if (!is.isArray(arr)) {
        return [];
    }
    return arr.map((o: any) => {
        o.check = check;
        return o;
    });
};

export const getCheck = (arr: IProps) => {
    if (!is.isArray(arr)) {
        return [];
    }
    return arr.filter((o: any) => {
        return o.check;
    });
};

export const getCheckFalse = (arr: IProps) => {
    if (!is.isArray(arr)) {
        return [];
    }
    return arr.filter((o: any) => {
        return !o.check;
    });
};

export const getImgAttr = (src: string, cb: Function) => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
        // img.naturalHeight;
        cb(img);
    };
};

export const zoomImage = (img: any) => {
    const FitHeight = clientWidth;
    if (img.width > 0 && img.height > 0) {
        if (img.width / img.height >= clientWidth / FitHeight) {
            return (img.width > clientWidth) ? {
                width: clientWidth,
                height: (img.height * clientWidth) / img.width,
            } : {
                width: img.width,
                height: img.height,
            };

        } else {
            return (img.height > FitHeight) ? {
                width: clientWidth,
                height: (img.width * FitHeight) / img.height,
            } : {

                width: img.width,
                height: img.height,
            };
        }
    }
};