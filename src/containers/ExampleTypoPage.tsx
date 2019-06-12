import React from 'react';
import {Button, Typography} from "@material-ui/core";
import DashboardLayout from "layouts/DashboardLayout";

const ExampleTypoPage: React.FC = props => {
    return (
        <DashboardLayout title={'Typography'}>
            <Typography variant={'h1'}>Headline 1</Typography>
            <Typography variant={'h2'}>Headline 2</Typography>
            <Typography variant={"body1"}>
                This is a longer text... yeah I am!
            </Typography>
            <Typography variant={'h3'}>Headline 3</Typography>
            <Typography variant={"caption"}>
                This is a longer text... yeah I am!
            </Typography>
            <Typography variant={'h4'}>Headline 4</Typography>
            <Typography variant={"overline"}>
                Overline variant...
            </Typography>
            <Typography variant={'h5'}>Headline 5</Typography>
            <Typography variant={'h6'}>Headline 6</Typography>

            <Button color={'primary'} variant={'text'}>Primary Button text</Button>
            <Button color={'secondary'} variant={'text'}>Secondary Button text</Button>

            <Button color={'primary'} variant={'outlined'}>Primary Button outlined</Button>
            <Button color={'secondary'} variant={'outlined'}>Secondary Button outlined</Button>

            <Button color={'primary'} variant={'contained'}>Primary Button contained</Button>
            <Button color={'secondary'} variant={'contained'}>Secondary Button contained</Button>

        </DashboardLayout>
    );
};

export default ExampleTypoPage;
