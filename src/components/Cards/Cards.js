import React, { useEffect, useState } from 'react';

import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { currentData } from '../../api/Api';
import CountUp from 'react-countup';
import cx from 'classname';

const Cards = () => {

    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchMyAPI = async () => {
            const initialDailyData = await currentData();

            setDailyData(initialDailyData);
        };

        fetchMyAPI();
    }, []);

    const cardData = (dailyData[0] ? (
        <Grid container spacing={2} justifyContent="center">
            <Grid item component={Card} xs={12} md={3} xl={3} className={cx(styles.cards)}>
                <CardContent>
                    <Typography variant='h5'>
                    </Typography>
                    <Typography color="textSecondary" gutterBottom >Total Cases</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} xl={3} className={cx(styles.cards)}>
                <CardContent>
                    <Typography variant='h5'>
                        <CountUp start={0} end={dailyData[0].death} duration={2.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary" gutterBottom >Deceased</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} xl={3} className={cx(styles.cards)}>
                <CardContent>
                    <Typography variant='h5'> { } </Typography>
                    <Typography color="textSecondary" gutterBottom >Recovered</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} xl={3} className={cx(styles.cards, styles.positive)}>
                <CardContent>
                    <Typography variant='h5'>
                        <CountUp start={0} end={dailyData[0].positive} duration={2.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary" gutterBottom >Positive Cases</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} xl={3} className={cx(styles.cards, styles.negative)}>
                <CardContent>
                    <Typography variant='h5'>
                        <CountUp start={0} end={dailyData[0].negative} duration={2.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary" gutterBottom >Negative Cases</Typography>
                </CardContent>
            </Grid>
            <Grid item component={Card} xs={12} md={3} xl={3} className={cx(styles.cards, styles.pending)}>
                <CardContent>
                    <Typography variant='h5'>
                        <CountUp start={0} end={dailyData[0].pending} duration={2.5} separator="," />
                    </Typography>
                    <Typography color="textSecondary" gutterBottom >Pending Cases</Typography>
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
