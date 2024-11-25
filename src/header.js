
const header =()=>{
    return (
      <div id="header">
        <ul className="header_navbar-list">
          <li className="header_navbar-item">
            <img src="logo.png" alt="logo_theBox" />
          </li>
          <li className="header_navbar-item text-italic text-bold">
            The
          </li>
          <div>Box</div>
        </ul>
        <ul className="header_navbar-list">
          <li className="header_navbar-item"><a href="#">Home</a></li>
          <li className="header_navbar-item"><a href="#">About Us</a></li>
          <li className="header_navbar-item"><a href="#">Projects</a></li>
          <li className="header_navbar-item"><a href="#">Services</a></li>
          <li className="header_navbar-item"><a href="#">Contact Us</a></li>
        </ul>
      </div>
    )
}
export default header;