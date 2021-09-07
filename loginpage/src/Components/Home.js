import React,{useEffect, useState} from 'react';
import{Redirect, Link} from "react-router-dom";
// import Avatar from '@material-ui/core/Avatar';
import { FormControl, Grid, Input ,Paper, FormGroup, Avatar, TextField, Button, Typography, makeStyles } from "@material-ui/core"
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useHistory } from "react-router-dom";
import axios from 'axios';
import { validateYupSchema } from 'formik';

 
const useStyles = makeStyles  ({
    logg : {
     color: 'blue', 
     textDecoration : 'none',
     fontSize: 20,
     marginLeft:10
    }
  })

  const paperStyle={padding :20, height:'50vh',width:390, margin:"20px auto"}
  const classes= useStyles;


  

function Home({authorized}){
    const [user, setUser]= useState({});
    const history = useHistory();
    

    const deletebutton = () => {
      localStorage.removeItem(user.email);
      history.push('/login');
      localStorage.setItem('currentUser',JSON.stringify(null));
    }
    
    
     


  const handleSubmit = () => {
    console.log(user);
    localStorage.setItem(user.email, JSON.stringify(user));
    

  }

    useEffect(() => {

        // axios.get('http://192.168.0.238/api/users/me').then((response)=> {
            // console.log("me", response);
        //   })
        const newUser = JSON.parse(localStorage.getItem('currentUser'));
 
        const data = JSON.parse(localStorage.getItem(newUser));
        console.log('userdata', data);
        setUser(data)
        newUser===null && history.push('/login')

    }, [])

    
  
    
    return (
        <div>
        <Grid>
       <Paper elevation={10} style={paperStyle}>
      
         <Grid align='center'>
         <Avatar src="/broken-image.jpg" />
      <h2> my profile </h2>
{/* <h3>Name: {user.name}</h3> */}
<form>
  <label>
     Name:
    
    <input value={user?.name} onChange={e => setUser({... user, name : e.target.value})} type="text" name="name"  />
      

    {/* <Button aria-label="create" onClick={handleShow}> */}
  {/* <CreateIcon /> */}
 {/* </Button> */}
    
  </label>

  <label>
    password: 
    
    <input value={user?.password} onChange= {e => setUser({... user, password : e.target.value})} type="password" name="password"/>
    {/* <Button aria-label="create" onClick={handleShow}> */}
    

    <Button onClick={handleSubmit}> Submit </Button>
  {/* <CreateIcon /> */}
{/* </Button> */}
    
    
  </label>

  </form>


<Typography>
          <Link  className={classes.logg} to="/login"> 
          Logout 
         </Link>
        </Typography> 
        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={deletebutton}
        
      >
        Delete
      </Button>

      </Grid>
      </Paper>
      </Grid>
     
        </div>

    );
}

export default Home
