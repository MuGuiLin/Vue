import { http } from "@/utils";
import { ContentTypeEnum } from "@/enums/httpEnum";

interface IRefresParams {
    Authorization: string;
}

enum Api {
    LOGIN = `/public/wechatOAuthLogin`,
    GETUSER = `public/getUser`,
    REFRESH = `public/refresh`
}

/**
 * 微信授权登录
 * @param data 
 * @returns josn
 */
export function loginApi(data?: any): Promise<any> {
    return http({
        method: 'POST',
        url: `${Api.LOGIN}?code=${data.code}`,
        data: data || null,
        headers: { "Content-Type": ContentTypeEnum.FORM_DATA },
    });
}

/**
 * 获取用户信息
 * @param Authorization 
 * @returns josn
 */
export function getUserApi(Authorization: any): Promise<unknown> {
    return http({
        method: 'GET',
        url: Api.GETUSER,
        headers: {
            Authorization
        },
    });
}

/**
 * 刷新token
 * @param Authorization 
 * @returns josn
 */
export function refreshApi(Authorization: IRefresParams): Promise<unknown> {
    return http({
        method: 'POST',
        url: Api.REFRESH,
    });
}