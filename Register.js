import React from 'react';
import "../styles/register.css"
import {Link} from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <form>
      <div class="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr></hr>

        <label for="name"><b>Full Name</b></label>
        <input type="text" placeholder="Enter your name" name="name" required></input>

        <label for="location"><b>Location</b></label>
        <input type="text" placeholder="Enter your location" name="location" required></input>

        <label for="places"><b>Places Visited</b></label>
        <input type="text" placeholder="Enter previously visited places" name="places" required></input>



        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required></input>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required></input>

        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>

        <div class="clearfix">
          <button type="button" class="cancelbtn">Cancel</button>
          <button type="submit" class="signupbtn"><Link to='/Destinationfind' >SIGN UP</Link></button>

        </div>
      </div>
      </form>
    </div>
  );
}

export default Register;
