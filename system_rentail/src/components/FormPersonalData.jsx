import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import  ButtonEdit  from "./Buttons";
import { 
  Checkbox,
  Grid,
   
  FormControlLabel,
  Paper 
   }
  from '@material-ui/core';
 
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
      <div style={{ padding: 30 }}>
      <Paper>
        <Grid
          container
          spacing={3}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField label="Username"></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'}></TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  // checked={checked}
                  onChange={handleChange}
                  label={'Keep me logged in'}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              }
              label="Keep me logged in"
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth> Login </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
 
    
      
}
