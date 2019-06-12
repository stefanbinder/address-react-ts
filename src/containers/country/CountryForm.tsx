import * as React from "react";
import {Row, Col} from "../../components/grid";
import TextField from "../../components/form/TextField";
import {useState} from "react";

export interface ICountryFormProps {
    prefix?: string;

}

const CountryForm = (props: ICountryFormProps) => {

    const [ prefix ] = useState(props.prefix || '');

    return (
        <Row spacing={2}>
            <Col xs={3}>
                <TextField fieldProps={{name: `${prefix}attributes.name`}}
                           textFieldProps={{placeholder: 'Name', title: 'Name'}}
                />
            </Col>
            <Col xs={3}>
                <TextField fieldProps={{name: `${prefix}attributes.code2`}}
                           textFieldProps={{placeholder: 'Code 2', title: 'Code 2'}}
                />
            </Col>
            <Col xs={3}>
                <TextField fieldProps={{name: `${prefix}attributes.code3`}}
                           textFieldProps={{placeholder: 'Code 3', title: 'Code 3'}}
                />
            </Col>
        </Row>
    );

};

export default CountryForm;
