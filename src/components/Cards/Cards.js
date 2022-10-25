import React, { useEffect, useState } from 'react';

import styles from './Cards.module.css';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import CountUp from 'react-countup';
import cx from 'classname';
import { currentData } from '../../api/Api';

const Cards = () => {

    const [listCurrentData, setCurrentData] = useState([]);

    useEffect(() => {
        const fetchMyAPI = async () => {
            const initialDailyData = await currentData();

            setCurrentData(initialDailyData);
        };

        fetchMyAPI();
    }, []);

    function totalCases(positive, degatives, death) {
        const total = positive + degatives + death;

        return total;
    }

    // const newRecovered = listCurrentData[0].recovered == null ? "Sin Informacion" : listCurrentData[0].recovered;


    console.log(listCurrentData);

    return (
        <div className={styles.container}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item component={Card} xs={12} md={3} xl={3} className={cx(styles.cards)}>
                    <CardContent>
                        <Typography variant='h5'>
                            <CountUp start={0} end={totalCases(listCurrentData[0].positive, listCurrentData[0].negative, listCurrentData[0].pending)} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom >Total Cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} xl={3} className={cx(styles.cards)}>
                    <CardContent>
                        <Typography variant='h5'>
                            <CountUp start={0} end={listCurrentData[0].death} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom >Deceased</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} xl={3} className={cx(styles.cards)}>
                    <CardContent>
                        <Typography variant='h5'> {} </Typography>
                        <Typography color="textSecondary" gutterBottom >Recovered</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} xl={3} className={cx(styles.cards, styles.positive)}>
                    <CardContent>
                        <Typography variant='h5'>
                            <CountUp start={0} end={listCurrentData[0].positive} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom >Positive Cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} xl={3} className={cx(styles.cards, styles.negative)}>
                    <CardContent>
                        <Typography variant='h5'>
                            <CountUp start={0} end={listCurrentData[0].negative} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom >Negative Cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} xl={3} className={cx(styles.cards, styles.pending)}>
                    <CardContent>
                        <Typography variant='h5'>
                            <CountUp start={0} end={listCurrentData[0].pending} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom >Pending Cases</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
