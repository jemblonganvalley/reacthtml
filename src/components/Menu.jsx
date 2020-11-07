import React, { useState } from "react"

const Menu = ()=>{
  
  const [menu, setMenu ] = React.useState([
      {
        id : 1,
        name : "home",
        to : "/home"
      },
      {
        id : 2,
        name : "about",
        to : "/about"
      },
      {
        id : 3,
        name : "showcase",
        to : "/showcase"
      }
      
    ])
  
  return (
    <fragment>
    
    <div className="menu" style={{
      width : "50vw",
      height : "30vh",
      position : "fixed",
      top : "10vh",
      left : "0",
      display : "flex",
      flexDirection : "column",
      justifyContent : "space-around",
      alignItems : "flex-start",
      padding : "0 5%",
      backgroundColor : "#bebebe",
    }}>
      {menu.map((e)=>(
      <div className="menu_item" >
      <a href={e.to} >
        {e.name}
        </a>
      </div>
      
      ))}
    </div>
    
    </fragment>
    )
}

export default Menu