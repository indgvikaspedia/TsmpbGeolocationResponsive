import React, { useEffect, useState } from 'react';
// import st from '../../css/rstyles.css';
// import st from '../../shared/Location/rstyles.css'
import '../../shared/css/rstyles.css'

// import withStyles from 'isomorphic-style-loader/withStyles';

// import useStyles from 'isomorphic-style-loader/useStyles';
// import nursery from '../icons/nursery_selected.png';
// import nursery from '../../../../public/images/nursery_selected.png'
import nursery from '../images/nursery_selected.png';
// import warehouse from '../icons/storage_warehouse.png';
import warehouse from '../images/storage_warehouse.png'
// import Postharvest from '../icons/Postharvest.png';
import Postharvest from '../images/Postharvest.png'
// import collection_centers from'../icons/collection_centers.png';
import collection_centers from '../images/collection_centers.png';
// import drop_down from '../icons/drop_down.png';
// import mike from '../../images/voice_mike.png';
// import search_icon from '../icons/search_icon.png';
import search_icon from '../images/search_icon.png';

// import filter_icon from '../../images/search_ic.png'

// import location from '../icons/location_icon.png';
 import location from '../images/location_icon.png';
 import Nursery_blackN from '../../shared/images/Nursery_blackN.png';
 

import axios from 'axios';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { Button,Card } from 'reactstrap';
// import  jsonlist from "../components/Location.json"
import MapDetail from './MapDetail.js';
import { getLangHelper } from '../../helper/LanguageHandler';
import { screenLanguage } from '../../helper/ScreenLanguage';
// import { tsmpbManagement } from '../../properties/tsmpbManagement';
// import { microservices } from '../../properties/microservices';
//  import * as search from "../components/Search.json";

// const url = tsmpbManagement.locateUtilities;

// import { Link } from 'react-router-dom';


const Location=(props)=>{
  // console.log("Props.language:",props.language);
  // const lgnId = props.language;
  
  // console.log("lgnId:",lgnId);
const lgnId = 0;
    const dataList = [
        {
            "address": "Ramanthapur,Hyderabad,500070",
            "id": 1,
            "lat": 17.3388,
            "lon": 78.511265,
            "ownershipType": "government",
            "state": "Telangana",
            "storageLocationName": "QPM Nursery",
            "storageLocationType": "Nursery"
                },
                {
             "address": "shamshabad,Hyderabad",
            "id": 3,
            "lat": 17.4391858,
            "lon": 78.4358656,
            "ownershipType": "government",
            "state": "Telangana",
            "storageLocationName": "Ameerpet Warehouse",
            "storageLocationType": "Storage warehouse"
                },
                {
                    "address": "Ameerpet,Hyderabad",
                   "id": 2,
                   "lat": 17.4391858,
                   "lon": 78.4358656,
                   "ownershipType": "government",
                   "state": "Telangana",
                   "storageLocationName": "Ameerpet Post Harvest Center",
                   "storageLocationType": "Post Harvest centers"
                  }
            
    ];


    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const toggle1 = () => setDropdownOpen1(prevState => !prevState);

    const [visibility,setVisibility] = useState(false);
    
    const [stateName,setStateName]=useState("State");
    const [ownership,setOwnerShip]=useState("Ownership");
    
    const [filter,setFilter]=useState("nodata");
    
    const [displayRes,setDisplayRes]=useState([]);
    const [searchText,setSearchText]=useState("");
    const [clicked,setClicked] = useState(false);
    const [button,setbutton]=useState(false);
    const [searchJson,setSearchJson]=useState([{}])
    const [data,setData]=useState([{}])
    const [filterBtn,setFilterBtn]=useState(false);
    const [show,setShow]=useState(false);
    const [status,setStatus] = useState();

    const [stateList,setStateList] = useState([]);
    // useEffect(()=>{
    //   getStateList();
    // },[])

    useEffect(()=>{
      setClicked(false);
      setShow(false);
      setDisplayRes([]);
    },[])

    useEffect(()=>{
      console.log("State List is:",stateList);
    },[stateList])
    useEffect(()=>{
      console.log("State selected:::",stateName);
    },[stateName])

    useEffect(()=>{
      console.log("ownership_____:",ownership);
      console.log("storageLocationType......",filter);
    },[ownership,filter])


    function submitdata(){
    // const response = axios.get(url+"?state="+"Telangana"+"&ownershipType="+ownership+"&storageLocationType="+filter)
    //       //const res = axios.get(`${url}:'?state='+stateName+'&ownershipType='+ownership+'&storageLocationType='+filter`)
    //       .then((res)=>{
    //         console.log("res.....:",res);
    //         setStatus(res.status);
    //         if(res.status == 200){
    //       setDisplayRes(res.data);
    //       setClicked(true);
    //       // setInputData(jsondata);
    //       setbutton(true);
    //         }

  
    //           console.log("responsedata",res);
           
    //       })
    //       .catch(error=>console.log(error));
  };

  useEffect(()=>{
    let l = getLangHelper();
    console.log("Language in Location.js:",l);
  },[])

  useEffect(()=>{
    if(searchText.length >=3){  
    searchUtilities();
    }
  },[searchText])

   function searchUtilities(){
    // console.log("searchText in searchUtilities:",searchText);
    // const response = axios.get(microservices.tsmpb + '/api/searchUtilities?searchString='+searchText)
    //                 .then((res)=>{
    //                   setStatus(res.status);
    //                   console.log("response.data in searchUtilities:",res);
    //                   setDisplayRes(res.data);
    //                   setShow(true);
    //                 })
    //                 .catch(error => console.log("error in searchUtilities------:",error));
  }
    // const fltBtn=()=>{
//     setFilterBtn(true);
// }
// const filterfun=(searchJson)=>{


//     const filteredData = dataList.filter(item => {
//         return (item.storageLocationType.toLowerCase().indexOf(inputData.toLowerCase())>-1)
//         // Object.keys(item).some(key =>

//         //  item[key].toString().toLowerCase().includes(lowercasedValue)    
//       });
//       setSearchResult(filteredData);
// }


    const handleChange =( value) => {
        setSearchText(value);
        
      }
      
    //   const filterData = (value) => {
    //     // const lowercasedValue = value.toLowerCase().trim();
    
    //     let filterList=[]
    
        
    //        filterList = dataList.filter(item => {
    //         return (item.storageLocationType.toLowerCase().indexOf(value.toLowerCase())>-1)
    //         // Object.keys(item).some(key =>
    
    //         //  item[key].toString().toLowerCase().includes(lowercasedValue)
            
    //       });
    //     //   setData(filteredData);
    //     setDisplayRes(filterList);
        
    //   }
    
    
    
    
    const setColor=()=>{
        setFilterBtn(true)
    }
      


    
    const displayContent= (list)=>{
        if(list){
           
           console.log("display for map1111",list);
            return list!=null && list!=undefined && list != "undefined" ? list.map((record)=>{
                      return(  
                          <div>
                            <Row>
                              <Col md="9">
                              <h3>{record.storageLocationName}</h3>
                              <p>{record.address}</p>
                              <p>{record.state}</p>
                              </Col>
                              <Col md="3">
                              <img src={nursery} id="iconstyle" alt="Select nursery" style={{width:150,height:150}}  />
                              </Col>
                            </Row>
                            <hr style={{border:"1px solid black"}}></hr>
                            {/* <div className={st.nestedRow}>
                          <div className={st.displayCol1}>
                            <h3>{record.storageLocationName}<br></br></h3>  
                            {record.address}<br></br>
                            {record.state}
                            <br></br>
                          </div>
                          <div className={st.displayCol2}>
                              <img src={nursery} id={st.iconstyle} alt="Select nursery" style={{width:150,height:150}}  />
                          </div> 
                          </div> 
                          <hr style={{border:"1px solid black",width:600}}></hr> */}

                          </div>
                        
                   )
            }
         )      
      :null}
      else{
        (<div  style={{marginTop:50,fontSize:30,marginLeft:20}}>
          {/* {list.length === 0 && <span>No records found to display!</span>} */}
          No records found to display!
          </div>)
      }
}

async function getStateList(){
  // const response = await axios.get("http://10.244.0.203:8093/auth/fetchstate?lgn=en") 
  //   .then(function(response){
  //     console.log("response of 'STATES' in location.js file:", response);
  //     console.log("response.data of 'STATES' in location.js file:", response.data);
  //     setStateList(response.data);
  // })
  //   .catch(function (error){
  //     console.log("Error:", error);
  // })
}
function handleStateChange(event){
  setStateName(event.target.value);
}
function settingState(event){
  console.log("event.target.value:",event.target.value);
  setStateName(event.target.value);
}
  return(
    <div>
      <div className="container-fluid">
        <Row style={{ marginRight: 0, marginLeft: 0,justifyContent:'center' }}>
          <Col lg={6} md={12} style={{ paddingLeft: 0 }}>
            <Row style={{ marginRight: 0, marginLeft: 0}}>
              <div id="searchinline">
                <Button id="btnline" ><img src={search_icon} alt="search" style={{height:50,width:50,marginBottom:6}}/></Button>
                <input id="ibox" type="text" placeholder={screenLanguage[lgnId].search}
                  onChange={e => handleChange(e.target.value)}
                //      onBlur={()=>{
                //         setTimeout(()=>{
                // setDisplayRes([])
                // setShow(false)
                //         },100);
                //     }}
                />
                {/* <Button id={st.btnline}><img src={mike}  alt="search" style={{height:50,width:50,marginBottom:5}}/></Button>           */}
              </div>

              <h5 style={{ marginTop: 20, marginBottom: 5, color: 'green',width: '100%',textAlign: 'center' }}>{screenLanguage[lgnId].select_state_and_ownership}</h5>

              <div id="rowgap" style={{display:'flex',width:'100%',justifyContent:'center'}}>

                <Dropdown className='pr-3' isOpen={dropdownOpen} toggle={toggle} >
                  <DropdownToggle caret id="dptoggle" style={{width:200}}>
                    <img src={location} alt="" style={{height:25,width:25,marginRight:5}}/>
                    {screenLanguage[lgnId].state}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem className="dpFont"
                      onClick={(e)=>setStateName(e.currentTarget.getAttribute("dropdownvalue"))}
                      dropdownvalue="Telangana">
                      Telangana
                    </DropdownItem>
                  </DropdownMenu></Dropdown>

                <Dropdown className='pl-3' isOpen={dropdownOpen1} toggle={toggle1}>
                  <DropdownToggle caret id="dptoggle2" style={{width:200}}>
                    {/* {ownership} */}
                    <img src={collection_centers} alt="" style={{height:25,width:25,marginRight:5}}/>
                    {screenLanguage[lgnId].ownership}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem className="dpFont"
                      onClick={(e)=>setOwnerShip(e.currentTarget.getAttribute("dropdownvalue"))}
                      dropdownvalue="Private">
                      {/* Private */}
                      {screenLanguage[lgnId].private}</DropdownItem>
                    <DropdownItem className="dpFont"
                      onClick={(e)=>setOwnerShip(e.currentTarget.getAttribute("dropdownvalue"))}
                      dropdownvalue="Government">
                      {/* Government */}
                      {screenLanguage[lgnId].government}</DropdownItem>
                  </DropdownMenu>
                </Dropdown>


                {/* <Button  id={st.filter} onClick={()=>setVisibility(!visibility)}><img src={filter_icon} alt="dropdwon" style={{height:22,width:22,marginRight:5}}/> */}
                {/* More Filters */}
                {/* {screenLanguage[lgnId].more_filters}</Button> */}
              </div>
              
              <h5 style={{marginTop:20, marginBottom: 5, color: 'green',width:'100%',textAlign:'center'}}>{screenLanguage[lgnId].select_storage_location_type}</h5>
              
              {/* {visibility && */}
              <div id="rowgap2" className='flex-wrap' style={{justifyContent:'center',width:'100%'}}>
                {/* <Button outline color="success" id={st.btnstyleY} onClick={()=>setFilter("Nursery") }><img src='http://localhost/tsmpb/Nursery_blackN.png' id="iconstyle" alt="Select nursery" /><p>{screenLanguage[lgnId].nursery}</p></Button> */}
                <Button outline color="success" id="btnstyleY" onClick={()=>setFilter("Nursery") }><img src={Nursery_blackN} id="iconstyle" alt="Select nursery" /><p>{screenLanguage[lgnId].nursery}</p></Button>
                <Button outline color="success" id="btnstyle2" onClick={()=>setFilter("Storage Godown & Drying Yards") }><img src={warehouse} id="iconstyle" alt="Storage Warehouse" /><p>{screenLanguage[lgnId].storage_godown}<br/>{screenLanguage[lgnId].drying_yards}</p></Button>
                <Button outline color="success" id="btnstyleY" onClick={()=>setFilter("Training Centers")}><img src={Postharvest} id="iconstyle" alt="Postharvest" /><p>{screenLanguage[lgnId].training_centre}</p></Button>
                <Button outline color="success" id="btnstyle2" onClick={()=>setFilter("Herbal Garden")}><img src={collection_centers} id="iconstyle" alt="collection_centers" /><p>{screenLanguage[lgnId].herbal_garden}</p></Button>
                {/* <Button outline color="success" id={st.btnstyle2} onClick={()=>setFilter("Processing Unit & Quality Test Lab")}><img src='http://localhost/tsmpb/QC_lab_1_blackN.png' id="iconstyle" alt="quality_test_lab" /><p>{screenLanguage[lgnId].processing_unit}<br/>{screenLanguage[lgnId].quality_testing}<br/>{screenLanguage[lgnId].lab}</p></Button> */}
              </div>
              {/* } */}
            </Row>
            <div style={{marginTop:20}}>
              <Button color="success"  id={button? "btntrue":"btnfalse"} onClick={()=>submitdata()} >{screenLanguage[lgnId].submit}</Button>
            </div>

            <hr style={{border:"2px solid black"}}></hr>
            <div className="rscroll">
              <Row style={{marginLeft:15}}>
                {clicked == true && status == 200 ? displayContent(displayRes):" "}
                {/* {filterfun(searchJson)} */}



                {/* {show === true ?  displayRes.map((record,i)=>{ */}
                {searchText.length>=3 && status == 200 && show == true && clicked == false && displayRes != null && displayRes.length!=0 ?
                  displayRes != null && displayRes != undefined && displayRes != "undefined" ? displayRes.map((record,i)=>{
                    return(
                      <div>
                        <div className="nestedRow">
                          <div className="displayCol1">
                            <h3>{record.storageLocationName}<br></br></h3>
                            {record.address}<br></br>
                            {record.state}
                            <br></br>
                          </div>
                          <div className="displayCol2">
                            <img src={nursery} id="iconstyle" alt="Select nursery" style={{width:150,height:150}}  />
                          </div>
                        </div>
                        <hr style={{border:"1px solid black",width:600}}></hr>

                      </div>)


                  }): " "
                  // (<div  style={{marginTop:50,fontSize:30,marginLeft:20}}>
                  //   {searchText.length>=3 && displayRes.length == 0 ? <span>No records found to display!</span>:null}
                  //   </div>)
                  : null
                  }
              </Row>
            </div>
          </Col>


          <Col lg={6} md={12} style={{ paddingRight: 0 }} id="customMap">
            {/* {displayRes != null && displayRes != undefined && displayRes != "undefined" ? 
            displayRes.map((result,_index)=>{
              let latvalue = result.lat;
              let lonvalue = result.lon;
              let initialurl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.1469677374207!2d";
              let latvalueaddedurl = initialurl + `${latvalue}`+"!3d";
              let lonvalueaddedurl = latvalueaddedurl + `${lonvalue}`+ "!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8bf2a6e8601ae20b!2zMTfCsDE4JzMwLjQiTiA3OMKwMjUnMTEuNCJF!5e0!3m2!1sen!2sin!4v1646206088979!5m2!1sen!2sin";
              console.log("latvalue:::", latvalue);
              console.log("lonvalue:::", lonvalue);
              console.log("lonvalueaddedurl:::",lonvalueaddedurl);
              var finalurl = lonvalueaddedurl.toString();
              return( */}
              {/* //let finalurl = "+`${lonvalueaddedurl}`+"`; */}

              {/* <iframe src={finalurl} style={{width:704,height:791,border:0}} allowfullscreen="" loading="lazy"></iframe>
              )

            }):null} */}
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15258072.40570261!2d82.75252935!3d20.98801345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1620626039734!5m2!1sen!2sin&hl=en&ll=28.644800,77.216721" style={{width:630, height:580,border:0}} loading="lazy" title="GoogleMaps"></iframe>  */}
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.2371133156826!2d78.35399035096731!3d17.35231970832323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa744155a39d0570c!2zMTfCsDIxJzA4LjMiTiA3OMKwMjEnMjIuMyJF!5e0!3m2!1sen!2sin!4v1646205876214!5m2!1sen!2sin" style={{width:704,height:791,border:0}} allowfullscreen="" loading="lazy"></iframe> */}
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.708372632314!2d78.57480945096788!3d17.425777506223476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xee73d4874afb5af4!2zMTfCsDI1JzMyLjgiTiA3OMKwMzQnMzcuMiJF!5e0!3m2!1sen!2sin!4v1646206002510!5m2!1sen!2sin" style={{width:704,height:791,border:0}} allowfullscreen="" loading="lazy"></iframe> */}
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.1469677374207!2d78.41764245096694!3d17.308456709573118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8bf2a6e8601ae20b!2zMTfCsDE4JzMwLjQiTiA3OMKwMjUnMTEuNCJF!5e0!3m2!1sen!2sin!4v1646206088979!5m2!1sen!2sin" style={{width:704,height:791,border:0}} allowfullscreen="" loading="lazy"></iframe> */}
            {/* <MapDetail/> */}
            
                        {/* {data!=""?<MapDetail displayRes={data}/>:<MapDetail displayRes={displayRes}/> } */}
            {clicked == true ?
              <MapDetail displayRes={displayRes}/>
              :searchText.length>=3 && status == 200 && displayRes != null && displayRes != "undefined" && displayRes.length != 0?
                <MapDetail displayRes={displayRes}/>
                :<MapDetail displayRes={displayRes}/>}
            {/* <MapDetail displayRes={data}/> */}


          </Col>
        </Row>
      </div>
    </div>



  );

  // <State name_data= {stateName}/>



}
// export default withStyles(st)(Location);
export default 
// Location;
// withStyles(st)(
  Location;
  // );