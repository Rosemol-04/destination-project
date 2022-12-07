import React from 'react';
import "../styles/signin.css"
import {Link} from 'react-router-dom';
import { ReactDOM } from 'react';
import { MDBBtn, MDBIcon }  from 'mdb-react-ui-kit';


class LoginForm extends React.Component{
render(){
  return(
    <div id="loginform">
      <FormHeader title="Login" />
      <Form />
      <OtherMethods />
      </div>
    )
  }
}

const FormHeader = props => (
    <h2 id="headerTitle">{props.title}</h2>
);
const Form = props => (
   <div>
     <FormInput description="Username" placeholder="Enter your username" type="text" />
     <FormInput description="Password" placeholder="Enter your password" type="password"/>
     <FormButton title=<Link to='/Destinationfind'>Log In</Link>/>
   </div>
);

const FormButton = props => (

  <div id="button" class="row">

    <button>{props.title}</button>

  </div>

);


const FormInput = props => (

  <div class="row">

    <label>{props.description}</label>

    <input type={props.type} placeholder={props.placeholder}/>

  </div>  

);

const OtherMethods = props => (

  <div id="alternativeLogin">

    <label>Or sign in with:</label>


    <div id="iconGroup">

      <Facebook />

      <Twitter />

      <Google />

    </div>

  </div>

);


const Facebook = props => (

  
  <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
    <MDBIcon fab icon='facebook-f' />
  </MDBBtn>
);

const Twitter = props => (

  <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
  <MDBIcon fab icon='twitter' />
</MDBBtn>

);



const Google = props => (

  <MDBBtn className='m-1' style={{ backgroundColor: '#dd4b39' }} href='#'>
  <MDBIcon fab icon='google' />
</MDBBtn>



);
export default LoginForm;