import { EnvType } from '../types/env.config';

const config: EnvType = {
    env: `localhost`,
    localhost: {
        __URL__: `/api`,
        __NET__: `https://dev-wxh5.xhbigdata.com`,
        __API__VERSION: `/api/v1`,
        __APPID__: `wx8c126cd1d82f6306`,
    },
    development: {
        __URL__: `https://dev-api.xhbigdata.com`,
        __NET__: location.origin,
        __API__VERSION: `/api/v1`,
        __APPID__: `wx8c126cd1d82f6306`,
    },
    test: {
        __URL__: `https://test-api.xhbigdata.com`,
        __NET__: location.origin,
        __API__VERSION: `/api/v1`,
        __APPID__: `wx8c126cd1d82f6306`,
    },
    production: {
        __URL__: `https://api.xhbigdata.com`,
        __NET__: location.origin,
        __API__VERSION: `/api/v1`,
        __APPID__: `wx8f504206a897a7f5`,
    }
};

switch (location.hostname || document.domain) {
    case `dev-wxh5.xhbigdata.com`:
        config.env = `development`;
        break;
    case `test-wxh5.xhbigdata.com`:
        config.env = `test`;
        break;
    case `wxh5.xhbigdata.com`:
        config.env = `production`;
        break;
}

export default config[config.env] as EnvType as any;
