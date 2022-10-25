import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './Cards.module.css';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import CountUp from 'react-countup';
import cx from 'classname';

let listCurrentData = {};

const Cards = () => {
    const [listInfoCurrent, setCurrentData] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            setCurrentData(await loadCurrenData());
        }

        loadData();
    }, []);

    const loadCurrenData = async () => {
        try {
            const currentData = await axios.get('https://api.covidtracking.com/v1/us/current.json');
            listCurrentData = currentData.data[0];

            return listCurrentData;
        } catch (error) {
            console.log(error);
        }
    }

    function totalCases(positive, degatives, death) {
        const total = positive + degatives + death;

        return total;
    }

    function validateInfo(data) {
        const nullMessage = "Sin Informacion";

        if (data == null) {
            console.log("si entre al if")
            data = nullMessage;
        }

        return data;
    }

    const newRecovered = listCurrentData.recoveredm == null ? "Sin Informacion" : listCurrentData.recovered;

    return (
        <div className={styles.container}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item component={Card} xs={12} md={3} xl={3} className={cx(styles.cards)}>
                    <CardContent>
                        <Typography variant='h5'>
                            <CountUp start={0} end={totalCases(listCurrentData.positive, listCurrentData.negative, listCurrentData.pending)} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom >Total Cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} xl={3} className={cx(styles.cards)}>
                    <CardContent>
                        <Typography variant='h5'>
                            <CountUp start={0} end={listCurrentData.death} duration={2.5} separator="," />
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
                            <CountUp start={0} end={listCurrentData.positive} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom >Positive Cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} xl={3} className={cx(styles.cards, styles.negative)}>
                    <CardContent>
                        <Typography variant='h5'>
                            <CountUp start={0} end={listCurrentData.negative} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom >Negative Cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} xl={3} className={cx(styles.cards, styles.pending)}>
                    <CardContent>
                        <Typography variant='h5'>
                            <CountUp start={0} end={listCurrentData.pending} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom >Pending Cases</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;
