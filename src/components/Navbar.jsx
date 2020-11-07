
import React from "react"
import Menu from "./Menu.jsx"

const Navbar = ()=>{
  const [show, setShow] = React.useState(false)
  return(
    <fragment>
    {show === true && (
    <Menu />
    )}
      
    <nav className="navbar" style={{
      width: "100vw",
      height: "10vh",
      display : "flex",
      justifyContent: "flex-start",
      alignItems : "center",
      backgroundColor : "black",
      color : "#fff",
      padding : "0px 8%",
      position : "fixed",
      top : "0",
      left : "0",
      
    }}>
      <div className="brand" style={{
        fontSize: "1.6rem",
        textTransform: "uppercase",
      }}>Jvalley</div>
      <span className="material-icons" style={{
        fontSize : "1.6rem",
        marginLeft: "auto"
      }} onClick={()=>{
        setShow(!show)
      }}>reorder</span>
    </nav>
    
    </fragment>
    
    )
}

export default Navbar