import { http } from "@/utils";

export interface IRecordParams {
    page: number;
    pageSize: number;
}

export interface IFeedbackParams {
    content: string;
    phone: string;
}

export interface IHistoryParams {
    history_ids?: Array<string>;
    follow_ids?: Array<string>;
}

enum Api {
    RECORD = `records/getRechargeRecord`,
    ACTIVETASK = `activeTask/index`,
    ACTIVESIGN = `activeTask/sign`,
    FEEDBACK = `feedback/submitContent`,
    HISTORYS = `historys/getItems`,
    HISTORYSOPS = `historys/delRecords`,
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
export function getRecordApi(params?: IRecordParams): Promise<unknown> {
    return http({
        method: 'GET',
        url: Api.RECORD,
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
 * 历史记录-喜欢/删除
 * @param data 
 * @returns josn
 */
export function historysOpsApi(data?: IHistoryParams): Promise<unknown> {
    return http({
        method: 'POST',
        url: Api.HISTORYSOPS,
        data
    });
}