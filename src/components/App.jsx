import React, { Component } from "react";
import styles from './App.module.scss';
import Header from './Header.js';
import EmployeeStats from './EmployeeStats.js';
import '../styles/style.css';



export default class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <div className="page-content">
                    <Header />
                    <EmployeeStats />
                </div>
            </div>
        );
    }
}
