import React, { useEffect, useState } from 'react';
import { TextField, Grid } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { dataPerMonth } from '../../api/Api';

const DateInforData = ({ handleDateChange }) => {

    const [fetchedDateData, setfechedDateData] = useState({});

    useEffect(() => {
        const fetchDateData = async () => {

            setfechedDateData(await dataPerMonth());
        };

        fetchDateData();
    }, [setfechedDateData]);

    console.log(fetchedDateData);

    const [value, setValue] = React.useState(dayjs('2020-01-01T21:11:54'));

    const handleChange = (newValue) => {
        handleDateChange(newValue.format('YYYYMMDD'))
        setValue(newValue);
    };

    return (
        <div>
            <Grid container spacing={0} justifyContent="space-evenly">
                <Grid item xs={12} md={12} xl={12} >
                    <Grid container justifyContent="end">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                                label="Buscar por Fecha"
                                inputFormat="MM/DD/YYYY"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default DateInforData;