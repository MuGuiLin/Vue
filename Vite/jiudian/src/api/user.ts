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

export function loginApi(data?: any): Promise<any> {
    return http({
        method: 'POST',
        url: Api.LOGIN,
        data: data || null,
        headers: { "Content-Type": ContentTypeEnum.FORM_DATA },
    });
}

export function getUserApi(Authorization: any): Promise<unknown> {
    return http({
        method: 'GET',
        url: Api.GETUSER,
        headers: {
            Authorization
        },
    });
}

export function refreshApi(data: IRefresParams): Promise<unknown> {
    return http({
        method: 'POST',
        url: Api.REFRESH,
        headers: {
            ...data
        }
    });
}