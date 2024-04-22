import { useRouter as UseRouter, useRoute as UseRoute } from 'vue-router';

import { ContentTypeEnum } from '@/enums/http';
import { http } from '@/utils/index';
import { $ElMessage } from './module';

export const useRoute = UseRoute;
export const useRouter = UseRouter;
export const $msg = $ElMessage;

enum Api {
  DEP_GETDO = `/auto/depGet.do`,
  DEPS_GETDO = `/auto/depsGet.do`,
  DEP_NAMES_GETDO = `/auto/depNamesGet.do`,
  DEP_RELEASEDO = `/auto/depRelease.do`,
}

/**
 * 获取单个部门（表单）
 * @param params
 * @returns josn
 */
export function depGetDoApi(data: any): Promise<unknown> {
  return http({
    method: 'POST',
    url: Api.DEP_GETDO,
    data,
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
export function depNamesGetDoApi(data: any): Promise<unknown> {
  return http({
    method: 'POST',
    url: Api.DEP_NAMES_GETDO,
    data,
  });
}

/**
 * 新增/编辑部门（表单）
 * @param data
 * @returns josn
 */
export function depReleaseDoApi(data: any): Promise<unknown> {
  return http({
    method: 'POST',
    url: Api.DEP_RELEASEDO,
    data,
  });
}
