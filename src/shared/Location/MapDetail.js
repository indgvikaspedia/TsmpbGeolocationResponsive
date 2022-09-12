import React from 'react';
// import {GoogleMap, withScriptjs, withGoogleMap, Marker,InfoWindow} from "react-google-maps"
import GoogleMapReact from 'google-map-react';
// import points from '../components/Location.json'
// import withStyles from 'isomorphic-style-loader/withStyles';

// import useStyles from 'isomorphic-style-loader/useStyles';

// import mcss from './MapStyle.css';
// import '../../../../node_modules/font-awesome/css/font-awesome.min.css';
 import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {faMapMarker} from '@fortawesome/free-solid-svg-icons';
// import mcss from '../../../shared/App.css';
import mcss from '../../shared/App.css';

const MapDetail=(props)=>{
  
  
  // const MyMarker = ({ text, tooltip }) => (
  //   <div className="circle">
  //     <span className="circleext" title={tooltip}>
  //       {text}
  //     </span>/
  //   </div>
  // );
  // .circleText {
  //   text-align: center;
  //   height: 50%;
  //   left: 50%;
  //   position: absolute;
  //   top: 50%;
  //   transform: translate(-50%, -50%);
  //   width: 50%;
  // }
  const MyMarker = ({lat,lng,text, tooltip }) => (
    //  <div className={mcss.circle}>
    <>
    <a href={"https://maps.google.com/maps?q="+lat+","+lng+"&hl=en"} target='_blank'>
       <FontAwesomeIcon icon = {faMapMarker} title={tooltip} style={{fontSize:'30px', color:'red'}}/>
          
        <div>
        <span className={mcss.circleText} title={tooltip} style={{fontSize:'14px', color:'red', textAlign:'center'}}>
        {text}
       
       </span>
       </div>
       </a>
    </>   
     );
  
    const mapMarker=()=>{
      console.log("props display",props.displayRes)
      
      return(
        // props.displayRes.map((v,i)=>{
          // props.displayRes.map((v,i)=>{

          // return(
            
             <MyMarker lat={17.385044} lng={78.486671} text={"sai"} tooltip={"v.address"} icon={faMapMarker} />
            
          // )
        // })
      )
      
    }
 
 

  return (
    <div style={{width:704,height:798,borderTopRightRadius:20,borderBottomRightRadius:10,backgroundColor:'green'}}>
<GoogleMapReact 
    bootstrapURLKeys={{
      // remove the key if you want to fork
      // key: "AIzaSyApJHTCOp6ajqvwugLoIwvutJsFK06TpFs",
      key: "AIzaSyC0NnAcj4y4hovaPmPx8SxgtttE17YoBjk",
      language: "en",
      region: "IN"
    }}
    defaultCenter={{lat:17.385044,lng: 78.486671 }}
    defaultZoom={11}
   // distanceToMouse={distanceToMouse}
  >
  
     {/* {
 mapMarker()
    }  */}
     </GoogleMapReact>
    </div>
    
  );
    
}
export default
//  withStyles(mcss)(
  MapDetail;
  // );

// export default MapDetail;
