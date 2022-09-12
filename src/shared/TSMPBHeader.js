import React, { useEffect } from 'react';

import { Container, Row, Col } from "reactstrap";

// import withStyles from 'isomorphic-style-loader/withStyles';

// import styles from '../../../../shared/css/nishkarshforms.css';
import './css/nishkarshforms.css';
import HomePageCarousel from './HomePageCarousel';
import TSMPBFooter from './TSMPBFooter';
// let height,width;
const TSMPBHeader = () => {
    // useEffect(()=>{
    //     height = window.screen.height;
    //     width = window.screen.width;
    // },[])
    return (
        <div>
            <div style={{ backgroundColor: "#e1bf00" }}>
                <hr style={{ height: 5, marginTop: 0, marginBottom: 0, opacity: 0 }} />
            </div>

            <header className="head">
                <Container className="hdcon"
                // style={{ maxWidth: "1320px !important" }}
                >
                    {/* <Container  style={height == 200 ? {maxWidth:"1320px !important"}:"null"}> */}
                    <Row className='align-items-center'>
                        <Col className="flex-center col1">
                            {/* <img className={logo1} src='https://keyword.vikaspedia.in/tsmpbmedia/Govt-of-Telangana.png' alt="gov_ts" /> */}
                            <img className="logo1" 
                            // src='http://localhost/tsmpb/TS_Gov_logo.png'
                            src={require("../images1/TS_Gov_logo.png")}
                             alt="gov_ts" />
                            {/* <p style={{ marginLeft: 80, marginBottom: 0, marginTop: -80 }}><b>GOVERNMENT OF TELANGANA</b></p>
                            <p style={{ marginLeft: 80, marginBottom: 0, marginTop: -5 }}>తెలంగాణా ప్రభుత్వం</p> */}
                            <div className="left_part text-white">
                                <p><b>GOVERNMENT OF TELANGANA</b></p>
                                <p>తెలంగాణా ప్రభుత్వం</p>
                            </div>
                            
                        </Col>

                        <Col className="col2">
                            {/* <img className={logo2} src='http://localhost/tsmpb/tsmpb_logo.png' alt="tsmpb_logo" /> */}
                            <img className="logo2" 
                            // src='http://localhost/tsmpb/TSMPB_logo.png' 
                            // src={require("../images1/TS_Gov_logo.png")}
                            src={require("../images1/TSMPB_logo.png")}
                            alt="tsmpb_logo" />
                            {/* <p style={{ marginBottom: 0 }}><b>TELANGANA STATE MEDICINAL PLANTS BOARD</b></p>
                            <p style={{ fontSize: 11, marginBottom: 0 }}>Department of Health, Medical & Family Welfare</p> */}
                            <p className="col2p1"><b>TELANGANA STATE MEDICINAL PLANTS BOARD</b></p>
                            <p className="col2p2">Department of Health, Medical & Family Welfare</p>
                        </Col>

                        <Col className="flex-center justify-content-end col3">
                            {/* <p style={{ marginRight: 80, marginTop: 38, marginBottom: 0 }}><b>NATIONAL MEDICINAL PLANTS BOARD</b></p>
                            <p style={{ fontSize: 11, marginRight: 80, marginBottom: 0 }}>Ministry of AYUSH, Government of India</p> */}
                            {/* <img className={logo3} src='https://keyword.vikaspedia.in/tsmpbmedia/NMPB.png' alt="nt_gov" /> */}
                            <div className="right_part text-right text-white">
                                <p><b>NATIONAL MEDICINAL PLANTS BOARD</b></p>
                                <p>Ministry of AYUSH, Government of India</p>
                            </div>
                            <img className="logo3" 
                            // src='http://localhost/tsmpb/NMPB-logo.png' 
                             src={require("../images1/NMPB-logo.png")}
                            alt="nt_gov" />
                        </Col>

                    </Row>
                </Container>
            </header>

            <hr style={{ backgroundColor: "white", height: 5, marginTop: 0, marginBottom: 0, opacity: 0 }} />
            {/* <HomePageCarousel/>
            <TSMPBFooter/> */}
        </div>
    );
}

export default 
// withStyles(styles)(
   TSMPBHeader;
    // );
