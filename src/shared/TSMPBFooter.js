import React, { useEffect, useState } from 'react';

import { Row, Col, Container } from "reactstrap";

// import withStyles from 'isomorphic-style-loader/withStyles';

// import styles from '../../../../shared/css/nishkarshforms.css';
import './css/nishkarshforms.css'
// import Footer from '../../footer/Footer';
import WidthFooter from '../shared/WidthFooter';

const TSMPBFooter = () => {
    const [sideWidth, setSideWidth] = useState(0);
    const [param, setParam] = useState(false);
    const [width,setWidth] = useState(0);

    useEffect(() => {
        var value = document.getElementById('root').clientWidth;
        if(typeof window !== 'undefined'){
        var windowwidth = window.screen.width;
        console.log("windowwidth:::",windowwidth);
        // alert(windowwidth);
        setWidth(windowwidth);
        }
        // alert("clientWidth::::",value);
        // console.log("value::::",value);
        // setSideWidth(value);
    }, [width]);


    return (
        width > 700 ?
        <footer className="foot">
            <div className='footerBg'>
            <Container>
                <Row>
                    <Col xs={6} md={4} className="borderLeft">
                        {/* <a className={ftlink} href="https://reactjs.org" target="_blank">Home</a> */}
                        <a className="ftlink" href="http://localhost:3001/homepage" target="_blank">
                            <img className="fticns" src='https://keyword.vikaspedia.in/tsmpbmedia/home.png' alt="home" /> Home
                        </a>
                        {/* <a className={ftlink} href="https://reactjs.org" target="_blank">About Us</a> */}
                        <a className="ftlink" href="http://localhost:3001/aboutus" target="_blank">
                            <img className="fticns" src='https://keyword.vikaspedia.in/tsmpbmedia/About_us.png' alt="About_us" />About Us
                        </a>
                        {/* <a className={ftlink} href="https://reactjs.org" target="_blank">Market Place</a> */}
                        <a className="ftlink" href="https://echarak.in/echarak/marketprice.do" target="_blank">
                            <img className="fticns" 
                                // src='http://localhost/tsmpb/MarketPrice512x512.png'
                                src={require("../images1/Market_Info.png")} alt="Market" />Market Info
                        </a>
                        {/* <a className={ftlink} href="https://reactjs.org" target="_blank">Feedback</a> */}
                        <a className="ftlink" href="http://localhost:3001/feedback" target="_blank">
                            <img className="fticns" src='https://keyword.vikaspedia.in/tsmpbmedia/Feedback.png' alt="Feedback" />Feedback
                        </a>
                    </Col>
                    <Col xs={6} md={4} className="borderLeft">
                        <a className="ftlink" href="http://localhost:3001/termsandconditions" target="_blank">Terms & Conditions</a>
						<a className="ftlink" href="http://localhost:3001/privacypolicy" target="_blank">Privacy Policy</a>
						<a className="ftlink" href="http://localhost:3001/copyrightpolicy" target="_blank">Copyright Policy</a>
						<a className="ftlink" href="http://localhost:3001/hyperlinkpolicy" target="_blank">Hyperlink Policy</a>
                    </Col>
                    <Col xs={12} md={4} className="borderLeft">
                        <a className="ftlink">
                            Tollfree: <img className="fticns" src='https://keyword.vikaspedia.in/tsmpbmedia/call.png' alt="call" />
                            040-66364094 or <img className="fticns" src='https://keyword.vikaspedia.in/tsmpbmedia/mail.png' alt="mail" />
                            : tsmapb@gmail.com
                        </a>
                        <a className="ftlink">
                            <img className="fticnsreg" src='https://keyword.vikaspedia.in/tsmpbmedia/Registered.png' alt="Registered" />
                            2022 Telangana State Medicinal Plants Board
                        </a>
                        <a className="ftlink">
                            Department of HM & FW, Goverment of Telangana
                        </a>
                        <a className="ftlink">
                            All Rights Reserved | Visitors:
                        </a>
                    </Col>
                </Row>
                </Container>
            </div>
        </footer>
        :
         <WidthFooter/>
        // null

    );
}

export default 
// withStyles(styles)(
    TSMPBFooter;
    // );
