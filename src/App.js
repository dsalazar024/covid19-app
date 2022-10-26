import React from 'react';
import TableStates from './components/States/TableStates';
import styles from './App.module.css';
import Charts from './components/Chart/Chart';
import Cards from './components/Cards/Cards';
import DateInforData from './components/DatePicker/DatePicker';
import { dataPerMonth } from './api/Api';

class App extends React.Component {

    state = {
        data: {},
        date: ''
    }

    async componentDidMount() {
        const data = await dataPerMonth();

        this.setState({data: data});
    }

    handleDateChange = async (date) => {
        const fetchedData = await dataPerMonth(date);

        this.setState({data: [fetchedData], date: date});
    }

    render() {
        const { data } = this.state;
        return (
            <div container >
                <div>
                    <h1>Covid Tracker - Estados Unidos</h1>
                    <Cards data={data}/>
                </div>
                <div>
                    <DateInforData handleDateChange={this.handleDateChange} />
                </div>
                <div className={styles.containerChart}>
                    <TableStates />
                </div>
                <div className={styles.containerChart} >
                    <Charts />
                </div>
            </div>)
    }
}
export default App;