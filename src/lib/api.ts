import axios, {AxiosRequestConfig, Method} from 'axios';
import {useState} from "react";
import {factory} from "../config/ConfigLog4j";
import {IJsonApiIDObject, IJsonApiIndexMeta, IJsonApiLinks} from "../packages/jsonapi-helpers/src/ApiInterfaces";

const log = factory.getLogger('api');

export const http = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

export const httpApi = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
});

/**
 * INTERFACES
 */

interface IBuildApiConfig {
    endpoint: string;
    relationships: string[];
}

export interface IAPI {
    data: any;
    loading: boolean;
    setInitData: (initData: IJsonApiIDObject) => void;
    meta: IJsonApiIndexMeta | undefined;
    links: IJsonApiLinks | undefined;
    index: (axiosConfig?: AxiosRequestConfig) => Promise<any[]>;
    show: (id: number | string, axiosConfig?: AxiosRequestConfig) => Promise<any>;
    create: (createData: IJsonApiIDObject, axiosConfig?: AxiosRequestConfig) => Promise<any>;
    update: (id: number | string, updateData: IJsonApiIDObject, axiosConfig?: AxiosRequestConfig) => Promise<any>;
    destroy: (id: number | string, axiosConfig?: AxiosRequestConfig) => Promise<any>;
    error: any;
    included: any;
    next: () => void;
    prev: () => void;
    first: () => void;
    last: () => void;
}

/**
 *
 * @param config
 * @param id
 */
const buildUrl = (config: IBuildApiConfig, id?: number | string) => {
    let url = config.endpoint[0] === '/' ? config.endpoint : `/${config.endpoint}`;
    url += url[url.length - 1] === '/' ? '' : '/';
    url += id ? id : '';
    return url;
};

/**
 *
 * @param defaultConfig
 */
export const useBuildApi = <T>(defaultConfig: IBuildApiConfig): IAPI => {

    // @ts-ignore
    const [config, setConfig] = useState(defaultConfig);

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [meta, setMeta] = useState<IJsonApiIndexMeta>();
    const [links, setLinks] = useState<IJsonApiLinks>();
    const [included, setIncluded] = useState();
    const [error, setError] = useState();

    const requestIndex = (url: string, method: Method, axiosConfig?: AxiosRequestConfig): Promise<T[]> => {

        return new Promise(async (resolve, reject) => {
            setLoading(true);

            try {
                const response = await httpApi(Object.assign({
                    url,
                    method
                }, axiosConfig));

                setData(response.data.data);
                setMeta(response.data.meta);
                setLinks(response.data.links);
                setIncluded(response.data.included);

                resolve(response.data.data);

                setLoading(false);

            } catch (error) {
                setError(error);
                reject(error);
                setLoading(false);
            }
        });
    };

    const request = (url: string, method: Method, axiosConfig?: AxiosRequestConfig): Promise<T> => {

        return new Promise(async (resolve, reject) => {
            setLoading(true);

            try {
                const response = await httpApi(Object.assign({
                    url,
                    method
                }, axiosConfig));

                setData(response.data.data);
                setMeta(response.data.meta);
                setLinks(response.data.links);
                setIncluded(response.data.included);

                resolve(response.data.data);

                setLoading(false);

            } catch (error) {
                setError(error);
                reject(error);
                setLoading(false);
            }
        });
    };

    const setInitData = (initData: IJsonApiIDObject) => {
        setData(initData);
        setLoading(false);
    };

    const index = (axiosConfig?: AxiosRequestConfig): Promise<T[]> => {
        log.info('Index Resource: ' + config.endpoint);
        return requestIndex(buildUrl(config), 'get', axiosConfig);
    };

    const show = (id: number | string, axiosConfig?: AxiosRequestConfig): Promise<T> => {
        log.info('Show Resource ' + config.endpoint + ' ID: ' + id);
        return request(buildUrl(config, id), 'get', axiosConfig);
    };

    const create = (createData: IJsonApiIDObject, axiosConfig?: AxiosRequestConfig): Promise<T> => {
        log.info('Create Resource ' + config.endpoint);

        const requestData = {
            data: {
                id: createData.id,
                type: createData.type,
                attributes: createData.attributes,
            }
        };

        return request(buildUrl(config), 'post', Object.assign({
            data: requestData
        }, axiosConfig));

    };

    const update = (id: number | string, updateData: IJsonApiIDObject, axiosConfig?: AxiosRequestConfig): Promise<T> => {
        log.info('Update Resource ' + config.endpoint + ' ID: ' + id);

        const requestData = {
            data: {
                id: updateData.id,
                type: updateData.type,
                attributes: updateData.attributes,
            }
        };

        return request(buildUrl(config, id), 'put', Object.assign({
            data: requestData
        }, axiosConfig));

    };

    const destroy = (id: number | string, axiosConfig?: AxiosRequestConfig): Promise<T> => {
        return request(buildUrl(config, id), 'delete', axiosConfig);
    };

    const next = () => {
        return null;
    };
    const prev = () => {
        return null;
    };
    const first = () => {
        return null;
    };
    const last = () => {
        return null;
    };

    return {
        data,
        setInitData,
        meta,
        links,
        index,
        show,
        create,
        update,
        destroy,
        loading,
        error,
        included,
        next,
        prev,
        first,
        last,
    }
};

