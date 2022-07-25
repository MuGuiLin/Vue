declare const WeixinJSBridge: any;
declare const parent: any;

export interface IPayProps {
    appId: string;
    timeStamp: string;
    nonceStr: string;
    package: string;
    signType: string;
    paySign: string;
};

export const onBridgeReady = (type: string = 'hideToolbar') => {
    try {
        WeixinJSBridge.call(type); // showToolbar、hideOptionMenu、showOptionMenu、closeWindow

        // parent.WeixinJSBridge.call('closeWindow');

        // WeixinJSBridge.on(type, (args) => {});
    } catch (err) {
        console.log(err);
    }
};

export const addEvents = (obj: any, evt: any, fun: Function) => {
    if (obj.attachEvent) {
        obj.attachEvent(`on${evt}`, fun);
    } else {
        obj.addEventListener(evt, fun, false);
    }
};

export const request = (par: IPayProps, cb: Function): void => {
    try {
        WeixinJSBridge.invoke('getBrandWCPayRequest', { ...par }, (res: any) => cb && cb(res));
    } catch (err) {
        cb && cb(err);
    }
};

try {
    if (WeixinJSBridge in window) {
        onBridgeReady();
    } else {
        addEvents(document, 'WeixinJSBridgeReady', onBridgeReady);
    };
} catch (err) {
    console.log(err);
}
