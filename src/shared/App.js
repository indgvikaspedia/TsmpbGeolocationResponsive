// import React from './globals'
import { Component } from 'react'
import routes from './routes'
import { Route, Switch } from 'react-router-dom'
import NoMatch from './NoMatch'
import Footer from './components/footer/Footer'
import WebHeader from './components/header/WebHeader'
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/medicinalplants/Header'
import HomePage from './components/tsmpb/HomePage'
import TSMPBHeader from './components/tsmpb/header/TSMPBHeader'
import HomePageCarousel from './components/tsmpb/header/HomePageCarousel'
import TSMPBFooter from './components/tsmpb/header/TSMPBFooter'

// class App extends Component {
const App = () => {
    const [sideWidth, setSideWidth] = useState(0);
    const [param, setParam] = useState(false);

    useEffect(() => {
        var value = document.getElementById('app').clientWidth;
        setSideWidth(value);
    }, []);

    useEffect(() => {
        if (window.ReactNativeWebView) {
            if(param == false)
                setParam(true);
            // alert('WEB HEADER -->>> '+param);
        }
        else {
            // alert('ELSE CASE')
        }
    }, [param])
    // render() {
    return (
        <div>
            {/* <WebHeader /> */}
            <TSMPBHeader/>
            {/* <HomePageCarousel/> */}
            {/* <br></br> */}
            <Switch>
                {routes!=null && routes!=undefined && routes != "undefined" ? routes.map(({ path, exact, component: C, ...rest }) => (
                    <Route
                        key={path}
                        path={path}
                        exact={path}
                        render={() => (
                            <C {...rest}/>
                        )}
                    />
                ))
                :null}
                <Route render={() => <NoMatch />} />
            </Switch>
            <TSMPBFooter/>
            {/* <Footer/> */}
            {/* {param && sideWidth < 800 ? '' : <Footer />} */}
        </div>
    )
    // }
}

export default App