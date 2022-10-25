import React, { useEffect, useState } from 'react';
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, Grid, Card, TableBody } from '@mui/material';
import { currentDataState } from '../../api/Api';

const TableStates = () => {

    const [currentDataStates, setCurrentDataStates] = useState([]);

    useEffect(() => {
        const fetchMyAPI = async () => {
            const initialDailyData = await currentDataState();

            setCurrentDataStates(initialDailyData);
        };

        fetchMyAPI();
    }, []);

    const columns = [
        { id: 'state', label: 'Nombre', minWidth: 150 },
        { id: 'total', label: 'Casos Totales', minWidth: 50 },
        { id: 'death', label: 'Muertes', minWidth: 50 }, 
        { id: 'positive', label: 'Positivos', minWidth: 50 }, 

    ];

    return (
        <div>
            <Grid container spacing={1} justifyContent="space-evenly">
                <Grid component={Card} item xs={12} md={5.5} xl={5.5} >

                </Grid>
                <Grid item component={Paper} xs={12} md={5.5} xl={5.5}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {currentDataStates
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                {columns.map((column) => {
                                                    const value = row[column.id];
                                                    return (
                                                        <TableCell key={column.id} align={column.align}>
                                                            {value}
                                                        </TableCell>
                                                    );
                                                })}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    )
}
export default TableStates;