import "./header.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
// Date Range picker 
import {DateRange} from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import {format} from "date-fns";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({type}) => {
    const navigate=useNavigate();
    const[destination,setDestination]=useState("");
    const[openDate,setOpenDate]=useState(false);
    const[date,setDate]=useState(
        [{
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        }]
    );

        const[options,setOptions]=useState({adult:1,children:0,room:1});
        const[openOptions,setOpenOptions]=useState(false);

        // functions.. 
        const handleOption=(name,operation)=>{
            setOptions((prev)=>{
                return{
                    ...prev,
                    [name]:operation==="i"?options[name]+1:options[name]-1
                }
            })
            
        };

        // Here handleSerach function pending 
        const handleSearch=()=>{
            navigate("/hotels",{state:{destination,date,options}})
            
        }

  return (
    <div className="header">
        <div className={type === "list"?"headerContainer listMode":"headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed}/>
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane}/>
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar}/>
                    <span>Car Rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed}/>
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi}/>
                    <span>Airport Taxi</span>
                </div>
            </div>
            {type !=="list" && (
                <>
                <h1> A lifetime of discounts? It's Genius.</h1>
            <p className="headerDesc">Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Your booking account</p>
            <button className="headerBtn">Sign in{" "}/{" "}Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                    <input type="text" placeholder="Where are you going" 
                    className="headersearchInput"
                    onChange={(e)=>setDestination(e.target.value)}
                    />
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                    <span className="headerSearchText" onClick={()=>setOpenDate(!openDate)}>
                       {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}
                    </span>
                    {
                        openDate && <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                        minDate={new Date()}
                        />
                    }
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                    <span className="headerSearchText" onClick={()=>setOpenOptions(!openOptions)}>
                        {`${options.adult} Adult.${options.children} Children.${options.room} Room`}
                    </span>
                    {openOptions && 
                    <div className="options">
                        <div className="optionItem">
                            <span>Adult</span>
                            <div className="optionCounter">
                                <button className="optionCounterButton" 
                                onClick={()=>handleOption("adult","d")}
                                disabled={options.adult<=1}
                                >-</button>
                                <span>{options.adult}</span>
                                <button className="optionCounterButton"
                                onClick={()=>handleOption("adult","i")}
                                >+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span>Children</span>
                            <div className="optionCounter">
                                <button className="optionCounterButton"
                                onClick={()=>handleOption("children","d")}
                                disabled={options.children<=0}
                                >-</button>
                                <span>{options.children}</span>
                                <button className="optionCounterButton"
                                onClick={()=>handleOption("children","i")}
                                >+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span>Room</span>
                            <div className="optionCounter">
                                <button className="optionCounterButton"
                                onClick={()=>handleOption("room","d")}
                                 disabled={options.children<=1}
                                >-</button>
                                <span>{options.room}</span>
                                <button className="optionCounterButton"
                                onClick={()=>handleOption("room","i")}
                                >+</button>
                            </div>
                        </div>

                    </div>
                    }
                </div>
                <div className="headerSearchItem">
                    <button className="headerBtn" onClick={handleSearch}>Search</button>
                </div>

            </div>
                </>
            )}
        </div>

    </div>
  )
}

export default Header
