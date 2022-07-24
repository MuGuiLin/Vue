import { http } from "@/utils";

export interface IChaptersParams {
    id: string;
}

export interface IAssistParams {
    comic_id: string;
}

export interface IContentsParams extends IChaptersParams {
    chapterNum: number;
}

export interface IPaginationParams {
    page: number;
    pageSize?: number;
}

export interface ISetItemsParams {
    comicId: string;
    content: string;
    parentId?: string;
}
export interface IStarItemsParams {
    commentId: string;
}
enum Api {
    CHAPTERS = `/comics/getChapters/`,
    PAGINATE = `/comics/getChapterPaginate/`,
    CONTENTS = `/comics/getContents/`,
    DETAILS = `/comics/getDetails/`,
    ASSIST = `/comics/starAssist`,
    GETITEMS = `/comment/getItems/`,
    SETITEMS = `/comment/submitContent`,
    STARITEMS = `/comment/starComment`,
}

/**
 * 获取漫画章节
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
 * 获取漫画章节-分页
 * @param params 
 * @returns 
 */
export function getPaginateApi(params: IChaptersParams | any): Promise<any> {
    return http({
        method: 'GET',
        url: Api.PAGINATE + params,
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

/**
 * 获取漫画详情
 * @param params 
 * @returns josn
 */
export function getDetailsApi(params: IChaptersParams | any): Promise<unknown> {
    return http({
        method: 'GET',
        url: Api.DETAILS + params,
    });
}

/**
 * 漫画-喜欢/助力
 * @param data 
 * @returns josn
 */
export function starAssistApi(data: IAssistParams | any): Promise<unknown> {
    return http({
        method: 'POST',
        url: Api.ASSIST,
        data,
    });
}

/**
 * 获取漫画评论
 * @param params 
 * @returns josn
 */
export function getItemsApi(path: string, params: IPaginationParams | any): Promise<unknown> {
    return http({
        method: 'GET',
        url: Api.GETITEMS + path,
        params,
    });
}

/**
 * 评论漫画
 * @param data 
 * @returns josn
 */
export function setItemsApi(data: ISetItemsParams | any): Promise<unknown> {
    return http({
        method: 'POST',
        url: Api.SETITEMS,
        data,
    });
}

/**
 * 评论点赞
 * @param data 
 * @returns josn
 */
export function starItemsApi(data: IStarItemsParams | any): Promise<unknown> {
    return http({
        method: 'POST',
        url: Api.STARITEMS,
        data,
    });
}