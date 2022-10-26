import React, { useEffect, useState } from 'react';
import { currentData } from '../../api/Api';
import { historicalDatas } from '../../api/Api';
import { Line, Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import styles from './Chart.css';
import cx from 'classname';
import DateInforData from '../DatePicker/DatePicker';


const Charts = () => {
    Chart.register(CategoryScale);

    const [dailyData, setDailyData] = useState({});
    const [historicalData, setHistoricalData] = useState({});

    useEffect(() => {
        const fetchMyAPI = async () => {
            const initialDailyData = await currentData();

            setDailyData(initialDailyData);
        };

        fetchMyAPI();
    }, []);

    useEffect(() => {
        const fetchHistoricalData = async () => {
            const initialHistoricalData = await historicalDatas();

            setHistoricalData(initialHistoricalData);
        };

        fetchHistoricalData();
    }, []);

    const barChart = (
        dailyData[0] ? (
            <Bar
                data={{
                    labels: ['Personas'],
                    datasets: [
                        {
                            label: ['Positive'],
                            backgroundColor: ['rgba(0, 255, 0, 0.5)'],
                            data: [dailyData[0].positive, dailyData[0].negative, dailyData[0].death],
                        },
                        {
                            label: ['Negativos'],
                            backgroundColor: ['rgba(0, 0, 255, 0.5)'],
                            data: [dailyData[0].negative],
                        },
                        {
                            label: ['Muertes'],
                            backgroundColor: ['rgba(255, 0, 0, 0.5)'],
                            data: [dailyData[0].death],
                        },
                    ],
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in ` },
                }}
            />
        ) : null
    );


    const lineChart = (
        historicalData[0] ? (
            <Line
                data={{
                    labels: historicalData.map(({ dateChecked }) => new Date(dateChecked).toLocaleDateString()),
                    datasets: [
                        {
                            data: historicalData.map((data) => data.positive),
                            label: 'Positive',
                            borderColor: 'rgba(0, 255, 0, 0.5)',
                            fill: true,
                        },
                        {
                            data: historicalData.map((data) => data.negative),
                            label: 'Negativos',
                            borderColor: 'rgba(0, 0, 255, 0.5)',
                            fill: true,
                        },
                        {
                            data: historicalData.map((data) => data.death),
                            label: 'Muertes',
                            borderColor: 'rgba(255, 0, 0, 0.5)',
                            fill: true,
                        }
                    ]
                }}
            />
        ) : null
    );

    return (
        <div>
            <Grid container spacing={1} justifyContent="space-evenly">
                <Grid component={Card} item xs={12} md={5.5} xl={5.5} >
                    <CardContent>
                        <Typography variant='h5'> Estadísticas de Casos </Typography>
                        {barChart}
                    </CardContent>
                </Grid>
                <Grid component={Card} item xs={12} md={5.5} xl={5.5}>
                    <CardContent>
                        <Typography variant='h5'> Datos Historicos </Typography>
                        {lineChart}
                    </CardContent>
                    <CardContent>
                        <Grid container justifyContent="end" className={cx(styles.date)}>
                            
                        </Grid>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Charts;