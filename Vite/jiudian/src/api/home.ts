import { http } from "@/utils";

interface IHomeParams {
    token: string;
}

enum Api {
    HOME = `/home/index`,
}

/**
 * 获取首页数据
 * @param params 
 * @returns josn
 */
export function homeApi(params?: IHomeParams): Promise<unknown> {
    return http({
        method: 'GET',
        url: Api.HOME
    });
}
