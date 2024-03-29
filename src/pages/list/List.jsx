import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import {useLocation,useNavigate} from "react-router-dom"
import { useState } from "react";
import {DateRange} from "react-date-range";
import {format} from "date-fns";
import SearchItem from "../../components/searchItem/SearchItem"


const List = () => {
    const navigate=useNavigate();
    
    const location=useLocation();
    // console.log(location);

    const[destination,setDestination]=useState(location.state.destination);
    // console.log(destination);
    const[date,setDate]=useState(location.state.date)
    // console.log(date);
    const[options,setOptions]=useState(location.state.options);
    // console.log(options);

    const[openDate,setOpenDate]=useState(false);

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
            <div className="listSearch">
                <h1 className="lsTitle">Search</h1>
                <div className="lsItem">
                    <label>Destination</label>
                    <input type="text" placeholder={destination}/>
                </div>
                <div className="lsItem">
                    <label >Check-in-Date</label>
                    <span onClick={()=>setOpenDate(!openDate)}>
                        {`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}
                    </span>
                    {
                      openDate &&(
                        <DateRange
                        onChange={(item) => setDate([item.selection])}
                        minDate={new Date()}
                        ranges={date}/>
                      )  
                    }
                </div>
                <div className="lsItem">
                    <label htmlFor="#">options</label>
                    <div className="lsOptions">
                        <div className="lsOptionItem">
                            <span>Min price <small>per night</small></span>
                            <input type="number" className="lsOptionInput" />
                        </div>
                        <div className="lsOptionItem">
                            <span>Max price <small>per night</small></span>
                            <input type="number"className="lsOptionInput" />
                        </div>
                        <div className="lsOptionItem">
                            <span>Adult</span>
                            <input type="number" min={1} className="lsOptionInput"
                            placeholder={options.adult} />
                        </div>
                        <div className="lsOptionItem">
                            <span>Children</span>
                            <input type="number" min={0} className="lsOptionInput"
                            placeholder={options.children} />
                        </div>
                        <div className="lsOptionItem">
                            <span>Room</span>
                            <input type="number" min={1} className="lsOptionInput"
                            placeholder={options.room} />
                        </div>

                    </div>
                </div>
                <button onClick={()=>navigate("/hotels/:id")}>Search</button>
            </div>

            <div className="listResult">
                <SearchItem/>
                <SearchItem/>
                <SearchItem/>
                
            </div>

        </div>
        <div></div>
      </div>
    </div>
  )
}

export default List
