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




const ForgotPassword = () => {
    // const [email, setEmail] = useState(initialValues);
    // const [password, setPassword] =useState(initialValues);
    const classes= useStyles;
    const history = useHistory();


    const initialValues = {             
        email:''
       
      }
      

    
    const paperStyle={padding :20, height:'40vh',width:300, margin:"20px auto"}
    const btnStyle={margin: '10px 5px'}
    const containerStyle={ marginTop: '20px'}


    const validationSchema=Yup.object().shape({
        email:Yup.string().email('please enter valid email').required("Required"),
    })

    const onSubmit=(values, props) =>{ 
        console.log(values)

        let forgot = {
     
            email:values.email
        }

        axios.post('http://192.168.0.238:3000/users/forget',forgot)
        .then((response)=> {
          console.log("login result", response);
          history.push('/resetpassword');
        })
    }

    return(

    <Grid>
       <Paper elevation={10} style={paperStyle}>
         <Grid align='center'>
       {/* <Avatar style={avatarStyle}><LockOutlinedIcon /> </Avatar> */}
      <h2> Forgot Password </h2>
      </Grid>
      <Formik initialValues ={initialValues} onSubmit={onSubmit} validationSchema ={validationSchema}>
        {(props) => (
          <Form>
            {/* {console.log(props)} */}
            <Field as={TextField} tsyle={containerStyle} label='Email' placeholder='Enter email' fullWidth required
            helperText={<ErrorMessage name="email"/>} 
        name='email'  />
     
         
      

      <Button style={btnStyle}  type='submit' color='primary' variant='contained' fullWidth>CONTINUE</Button>
      </Form>
        )}
      </Formik>
      </Paper>
     </Grid> 
  );
}

export default ForgotPassword

