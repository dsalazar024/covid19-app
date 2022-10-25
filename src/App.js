import React from 'react';
import Cards from './components/Cards/Cards';
import TableStates from './components/States/TableStates';
import styles from './App.module.css';
import Map from './components/Map/Map';
import { fetchCurrentData } from './api/Api';
import Charts from './components/Chart/Chart';

class App extends React.Component {

    state = {
        data: {}
    }

    async componentDidMount() {
        const data = await fetchCurrentData();

        this.setState({ data });
    }


    render() {

        const { data, country } = this.state;
        return (
            <div container >
                <div>
                    <h1>Covid-App-Genpac</h1>
                    <Cards data={data} />
                </div>
                <div>
                    <TableStates />
                </div>
                <div className={styles.containerChart} >
                    <Charts />
                </div>
            </div>)
    }
}

export default App;