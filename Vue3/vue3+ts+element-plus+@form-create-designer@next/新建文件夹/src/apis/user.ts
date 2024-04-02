import { useRouter as UseRouter, useRoute as UseRoute } from 'vue-router';

import { ContentTypeEnum } from '@/enums/http';
import { http } from '@/utils/index';
import { $ElMessage } from './module';

export const useRoute = UseRoute;
export const useRouter = UseRouter;
export const $msg = $ElMessage;

enum Api {
  USR_LOGIN = `/auto/usrLogin`,
  YZM_SEND = `/auto/yzmSend`,
  USR_INFO = `/auto/usrInfo`,
  USR_REFRESH = `/auto/usrRefresh`,
  USR_GETDO = `/auto/usrGet.do`,
  USRS_GETDO = `/auto/usrsGet.do`,
  USR_ADDDO = `/auto/usrAdd.do`,
  USR_EDITDO = `/auto/usrEdit.do`,
}

/**
 * 用户登录
 * @param data
 * @returns josn
 */
export function usrLoginApi(data?: any): Promise<any> {
  return http({
    method: 'POST',
    url: Api.USR_LOGIN,
    data,
  });
}

/**
 * 获取验证吗
 * @param data
 * @returns josn
 */
export function yzmSendApi(data?: any): Promise<any> {
  return http({
    method: 'POST',
    url: Api.YZM_SEND,
    data,
  });
}

/**
 * 获取用户信息
 * @param Authorization
 * @returns josn
 */
export function usrInfoApi(params: any, _Authorization?: IRefresParams): Promise<unknown> {
  return http({
    method: 'GET',
    url: Api.USR_INFO,
    params,
    headers: {
      'Content-Type': ContentTypeEnum.FORM_URLENCODED,
    },
  });
}

/**
 * 刷新token
 * @returns token
 */
export function usrRefreshApi(): Promise<unknown> {
  return http({
    method: 'POST',
    url: Api.USR_REFRESH,
  });
}

/**
 * 获取用户信息
 * @param data
 * @returns josn
 */
export function usrGetDoApi(data: any): Promise<unknown> {
  return http({
    method: 'POST',
    url: Api.USR_GETDO,
    data,
  });
}

/**
 * 获取用户列表
 * @param data
 * @returns josn
 */
export function usrsGetDoApi(data: any): Promise<unknown> {
  return http({
    method: 'POST',
    url: Api.USRS_GETDO,
    data,
  });
}

/**
 * 新增用户
 * @param data
 * @returns josn
 */
export function usrAddDoApi(data: any): Promise<unknown> {
  return http({
    method: 'POST',
    url: Api.USR_ADDDO,
    data,
  });
}

/**
 * 编辑用户
 * @param data
 * @returns josn
 */
export function usrEditDoApi(data: any): Promise<unknown> {
  return http({
    method: 'POST',
    url: Api.USR_EDITDO,
    data,
  });
}
