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
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          value={props.userData.firstname}
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>

      </Box>
    )

}
