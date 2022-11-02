import { EnvType } from '../types/env.config';

const config: EnvType = {
    env: `localhost`,
    localhost: {
        __URL__: `/api`,
        __NET__: `https://www.xxx.com`,
        __API__VERSION: `/api/v1`,
        __APPID__: ``,
    },
    development: {
        __URL__: `https://www.xxx.com`,
        __NET__: location.origin,
        __API__VERSION: `/api/v1`,
        __APPID__: ``,
    },
    test: {
        __URL__: `https://www.xxx.com`,
        __NET__: location.origin,
        __API__VERSION: `/api/v1`,
        __APPID__: ``,
    },
    production: {
        __URL__: `https://www.xxx.com`,
        __NET__: location.origin,
        __API__VERSION: `/api/v1`,
        __APPID__: ``,
    }
};

switch (location.hostname || document.domain) {
    case `det-www.xxx.com`:
        config.env = `development`;
        break;
    case `test-www.xxx.com`:
        config.env = `test`;
        break;
    case `www.xxx.com`:
        config.env = `production`;
        break;
}

export default config[config.env] as EnvType as any;
