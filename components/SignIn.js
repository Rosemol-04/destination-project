import React, { useState } from 'react';
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
const Form = (props) => {
  const [uname,setUserName] = useState("");
  const [passwd,setPasswd] = useState("");
  return (
<div>
     <FormInput description="Username" placeholder="Enter your username" type="text" fun={setUserName}/>
     <FormInput description="Password" placeholder="Enter your password" type="password" fun={setPasswd}/>
     <FormButton title=<Link to='/Example' data={{uname,passwd}}>Log In</Link>/>
   </div>
  )
   
;
}

const FormButton = (props) => {
  let b = props.title.props.data;
  
  const body = JSON.stringify(b);
  return (
  <div id="button" class="row">

  <button onClick={async (e)=>{
    console.log("hello");
    
    const resp = await fetch("http://localhost:8000/login",{
      headers: {
        "Content-type": "application/json",
      },
      body,
    });

    console.log("hello",resp);
  }}>{props.title}</button>

</div>
)
  

};


const FormInput = (props) => {
  


  return ( 
  <div class="row">

  <label>{props.description}</label>

  <input type={props.type} placeholder={props.placeholder} onChange={(e)=>{
    props.fun(e.target.value);
    console.log(e.target.value);
  }}/>

</div>  );

 

};

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