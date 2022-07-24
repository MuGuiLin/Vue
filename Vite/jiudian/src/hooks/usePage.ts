import { useRouter, useRoute } from 'vue-router';
import type { RouteLocationRaw, Router } from 'vue-router';

import { PageEnum } from '../enums/pageEnum';
import { isString } from '../utils/is';

export type RouteLocationRawEx = Omit<RouteLocationRaw, 'path'> & { path: PageEnum };

let router: Router;

function handleError(e: Error) {
    console.error(e);
};

export function usePar() {
    return useRoute();
};

export function useGo(_router?: Router | any) {
    if (!_router) {
        router = useRouter();
    }
    const { push, replace } = _router || router;

    function go(opt: PageEnum | RouteLocationRawEx | string | any = PageEnum.BASE_HOME, isReplace = true) {
        if (!opt) {
            return;
        }
        if (isString(opt)) {
            isReplace ? replace(opt).catch(handleError) : push(opt).catch(handleError);
        } else {
            const o = opt as RouteLocationRaw;
            isReplace ? replace(o).catch(handleError) : push(o).catch(handleError);
        }
    }
    return go;
};

export const back = () => {
    const { back } = router;
    if (router && back) {
        back();
    } else {
        window.history.back();
    }
};

export const reload = (time = 3000) => {
    setTimeout(() => {
        location.reload();
    }, time);
};