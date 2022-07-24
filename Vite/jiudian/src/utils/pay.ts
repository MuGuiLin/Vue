declare const WeixinJSBridge: any;

export interface IPayProps {
    appId: string;
    timeStamp: string;
    nonceStr: string;
    package: string;
    signType: string;
    paySign: string;
};

export const request = (par: IPayProps, cb: Function): void => {
    try {
        WeixinJSBridge.invoke('getBrandWCPayRequest', { ...par }, (res: any) => cb && cb(res));
    } catch (err) {
        cb && cb(err);
    }
};
