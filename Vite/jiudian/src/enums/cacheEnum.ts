type STORE = string | number | null | undefined | unknown;

export interface BasicKeys {
    STORE_KEY: STORE;
}

export const TOKEN_KEY = '__TOKEN__STORE__';
export const PREFIX_KEY = 'Bearer';
export const USERS_KEY = '__USERS__STORE__';
