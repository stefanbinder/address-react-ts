
export interface IJsonApiIDObject {
    id?: number | string;
    type: string;
    attributes: any;
    relationships?: any;
    included?: any;
}

export interface IJsonApiIndexResponse {
    data: any[];
    links: IJsonApiLinks;
    meta: IJsonApiIndexMeta;
}

export interface IJsonApiIndexMeta {
    current_page: number;
    from: number;
    to: number;
}

export interface IJsonApiLinks {
    self?: string;
    first?: string;
    last?: string;
    prev?: string;
    next?: string;
}
