import { http } from "@/utils";

export interface IChaptersParams {
    id: string;
}

export interface IContentsParams extends IChaptersParams {
    chapterNum: number;
}

enum Api {
    CHAPTERS = `/comics/getChapters/`,
    CONTENTS = `/comics/getContents/`,
}

/**
 * 获取漫画章节数据
 * @param params 
 * @returns josn
 */
export function getChaptersApi(params: IChaptersParams | any): Promise<any> {
    return http({
        method: 'GET',
        url: Api.CHAPTERS + params,
    });
}

/**
 * 获取漫画内容
 * @param params 
 * @returns josn
 */
export function getContentsApi(params: IContentsParams | any): Promise<unknown> {
    return http({
        method: 'GET',
        url: Api.CONTENTS + params,
    });
}

