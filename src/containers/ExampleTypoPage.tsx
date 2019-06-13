import React from 'react';
import {Button, Typography} from "@material-ui/core";
import DashboardLayout from "layouts/DashboardLayout";
import {Col, Row} from "components/grid";

const ExampleTypoPage: React.FC = props => {
    return (
        <DashboardLayout title={'Typography'} breadcrumbs={[]}>
            <Typography variant={'h1'}>Headline 1</Typography>
            <Typography variant={'h2'}>Headline 2</Typography>
            <Typography variant={"body1"}>
                Body 1: <br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae porttitor nulla, placerat efficitur nibh. Nullam nec ullamcorper lorem. Fusce enim massa, fermentum vel enim id, lobortis venenatis lorem. Nulla ac fermentum arcu. Vestibulum sed dolor facilisis, varius dolor quis, luctus lorem. Maecenas eu mollis libero. Aliquam ac aliquam ipsum. Proin eu orci consequat, tincidunt risus ac, congue purus. Aenean maximus auctor nulla sit amet varius. Etiam ligula leo, luctus ut nulla at, rutrum consectetur lacus. In vestibulum dolor in bibendum congue. Maecenas dictum mattis aliquam. Nulla est orci, sollicitudin ut pulvinar eget, eleifend ac turpis. Etiam euismod bibendum ultrices.
            </Typography>
            <Typography variant={"body2"}>
                Body 2: <br/> Sed id magna at lacus laoreet lacinia. Nunc vel laoreet elit. In bibendum lorem at lobortis ultrices. Nullam nec euismod tellus. Nunc sed purus lorem. Praesent varius sapien non purus posuere posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas non turpis eu dui cursus tincidunt. Mauris rutrum dictum quam, eu sagittis leo egestas eu. Vivamus faucibus, ligula non tincidunt mattis, velit ligula vulputate quam, id eleifend arcu leo non libero. Donec non ipsum nunc. Nunc sapien purus, porttitor vel eros sit amet, tempor vehicula arcu. Sed venenatis vestibulum varius.
            </Typography>
            <Typography variant={'h3'}>Headline 3</Typography>
            <Typography variant={"caption"}>
                Caption: <br/> Aliquam erat volutpat. Aliquam rutrum, massa sit amet luctus facilisis, ex tortor auctor odio, facilisis tristique tellus dui vitae metus.
            </Typography>
            <Typography variant={'h4'}>Headline 4</Typography>
            <Typography variant={"overline"}>
                Overline: <br/> Aliquam erat volutpat. Aliquam rutrum, massa sit amet luctus facilisis, ex tortor auctor odio, facilisis tristique tellus dui vitae metus.
            </Typography>
            <Typography variant={'h5'}>Headline 5</Typography>
            <Typography variant={'h6'}>Headline 6</Typography>

            <Row>
                <Col>
                    <Button color={'primary'} variant={'text'}>Primary Button text</Button>
                    <Button color={'secondary'} variant={'text'}>Secondary Button text</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button color={'primary'} variant={'outlined'}>Primary Button outlined</Button>
                    <Button color={'secondary'} variant={'outlined'}>Secondary Button outlined</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button color={'primary'} variant={'contained'}>Primary Button contained</Button>
                    <Button color={'secondary'} variant={'contained'}>Secondary Button contained</Button>
                </Col>
            </Row>

        </DashboardLayout>
    );
};

export default ExampleTypoPage;
