interface Bases {
    __URL__: string;
    __NET__: string;
    __API__VERSION?: string;
}

export interface EnvType {
    localhost: Bases;
    development: Bases;
    test: Bases;
    production: Bases;
    [key: string]: any;
}
