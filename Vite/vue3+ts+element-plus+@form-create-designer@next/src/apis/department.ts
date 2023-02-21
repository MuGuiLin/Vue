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
  DEP_NAMES_GETDO = `/auto/depNamesGet.do`,
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
 * 获取部门管理列表
 * @param data
 * @returns josn
 */
export function depsGetDoApi(data: any): Promise<unknown> {
  return http({
    method: 'POST',
    url: Api.DEPS_GETDO,
    data,
  });
}

/**
 * 获取部门下拉列表
 * @param data
 * @returns josn
 */
export function depNamesGetApi(data: any): Promise<unknown> {
  return http({
    method: 'POST',
    url: Api.DEP_NAMES_GETDO,
    data,
  });
}
