import { defineComponent } from 'vue';
import type { RouteRecordRaw, RouteMeta, } from 'vue-router';
export type { RouteRecordRaw, RouteMeta, } from 'vue-router';

export type Component<T = any> =
    | ReturnType<typeof defineComponent>
    | (() => Promise<typeof import('*.vue')>)
    | (() => Promise<T>);

export type Recordable<T = any> = {
    [x: string]: T;
}

// @ts-ignore
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
    name: string;
    meta: RouteMeta;
    component?: Component | string;
    components?: Component;
    children?: AppRouteRecordRaw[];
    props?: Recordable;
    fullPath?: string;
}

export interface MenuTag {
    type?: 'primary' | 'error' | 'warn' | 'success';
    content?: string;
    dot?: boolean;
}

export interface Menu {
    name: string;

    icon?: string;

    path: string;

    paramPath?: string;

    disabled?: boolean;

    children?: Menu[];

    order?: number;

    roles?: RoleEnum[];

    meta?: Partial<RouteMeta>;

    tag?: MenuTag;

    hideMenu?: boolean;
}

export interface MenuModule {
    order?: number;
    menu: Menu;
}

export type AppRouteModule = AppRouteRecordRaw;
