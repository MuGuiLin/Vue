import { http } from "@/utils";

export interface IRecordParams {
    page: number;
    pageSize: number;
}

export interface IFeedbackParams {
    content: string;
    phone: string;
}

enum Api {
    RECORD = `records/getRechargeRecord`,
    ACTIVETASK = `activeTask/index`,
    ACTIVESIGN = `activeTask/sign`,
    FEEDBACK = `feedback/submitContent`,
}

/**
 * 活动任务中心页面数据
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

