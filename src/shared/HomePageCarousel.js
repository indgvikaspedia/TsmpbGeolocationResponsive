import React, { useState, useEffect } from 'react';

import { Container, Col, Row, UncontrolledCarousel, Button } from "reactstrap";

// import withStyles from 'isomorphic-style-loader/withStyles';

// import styles from '../../../../shared/css/nishkarshforms.css';
import './css/nishkarshforms.css';

import { getLangHelper, setLangHelper } from '../helper/LanguageHandler';

import { screenLanguage } from '../helper/ScreenLanguage';

import { useSelector } from 'react-redux';

const HomePageCarousel = () => {
    const [count, setCount] = useState(1);

    const [btnText, setBtnText] = useState("తెలుగు");
    const [langId, setLangId] = useState(0);

    //const lgn = useSelector(state => state.LanguageReducer.lgn)

    const items = [
        {
            // key: '1',
            // src: 'http://localhost/tsmpb/MedicinalPlant840x550N.jpg',
            src:  require("../images1/MedicinalPlant840x550N.jpg"),
            altText: "banner_Medicianal_plant",
            
        },
        {
            // key: '2',
            // src: 'http://localhost/tsmpb/Subsidy840x550N.jpg',
            src:  require("../images1/Subsidy840x550N.jpg"),
            altText: "banner_Subsidy",
           
        },
        {
            // key: '3',
            // src: 'http://localhost/tsmpb/LocateUtilities840x550.png',
            src:  require("../images1/LocateUtilities840x550.png"),
            altText: "banner_Locate_utilities",
            
        },
        {
            // key: '4',
            // src: 'http://localhost/tsmpb/MarketInfo840x550N.jpg',
            src:  require("../images1/MarketInfo840x550N.jpg"),
            altText: "banner_MarketPlace",
            
        },
        {
            // key: '5',
            // src: 'http://localhost/tsmpb/Alerts840x550N.jpg',
            src:  require("../images1/Alerts840x550N.jpg"),
            altText: "banner_Alert",
           
        },
        {
            // key: '6',
            // src: 'http://localhost/tsmpb/AskanExpert840x550.png',
            src:  require("../images1/AskanExpert840x550.png"),
            altText: "banner_Helpline",
           
        }
    ];

    useEffect(() => {
        let l = getLangHelper();
        console.log("Language from getLangHelper is:", l);
        if (l == 1) {
            setBtnText("English");
        }
        else {
            setBtnText("తెలుగు");
        }
        setLangId(l);
    }, [langId])

    useEffect(() => {
        console.log("Page Language is:", langId);
    }, [langId])
    // useEffect(() => {
    // }, [lgn])


    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
            // console.log(count);
        }, 15000);

        if (count > 6) {
            setCount(1);
        }
        return () => clearInterval(interval);

    }, [count]);

    function langChangeHandel() {
        console.log("langId in Carousel:", langId);
        console.log("Button Text Carousel:", btnText);
        if (langId == 0) {
            setLangId(1);
            setLangHelper(1);
            setBtnText("English");
        }
        else {
            setLangId(0);
            setLangHelper(0);
            setBtnText("తెలుగు");
        }
    }

    return (
        <div className="div">

            <Container className="hccon"
            // style={{ maxWidth: "1400px !important"}}
            >

                {/* <Button>English</Button> */}
                {/* <Button color="outline-success" size="sm" style={{ marginTop: -5, marginLeft: 1200 }} onClick={langChangeHandel} value={btnText}>{btnText}</Button> */}

                <Row>
                    <Col md={{size:1, offset:11}} style={{ padding: 0, marginBottom: 5 }} >
                        <Button color="outline-success" size="sm" onClick={langChangeHandel} value={btnText}>{btnText}</Button>
                    </Col>
                </Row>

                <Row className='no-gutters'>
                    <Col className="clmn1" id='homeCarousel'  lg={7} md={12}>
                        {/* <img className={banner} src='http://localhost/tsmpb/TSMPB-Content-Banner.png' alt="TSMPB_banner" /> */}
                        <UncontrolledCarousel items={items} 
                        className="banner"
                        />
                    </Col>

                    <Col className="clmn2 position-relative" lg={5} md={12}>
                        <div className="bg-image">
                            <div className="one">
                                <a className="hp_link" href="http://localhost:3001/homepage/tabId=1" target="_blank" style={{ color: (count == 1 ? "chocolate" : "green") }}>
                                <img
                                    //  src='http://localhost/tsmpb/about_Mplant.png'
                                    src={require("../images1/about_Mplant.png")}
                                      alt="md_plant" />
                                      <span> {screenLanguage[langId].medicinal_plant_info}</span>
                                </a>
                                <span className='bg-one'></span>
                            </div>

                            <div className="one">
                            <a className="hp_link" href="http://localhost:3001/homepage/tabId=3" target="_blank" style={{ color: (count == 2 ? "chocolate" : "green") }}>
                                <img
                                    //  src='http://localhost/tsmpb/about_Mplant.png'
                                    src={require("../images1/subsidy01.png")}
                                    alt="lc_utli"/>
                                      <span> {screenLanguage[langId].apply_for_subsidy}</span>
                                </a>
                                <span className='bg-one'></span>
                            </div>

                            <div className="one">
                            <a className="hp_link" href="http://localhost:3001/homepage/tabId=4" target="_blank" style={{ color: (count == 3 ? "chocolate" : "green") }}>
                                <img
                                    //  src='http://localhost/tsmpb/about_Mplant.png'
                                    src={require("../images1/nearest_utility.png")}
                                     alt="lc_utli" />
                                      <span> {screenLanguage[langId].locate_utilities}</span>
                                </a>
                                <span className='bg-one'></span>
                            </div>

                            <div className="one">
                            <a className="hp_link" href="https://echarak.in/echarak/marketprice.do" target="_blank" style={{ color: (count == 4 ? "chocolate" : "green") }}>
                                <img
                                    //  src='http://localhost/tsmpb/about_Mplant.png'
                                    src={require("../images1/MarketInfo.png")}
                                    alt="mkt_info" />
                                      <span> {screenLanguage[langId].market_info}</span>
                                </a>
                                <span className='bg-one'></span>
                            </div>

                            <div className="one">
                            <a className="hp_link" href="http://localhost:3001/homepage/tabId=2" target="_blank" style={{ color: (count == 5 ? "chocolate" : "green") }}>
                                <img
                                    //  src='http://localhost/tsmpb/about_Mplant.png'
                                    src={require("../images1/alertsIcon.png")}
                                    alt="art_icn" />
                                      <span> {screenLanguage[langId].receive_alerts}</span>
                                </a>
                                <span className='bg-one'></span>
                            </div>

                            <div className="one">
                                <a className="hp_link" href="http://localhost:3001/homepage/tabId=5" target="_blank" style={{ color: (count == 6 ? "chocolate" : "green") }}>
                                <img
                                    //  src='http://localhost/tsmpb/about_Mplant.png'
                                    src={require("../images1/ask_expert.png")}
                                    alt="exprt_icn" />
                                      <span> {screenLanguage[langId].ask_an_expert}</span>
                                </a>
                                <span className='bg-one'></span>
                            </div>
                        </div>
                        <div className='bg-img-part'>
                        <img style= {{ height: 250,marginTop: 183}} src={(langId == 0 ? 
                                    // 'http://localhost/tsmpb/ServiceOfferedEnglish.png' 
                                    require("../images1/ServiceOfferedEnglish.png")
                                    :
                                    // 'http://localhost/tsmpb/ServiceOfferedTelugu.png')
                                    require("../images1/ServiceOfferedTelugu.png")
                                )}
                                     alt="services_offered" />
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>

    );
}

export default 
// withStyles(styles)(
    HomePageCarousel;
    // );
