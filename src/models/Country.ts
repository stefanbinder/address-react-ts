import {useBuildApi} from "lib/api";
import * as Yup from 'yup';
import {IJsonApiIDObject} from "packages/jsonapi-helpers";

export interface ICountry extends IJsonApiIDObject {

    id: number;
    type: string;

    attributes: {
        name: string;
        code2: string;
        code3: string;
    };
}

export const CountryValidation = Yup.object().shape({
    attributes: Yup.object().shape({
        name: Yup.string().required(),
        code2: Yup.string().required().min(2).max(2),
        code3: Yup.string().required().min(3).max(3),
    })
});

// export class Country implements ICountry {
//     public id = 0;
//     public type = 'countries';
//
//     public attributes: {
//         name: string;
//         code2: string;
//         code3: string;
//     };
//     public included: any;
//     public relationships: any;
// }

export const useCountryApi = (config?: any) => useBuildApi<ICountry>(Object.assign({}, {
    type: 'countries',
    endpoint: 'countries',
    relationships: ['states', 'region', 'capital'],
}, config));


// export const useCountryIndex = (params?: any) => {
//
//     const initialState: Country[] = [];
//     const [countries, setCountries] = useState<Country[]>(initialState);
//     const [error, setError] = useState();
//     const [links, setLinks] = useState();
//     const [meta, setMeta] = useState();
//
//     useEffect(() => {
//
//         API.get(endpoint, params)
//             .then(response => {
//                 setCountries(response.data.data);
//                 setLinks(response.data.links);
//                 setMeta(response.data.meta);
//             })
//             .catch(response => {
//                 setError(response.data);
//             });
//
//     }, []);
//
//     const addCountry = (country: Country) => {
//         setCountries([
//             ...countries,
//             country
//         ]);
//     };
//
//     const removeCountry = (country: Country) => {
//         setCountries([
//             ...countries.filter(value => value !== country),
//         ])
//     };
//
//     const updateCountry = (updatedCountry: Country) => {
//
//         API.put(endpoint, updatedCountry.id, { data: updatedCountry })
//             .then( response => {
//                 setCountries([
//                     ...countries.map(existingCountry => existingCountry.id === updatedCountry.id ? updatedCountry : existingCountry)
//                 ]);
//             })
//             .catch(response => {
//                 setError(response.data);
//             });
//
//
//     };
//
//     return {
//         addCountry,
//         countries,
//         error,
//         links,
//         meta,
//         removeCountry,
//         updateCountry,
//     }
// };


// API.post(endpoint, data, params, config);
// API.put(endpoint, id, data, params, config);
// API.delete(endpoint, id, params, config);
