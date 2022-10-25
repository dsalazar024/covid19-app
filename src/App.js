import React from 'react';
import Cards from './components/Cards/Cards';
import TableStates from './components/States/TableStates';
import styles from './App.module.css';
import Charts from './components/Chart/Chart';

class App extends React.Component {

    render() {
        return (
            <div container >
                <div>
                    <h1>Covid-App-Genpac</h1>
                    {/* <Cards /> */}
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