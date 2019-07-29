import {useCountryApi} from "models/Country";
import {useEffect} from "react";
import {ITableFilter} from "components/tables/filter-sort-table";

const useCountryFilter = (): ITableFilter => {

    const api$ = useCountryApi({
        relationships: null,
    });

    useEffect(() => {
        api$.index();
    }, [  ]);

    return {
        label: 'Country',
        values: api$.items ? api$.items : [],
        attrDisplay: 'attributes.name',
        attrValue: 'attributes.id',
        attrApply: 'country_id',
    }
};

export default useCountryFilter;
