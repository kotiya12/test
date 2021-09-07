import { FormControl, Grid, Input ,Paper, FormGroup, Avatar, TextField, Button, Typography, makeStyles } from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import { useState } from "react";
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




const ResetPassword = () => {
    // const [email, setEmail] = useState(initialValues);
    // const [password, setPassword] =useState(initialValues);
    const classes= useStyles;
    const history = useHistory();


    const initialValues = {             
        NewPassword:'',
        ConfirmPassword:''
       
      }
      

    
    const paperStyle={padding :20, height:'60vh',width:300, margin:"20px auto"}
    const btnStyle={margin: '10px 5px'}
    const containerStyle={ marginTop: '20px'}


    const validationSchema=Yup.object().shape({
        NewPassword:Yup.string().min(8,"Password minimum length should be 8").required("Required"),
        ConfirmPassword:Yup.string().oneOf([Yup.ref('NewPassword')], "Password not matched").required("required")
    })

    const onSubmit=(values, props) =>{ 
        console.log(values)
        history.push('/login');
    }

    return(

    <Grid>
       <Paper elevation={10} style={paperStyle}>
         <Grid align='center'>
       {/* <Avatar style={avatarStyle}><LockOutlinedIcon /> </Avatar> */}
      <h2> Reset Password </h2>
      </Grid>
      <Formik initialValues ={initialValues} onSubmit={onSubmit} validationSchema ={validationSchema}>
        {(props) => (
          <Form>
            {/* {console.log(props)} */}
            <Field as={TextField} style={containerStyle} label='New Password' placeholder='Enter Password' type='password' fullWidth required
            helperText={<ErrorMessage name="NewPassword"/>} 
        name='NewPassword'  />

         <Field as={TextField} style={containerStyle} label='Confirm Password' placeholder='Confirm Password' type='password' fullWidth required
            helperText={<ErrorMessage name="ConfirmPassword"/>} 
        name='ConfirmPassword'  />
     
         
      

      <Button style={btnStyle} type='submit' color='primary' variant='contained' fullWidth> Reset Password</Button>
      </Form>
        )}
      </Formik>
      </Paper>
     </Grid> 
  );
}

export default ResetPassword

