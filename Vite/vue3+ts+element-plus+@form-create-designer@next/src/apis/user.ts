import { useRouter as UseRouter, useRoute as UseRoute } from "vue-router";

import { ContentTypeEnum } from "@/enums/http";
import { http } from "@/utils/index";

export const useRoute = UseRoute;
export const useRouter = UseRouter;

interface IRefresParams {
  Authorization: string;
}

enum Api {
  USR_LOGIN = `/auto/usrLogin`,
  USR_INFO = `/auto/usrInfo`,
  USR_REFRESH = `/auto/usrRefresh`,
  USR_GETDO = `/auto/usrsGet.do`,
}

/**
 * 用户登录
 * @param data
 * @returns josn
 */
export function usrLoginApi(data?: any): Promise<any> {
  return http({
    method: "POST",
    url: Api.USR_LOGIN,
    headers: { "Content-Type": ContentTypeEnum.FORM_URLENCODED },
    data,
  });
}

/**
 * 获取用户信息
 * @param Authorization
 * @returns josn
 */
export function usrInfoApi(Authorization: any): Promise<unknown> {
  return http({
    method: "GET",
    url: Api.USR_INFO,
    headers: {
      Authorization,
    },
  });
}

/**
 * 刷新token
 * @param Authorization
 * @returns josn
 */
export function usrRefreshApi(Authorization: IRefresParams): Promise<unknown> {
  return http({
    method: "POST",
    url: Api.USR_REFRESH,
  });
}

/**
 * 获取用户列表
 * @param data
 * @returns josn
 */
export function usrGetDoApi(data: any): Promise<unknown> {
  return http({
    method: "POST",
    url: Api.USR_GETDO,
    headers: { "Content-Type": ContentTypeEnum.FORM_URLENCODED },
    data,
  });
}
