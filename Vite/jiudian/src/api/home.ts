import { http } from "@/utils";
import { ContentTypeEnum } from "@/enums/httpEnum";

interface IHomeParams {
    token: string;
}

enum Api {
    HOME = `/home/index`,
}

export function homeApi(params?: IHomeParams): Promise<unknown> {
    return http({
        method: 'GET',
        url: Api.HOME
    });
}
