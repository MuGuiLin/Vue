import { http } from "@utils";
import { ContentTypeEnum } from "@/enums/httpEnum";

interface ILoginParams {
    username: string;
    password: string;
}

enum Api {
    LOGIN = `?r=user/login`,
    LOGINOUT = `?r=user/loginout`,
    USERINFO = `?r=user/userinfo`,
}

export function loginApi(data: ILoginParams): Promise<unknown> {
    return http.post<any>({
        url: Api.LOGIN,
        data,
        headers: { "Content-Type": ContentTypeEnum.FORM_URLENCODED },
    });
}

export function loginOutApi(): Promise<unknown> {
    return http.get<any>({
        url: Api.LOGINOUT
    });
}

export function userInfoApi(params: any): Promise<unknown> {
    return http.get<any>({
        url: Api.USERINFO,
        params,
    });
}
