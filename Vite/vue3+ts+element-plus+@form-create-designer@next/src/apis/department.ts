import { useRouter as UseRouter, useRoute as UseRoute } from "vue-router";

import { http } from "@/utils";

export const useRoute = UseRoute;
export const useRouter = UseRouter;

const Api = {
    GET_DEPARTMENT: `/auto/getDepartment`,
    ADD_DEPARTMENT: `/auto/addDepartment`,
}


/**
 * 获取部门列表
 * @param params 
 * @returns josn
 */
export function getDepartmentApi(params) {
    return http({
        method: 'GET',
        url: Api.GET_DEPARTMENT,
        params,
    });
}

/**
 * 新增部门
 * @param data 
 * @returns josn
 */
export function addDepartmentApi(data) {
    return http({
        method: 'POST',
        url: Api.ADD_DEPARTMENT,
        data,
    });
}