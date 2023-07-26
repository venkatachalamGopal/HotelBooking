import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
        <h1>Save time ,Save money</h1>
        <p>Signup we will send best deals for you.</p>
        <div className="mailInputContainer">
            <input type="text" placeholder="Enter Your Email" />
            <button>Subscribe</button>
        </div>

    </div>
  )
}

export default MailList
