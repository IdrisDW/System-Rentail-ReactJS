import React, { useState, useEffect } from "react";
import FormPersonalData from "./FormPersonalData";

import "../styles/personaldata.sass";


export default function PersonalData(props) {

  const [ userData, setUserData ] = useState(null)

  useEffect(() => { 
    const Peticion = async (url) => {
      try {
        const request = await fetch(url, {
          // method: "PUT", 
          headers: { "Content-Type": "application/json", "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2FlMTRlM2E0MGFhMDAxNjI5NzBhOCIsInVzZXJuYW1lIjoiam5hbWUiLCJleHAiOjE2NDA2MjcwMjIsImlhdCI6MTYzNTQ0MzAyMn0.BxY-c14bn3198yT_tqVmVqywFbXMpdk2Mm2IwGNM0EE" }
          // body: JSON.stringify({ "password_current": "nuevo", "password_new": "nuevo" }) })
        }) 
          const jsonRequest = await request.json() 
          setUserData(jsonRequest)
        } catch (e){ 
          console.log(e); 
        } } 
        Peticion('https://income-system.herokuapp.com/users/617ae14e3a40aa00162970a8') 
      },[])  

  return (
    <>
    {userData === null ? null : <FormPersonalData userData={userData}/>}
    </>
  )
}