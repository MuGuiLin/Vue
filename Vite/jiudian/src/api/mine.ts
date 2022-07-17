import { http } from "@/utils";
import { ContentTypeEnum } from "@/enums/httpEnum";

interface IRecordParams {
    page: number;
    pageSize: number;
}

enum Api {
    RECORD = `records/getRechargeRecord`,
    ACTIVETASK = `activeTask/index`,
    ACTIVESIGN = `activeTask/sign`
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



