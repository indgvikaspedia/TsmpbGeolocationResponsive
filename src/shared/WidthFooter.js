// import React from './../../globals'
// import { Link } from 'react-router-dom';
import '../App1.css';
// import withStyles from 'isomorphic-style-loader/withStyles'
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
// import FontAwesomeIcon from '../../../helper/FontAwIconHelper';
// import { faHome, faList, faUser, faComment, faQuestion, faInfoCircle, faCopyright, faSearchDollar, faMobileAlt, faCommentAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
// import { microservices as ms } from './../../../properties/microservices'

const WidthFooter = () => {
    return (
        <div className="footer">

            <div className="container Contain" style={{ padding: 0, backgroundColor: 'darkgreen' }}>
                <div className="row align-items:center " style={{ margin: 0, flexWrap: 'unset !important' }}>
                    <div className="col-md-3 col1" style={{ backgroundColor: 'darkgreen' }}>
                        {/* <br /><h4><u>Quick Links</u></h4>
                        <br /> */}
                        <ul className="list-unstyled quicklinklist">
                        <li >
                                <div
                                // className={AboutUsIcon} 
                                />
                                {/* <a href="http://localhost:3001/homepage" target="_blank" ><span className={LinkText}>Home</span></a> */}
                                <a className="ftlink"href="http://localhost:3001/homepage" target="_blank">
                                    <span><img className="fticns" src='https://keyword.vikaspedia.in/tsmpbmedia/home.png' alt="home" /></span>Home</a>
                            </li>
                            <li >
                                <div
                                // className={DisclaimerIcon} 
                                />
                                {/* <a href="http://localhost:3001/aboutus" target="_blank"><span className={LinkText}>About Us</span></a> */}
                                <a className="ftlink"href="http://localhost:3001/aboutus" target="_blank">
                                    <span><img className="fticns" src='https://keyword.vikaspedia.in/tsmpbmedia/About_us.png' alt="About_us" /></span>About Us</a>
                            </li>
                            <li >
                                <div
                                // className={FMarketPriceIcon} 
                                />
                                {/* <a href="https://echarak.in/echarak/marketprice.do" target="_blank"><span className={LinkText}>Market Info</span></a> */}
                                <a className="ftlink"href="https://echarak.in/echarak/marketprice.do" target="_blank">
                                    <span><img className="fticns" 
                                    // src='http://localhost/tsmpb/MarketPrice512x512.png'
                                    src={require("../images1/Market_Info.png")}
                                     alt="Market" /></span>Market Info</a>
                            </li>
                            <li >
                                <div
                                // className={FMobileAppIcon} 
                                />
                                {/* <a href="http://localhost:3001/feedback" target="_blank"><span className={LinkText}>Feedback</span></a> */}
                                <a className="ftlink"href="http://localhost:3001/feedback" target="_blank">
                                    <span><img className="fticns" src='https://keyword.vikaspedia.in/tsmpbmedia/Feedback.png' alt="Feedback" /></span>Feedback</a>
                            </li>
                            {/* <li >
                                <div className={FooterFAQIcon} />
                                <a href="https://echarak.in/echarak/faqs.do" target="_blank"><span className={LinkText}>Terms & Conditions</span></a></li>
                            <li >
                                <div className={FooterFeedbackIcon} />
                                <a href="https://echarak.in/echarak/echarakfeedback.do" target="_blank"><span className={LinkText}>Privacy Policy</span></a></li> */}
                        </ul>
                    </div>

                    <div className="col-md-3 col2" style={{ backgroundColor: 'darkgreen' }}>
                        <ul className="list-unstyled quicklinklist">

                            <li >
                                <div
                                // className={AboutUsIcon} 
                                />
                                {/* <a href="http://localhost:3001/termsandconditions" target="_blank" ><span className={LinkText}>Terms & Conditions</span></a> */}
                                <a className="ftlink"href="http://localhost:3001/termsandconditions" target="_blank">Terms & Conditions</a>
                            </li>
                            <li >
                                <div
                                // className={DisclaimerIcon} 
                                />
                                {/* <a href="http://localhost:3001/privacypolicy" target="_blank"><span className={LinkText}>Privacy Policy</span></a> */}
                                <a className="ftlink"href="http://localhost:3001/privacypolicy" target="_blank">Privacy Policy</a>
                            </li>
                            <li >
                                <div
                                // className={FMarketPriceIcon} 
                                />
                                {/* <a href="http://localhost:3001/copyrightpolicy" target="_blank"><span className={LinkText}>Copyright Policy</span></a> */}
                                <a className="ftlink"href="http://localhost:3001/copyrightpolicy" target="_blank">Copyright Policy</a>
                            </li>
                            <li >
                                <div
                                // className={FMobileAppIcon} 
                                />
                                {/* <a href="http://localhost:3001/hyperlinkpolicy" target="_blank"><span className={LinkText}>Hyperlink Policy</span></a> */}
                                <a className="ftlink"href="http://localhost:3001/hyperlinkpolicy" target="_blank">Hyperlink Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 col3" style={{ backgroundColor: 'darkgreen' }}>
                        {/* <br /> <h4><u>Contact Us</u></h4> */}


                        <address /*style={{paddingLeft:"inherit"}}*/>
                            Tollfree:<span><img className="fticns" src='https://keyword.vikaspedia.in/tsmpbmedia/call.png' alt="call" /></span>
                            040-66364094 or<span><img className="fticns" src='https://keyword.vikaspedia.in/tsmpbmedia/mail.png' alt="mail" /></span>: tsmapb@gmail.com<br />
                            <span><img className="fticnsreg" src='https://keyword.vikaspedia.in/tsmpbmedia/Registered.png' alt="Registered" /></span>2022 Telangana State Medicinal Plants Board<br />
                            Department of HM & FW, Goverment of Telangana<br />
                            All Rights Reserved | Visitors:
                            {/* Floor 1,Red Cross Road,<br />
                            New Delhi,110001,<br />
                            India<br />
                            <i className="fa fa-phone fa-lg"></i>Ph.No: 011-23721840<br /> */}

                        </address>
                        <br />
                    </div>
                </div>
                {/* <div className="row ">
                    <div className="col">
                        <p>© Copyright echarak 2020</p>
                    </div>
                </div> */}
            </div>

        </div>


    );
}
export default 
// withStyles(styles)(
    WidthFooter
    
    // )