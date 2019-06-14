import * as React from "react";
import {ICountry} from "models/Country";
import {defaultLog} from "../../config/ConfigLog4j";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import Icon from "@material-ui/core/Icon/Icon";

export interface ICountryCardProps {
    country: ICountry;
    api: any;
}

const CountryCard = (props: ICountryCardProps) => {
    const {attributes} = props.country;

    const handleOnDelete = () => {
        props.api.destroy(props.country.id)
            .then((response: any) => {
                defaultLog.info('destroyed');
            })
            .catch((response: any) => {
                defaultLog.error(response);
            });
    };

    return (
        <Card>
            <CardContent>
                <Typography variant={"h6"}>{attributes.name}</Typography>
                <Typography variant={"body1"}>Code2: {attributes.code2} </Typography>
                <Typography variant={"body1"}>Code3: {attributes.code3} </Typography>

                <Button href={'/dashboard/countries/' + props.country.id}>Edit</Button>

                <Button onClick={handleOnDelete}><Icon>delete</Icon></Button>
            </CardContent>
        </Card>
    )
};

export default CountryCard;
