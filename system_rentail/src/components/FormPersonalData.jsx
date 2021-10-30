import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import  ButtonEdit  from "./Buttons";

 
import Button from '@mui/material/Button';
 
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
 
import TextField from '@mui/material/TextField';

export default function FormPersonalData(props) {

    const [ editData, setEditData ] = React.useState({})


    const handleChange = (e) => {
        editData[e.target.name] = e.target.value;
    }

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            let url = 'https://income-system.herokuapp.com/users/617ae14e3a40aa00162970a8'
            const request = await fetch(url, {
              method: "PUT", 
              headers: { "Content-Type": "application/json", "Authorization": "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2FlMTRlM2E0MGFhMDAxNjI5NzBhOCIsInVzZXJuYW1lIjoiam5hbWUiLCJleHAiOjE2NDA2MjcwMjIsImlhdCI6MTYzNTQ0MzAyMn0.BxY-c14bn3198yT_tqVmVqywFbXMpdk2Mm2IwGNM0EE" },
              body: JSON.stringify(editData)
            }) 
            const jsonRequest = await request.json()
            console.log(jsonRequest) 
        } catch (e){ 
            console.log(e); 
        } 
    }

    return (
        <div className="container-p">
         
        <div className="form-p"><h2>Editar Perfil</h2></div>
         <form>  
          <div className="form-gp">
            <label hname="nameP">Nombre</label>
            <input
              type="text"
              name="username"
              className="slabel"
              placeholder="Nombre"
              value={props.userData.firstname}
            />
          </div>
    
         <div className="form-gp">
            <label lname="lastnameP">Apellido</label>
            <input
              type="text"
              name="lastnameP"
              className="slabel"
              placeholder="Apellido"
              value={props.userData.lastname}
            />
          </div>
    
          <div className="form-gp">
            <label email="emailP">Correo</label>
            <input
              type="email"
              name="emailP"
              className="slabel"
              placeholder="Correo"
              value={props.userData.email}
            />
          </div> 
    
          <div className="form-gp">
            <label uname="usernameP">Username</label>
            <input
              type="text"
              name="usernameP"
              className="slabel"
              placeholder="Username"
            //  value={editData.username}
            value={props.userData.username}
              onChange={handleChange}
            />
          </div>
    
          <div className="form-gp">
            <label pword="passwordP">Password</label>
            <input
              type="password"
              name="passwordP"
              className="slabel"
              placeholder="Password"
              value={props.userData.password}
            />
          </div> 

          <div className="form-gp">
            <label pword="passwordP">Password</label>
            <input
              type="password"
              name="passwordP"
              className="slabel"
              placeholder="Password"
              value={props.userData.password}
            />
          </div> 
          <Box sx={{ '& button': { m: 1 } }}>

          <Button variant="outlined" size="medium">
         Editar
        </Button>

</Box>
          <Button variant="contained" endIcon={<SendIcon />}>
       Guardar
      </Button>
            {/* <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab color="secondary" aria-label="add">
                  <AddIcon 
                  onClick={handleClick}/>
                </Fab>
            </Box> */}
            {/* <ButtonEdit
          onClick={handleClick}
          />  */}
        </form>  
      </div>
    )

}
