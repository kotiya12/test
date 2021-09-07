

import { FormControl, Grid, Input ,Paper, FormGroup, Avatar, TextField, Button, Typography, makeStyles } from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useState } from "react";
import { Link, useHistory, Router } from "react-router-dom";
import { Formik, Form ,Field,ErrorMessage} from "formik";
// import Form from "rc-field-form/es/Form";
import * as Yup from 'yup';
import React from "react";
import axios from 'axios';




const useStyles = makeStyles  ({
  logg : {
   color: 'blue', 
   textDecoration : 'none',
   fontSize: 20,
   marginLeft:10
  }
})


const initialValues = {             
  email:'',
  password: '',
  rememberme: false 
}


const Login = () => {
  // const [email, setEmail] = useState(initialValues);
  // const [password, setPassword] =useState(initialValues);
  const classes= useStyles;
  const history = useHistory();

  // const { username, password} = user; 


    const paperStyle={padding :20, height:'70vh',width:350, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#009688'}
    const containerStyle={ marginTop: '20px'}
    const btnStyle={margin: '10px 5px'}

  //   const onValueChange = (e) => {
  //     console.log(e.target.value);
  //     setUser({...user,[e.target.name] : e.target.value})
  // }
 const validationSchema=Yup.object().shape({
      email:Yup.string().email('please enter valid email').required("Required"),
      password:Yup.string().required("Required")
 })
  const onSubmit=(values, props) =>{ 
    console.log(values)
  
    let login = {
     
      email:values.email,
      password:values.password
    }
    axios.get('https://fakestoreapi.com/users/1997')
    .then((response)=> {
      console.log("login result", response);
      // history.push('/');
    })
    const temp = JSON.parse(localStorage.getItem(values.email));
    // // const tasks = Object.values(temp);
    console.log(temp);
    console.log(values);
    console.log(values.password);
    console.log(temp.password);
    if(values.email === temp.email&& values.password === temp.password)
    {
      console.log("working");
      localStorage.setItem('currentUser', JSON.stringify(values.email));
      history.push('/');
    }else{
      return null;
    }
    // props.resetForm()
    setTimeout(()=>{
      props.resetForm()
      props.setSubmitting(true)
    },2000)

    console.log(props)
  }
  // let data =  localStorage.getItem('username').replace(/"/g,"");
  

  return(
    <Grid>
       <Paper elevation={10} style={paperStyle}>
         <Grid align='center'>
       <Avatar style={avatarStyle}><LockOutlinedIcon /> </Avatar>
      <h2> Login </h2>
      </Grid>
      <Formik initialValues ={initialValues} onSubmit={onSubmit} validationSchema ={validationSchema}>
        {(props) => (
          <Form>
            {/* {console.log(props)} */}
            <Field as={TextField} style={containerStyle} label='Email' placeholder='Enter email' fullWidth required
            helperText={<ErrorMessage name="email"/>} 
        name='email'  />
      <Field as={TextField} style={containerStyle} label='Password' placeholder='Enter Password' type='password' fullWidth required 
       helperText={<ErrorMessage name="password"/>} 
        name='password'  />
      <Field as ={FormControlLabel} style={containerStyle}
      name='rememberme'
        control={
          <Checkbox
            
            
            color="primary"
          />
        }
        label="Remember Me"
      />
         
      

      <Button style={btnStyle} type='submit' color='primary' variant='contained' fullWidth>Login</Button>
      </Form>
        )}
      </Formik>
        <Typography>
          <Link  className={classes.logg} to="/forgotpassword"> 
          Forgot Password ?
         </Link>
        </Typography>
       <Typography> Do you have an account?
       <Link className={classes.logg} to="/signup">SignUp</Link>
  </Typography>
     </Paper>
     </Grid> 
  );
}

export default Login 

