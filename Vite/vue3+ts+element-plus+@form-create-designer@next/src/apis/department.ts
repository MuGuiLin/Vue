import { useRouter as UseRouter, useRoute as UseRoute } from 'vue-router';

import { ContentTypeEnum } from '@/enums/http';
import { http } from '@/utils/index';

export const useRoute = UseRoute;
export const useRouter = UseRouter;

interface IRefresParams {
  Authorization: string;
}

enum Api {
  DEPS_GETDO = `/auto/depsGet.do`,
}

/**
 * 获取GET
 * @param params
 * @returns josn
 */
export function getDepsGetDoApi(params: any): Promise<unknown> {
  return http({
    method: 'GET',
    url: Api.DEPS_GETDO,
    params,
  });
}

/**
 * 获取部门列表
 * @param data
 * @returns josn
 */
export function depsGetDoApi(data: any): Promise<unknown> {
  return http({
    method: 'POST',
    url: Api.DEPS_GETDO,
    headers: { 'Content-Type': ContentTypeEnum.FORM_URLENCODED },
    data,
  });
}
