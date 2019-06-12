import {IJsonApiIDObject} from "./ApiInterfaces";

export const getIdObject = (type: string, id?: number): IJsonApiIDObject => {
    const idObject: IJsonApiIDObject = {
        type,
        attributes: {},
    };

    if( typeof id !== 'undefined' && id !== null ) {
        idObject.id = id;
    }

    return idObject;
};
