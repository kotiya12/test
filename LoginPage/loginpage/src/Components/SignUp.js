import { FormControl, Grid, Input ,Paper, FormGroup, Avatar, TextField, Button, Typography, makeStyles } from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
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




const SignUp = () => {
  // const [user, setUser] = useState(initialValues);
  const classes= useStyles;
//   const history = useHistory();

  // const { username, password} = user; 


    const paperStyle={padding :20, height:'80vh',width:300, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#009688'}
    const containerStyle={ marginTop: '20px'}
    const btnStyle={margin: '10px 5px'}

    const initialValues = {             
      name  :'',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword:'',
    }

  //   const onValueChange = (e) => {
  //     console.log(e.target.value);
  //     setUser({...user,[e.target.name] : e.target.value})
  // }
 const validationSchema=Yup.object().shape({
      name:Yup.string().min(3,"It's too short").required("Required"),
      phoneNumber:Yup.number().typeError("Enter valid phone number").required("Required"),
      email:Yup.string().email("Enter valid email").required('Required'),
      password:Yup.string().min(8,"Password minimum length should be 8").required("Required"),
      confirmPassword:Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("required")
 })
  const onSubmit=(values,props) =>{ 
    // console.log(values);
    let signup = {
      name:values.name,
      email:values.email,
      password:values.password,
      phone:values.phoneNumber,
      business_type:"INDIVIDUAL",
      prefix:"+91",
      token:"X2343Xerxs"
    }
    axios.post('https://tyyiqawsui.free.beeceptor.com',signup)
    .then((response)=> {
      console.log("signup result", response);
    }).catch((err) =>{
      console.log(err);
    })
    localStorage.setItem(values.email, JSON.stringify(values));
  
    
  
    setTimeout(()=>{
      props.resetForm()
      props.setSubmitting(true)
    },2000)

    // console.log(props)
  }
  // let data =  localStorage.getItem('username').replace(/"/g,"");
  

  return(
    <Grid>
       <Paper elevation={10} style={paperStyle}>
         <Grid align='center'>
       <Avatar style={avatarStyle}><LockOutlinedIcon /> </Avatar>
      <h2> SignUp</h2>
      </Grid>
      <Formik initialValues ={initialValues} onSubmit={onSubmit} validationSchema ={validationSchema}>
        {(props) => (
          <Form>
            {/* {console.log(props)} */}
            <Field as={TextField} style={containerStyle} label='Name' placeholder='Enter your name' fullWidth required
            helperText={<ErrorMessage name="name"/>} 
        name='name'  />

           <Field as={TextField} style={containerStyle} label='Phone Number' placeholder='Enter your phone number' fullWidth required
            helperText={<ErrorMessage name="phoneNumber"/>} 
        name='phoneNumber'  /> 

           <Field as={TextField} style={containerStyle} label='Email' placeholder='Enter your phone email' fullWidth required
            helperText={<ErrorMessage name="email"/>} 
        name='email'  /> 

        
      <Field as={TextField} style={containerStyle} label='Password' placeholder='Enter Password' type='password' fullWidth required 
       helperText={<ErrorMessage name="password"/>} 
        name='password'  /> 

      <Field as={TextField} style={containerStyle} label='ConfirmPassword' placeholder='Enter Confirm Password' type='password' fullWidth required 
       helperText={<ErrorMessage name="confirmPassword"/>} 
        name='confirmPassword'  />

     
         
      

      <Button style={btnStyle} type='submit' color='primary' variant='contained' fullWidth>SignUp</Button>
      </Form>
        )}
      </Formik>
       
       <Typography> Already have an account
       <Link className={classes.logg} to="/login">LogIn</Link>
  </Typography>
     </Paper>
     </Grid> 
  );
}

export default SignUp

