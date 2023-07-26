import "./searchItem.css";
import {useNavigate} from "react-router-dom"

const SearchItem = () => {
    const navigate=useNavigate();
  return (
    <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" 
        alt="" className="siImg"/>

        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubTitle">Studio apartment with AirConditiong</span>
            <span className="siFeatures">Entire studio • 1 bathroom • 21m² 1 full bed</span>
            <span className="siCancelOp">Free cancelation</span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
        </div>

        <div className="siDetails">
            <div className="siRating">
                <span>Excelent</span>
                <button>8.9</button>
            </div>
            <div className="siDeatailsTexts">
                <span className="siPrice">${" "}200</span>
                <span className="siTax">Includes taxes and fees</span>
                <button className="siCheckButton" onClick={()=>navigate("/hotels/:id")}>Check Availability</button>

            </div>
        </div>
      
    </div>
  )
}

export default SearchItem
