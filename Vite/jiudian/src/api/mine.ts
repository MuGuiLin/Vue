import { http } from "@/utils";

export interface IPaginationParams {
    page: number;
    pageSize?: number;
}

export interface IFeedbackParams {
    content: string;
    phone: string;
}

export interface IHistoryParams {
    follow_ids?: Array<string>;
    history_ids?: Array<string>;
}

export interface IPayParams {
    chargeId: string;
}

enum Api {

    ACTIVETASK = `activeTask/index`,
    ACTIVESIGN = `activeTask/sign`,
    RECORDS = `records/getRechargeRecord`,
    SPENDS = `records/getConsumeRecord`,
    FEEDBACK = `feedback/submitContent`,
    HISTORYS = `historys/getItems`,
    DELRECORDS = `historys/delRecords`,
    RECHARGE = `recharge/getItems`,
    WXPAYMENT = `recharge/wechatPayment`,
}

/**
 * 活动任务中心
 * @returns josn
 */
export function activeTaskApi(): Promise<any> {
    return http({
        method: 'GET',
        url: Api.ACTIVETASK,
    });
}

/**
 * 签到
 * @returns josn
 */
export function activeSignApi(): Promise<any> {
    return http({
        method: 'POST',
        url: Api.ACTIVESIGN,
    });
}

/**
 * 获取充值记录
 * @param params 
 * @returns josn
 */
export function getRecordApi(params?: IPaginationParams): Promise<unknown> {
    return http({
        method: 'GET',
        url: Api.RECORDS,
        params
    });
}

/**
 * 获取消费记录 
 * @param params 
 * @returns josn
 */
export function getSpendsApi(params?: IPaginationParams): Promise<unknown> {
    return http({
        method: 'GET',
        url: Api.SPENDS,
        params
    });
}

/**
 * 提交反馈内容
 * @param data 
 * @returns josn
 */
export function feedbackApi(data?: IFeedbackParams): Promise<unknown> {
    return http({
        method: 'POST',
        url: Api.FEEDBACK,
        data
    });
}

/**最近阅读/历史
 * 
 * @param params 
 * @returns josn
 */
export function historysApi(params?: any): Promise<unknown> {
    return http({
        method: 'GET',
        url: Api.HISTORYS,
        params
    });
}

/**
 * 喜欢/历史-删除
 * @param data 
 * @returns josn
 */
export function delRecordsApi(data?: IHistoryParams): Promise<unknown> {
    return http({
        method: 'POST',
        url: Api.DELRECORDS,
        data
    });
}

/**
 * 充值选项
 * @returns josn
 */
export function rechargeApi(): Promise<unknown> {
    return http({
        method: 'GET',
        url: Api.RECHARGE
    });
}

export function paymentApi(data: IPayParams): Promise<unknown> {
    return http({
        method: 'POST',
        url: Api.WXPAYMENT,
        data
    });
}