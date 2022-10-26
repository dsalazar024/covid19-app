import React from 'react';
import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import CountUp from 'react-countup';
import cx from 'classname';

const Cards = ({ data }) => {

    const cardData = (data[0] ? (
        <Grid container spacing={2} justifyContent="center">
            <Grid item component={Card} xs={12} md={3} xl={3} className={cx(styles.cards)}>
                <CardContent>
                    <Typography variant='h5'>
                        <CountUp start={0} end={data[0].positive + data[0].negative + data[0].pending} duration={1.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary" gutterBottom >Casos Totales</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} xl={3} className={cx(styles.cards)}>
                <CardContent>
                    <Typography variant='h5'>
                        <CountUp start={0} end={data[0].death} duration={1.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary" gutterBottom >Muertes</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} xl={3} className={cx(styles.cards)}>
                <CardContent>
                    <Typography variant='h5'>
                        <CountUp start={0} end={data[0].hospitalizedCurrently} duration={1.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary" gutterBottom >Hospitalizados</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} xl={3} className={cx(styles.cards, styles.positive)}>
                <CardContent>
                    <Typography variant='h5'>
                        <CountUp start={0} end={data[0].positive} duration={1.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary" gutterBottom >Casos Positivos</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} xl={3} className={cx(styles.cards, styles.negative)}>
                <CardContent>
                    <Typography variant='h5'>
                        <CountUp start={0} end={data[0].negative} duration={1.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary" gutterBottom >Casos Negativos</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} xl={3} className={cx(styles.cards, styles.pending)}>
                <CardContent>
                    <Typography variant='h5'>
                        <CountUp start={0} end={data[0].pending} duration={1.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary" gutterBottom >Casos Pendientes</Typography>
                </CardContent>
            </Grid>
        </Grid>
    ) : null);

    return (
        <div className={styles.container}>
            {cardData}
        </div>
    )
}

export default Cards;
