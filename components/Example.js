import React from 'react';
import "../styles/example.css"
import {Link} from 'react-router-dom';

const Example = () => {
  return (
    <div>
      <form>
      <div class="container">
        <h1>Let's Go</h1>
        <p>Enter your interests to find your magical expedition Spot!!!</p>
        <hr></hr>

        <label for="type"><b>Type of Destination</b></label>
        <input type="text" placeholder="International/Local" name="type" required></input>


        <label for="area"><b>Interested areas</b></label>
        <input type="text" placeholder="Mountain/Beach/Island/Forest" name="area" required></input>

        <label for="mode"><b>Mode of Travel</b></label>
        <input type="text" placeholder="Flight/Train/Bus/Trucking" name="mode" required></input>

        <label for="expenditure"><b>Expenditure</b></label>
        <input type="text" placeholder="Expected expenses" name="expenditure" required></input>



        <label for="company"><b>Travel Company</b></label>
        <input type="text" placeholder="Enter interested travel company" name="company" required></input>

        <label for="season"><b>Season</b></label>
        <input type="text" placeholder="Summer/Winter/Autumn/Rainy" name="season" required></input>

        

        <div class="clearfix">
          
          <button type="submit" class="sign-up-btn"><Link to='/Demo'>SUBMIT</Link> </button>
        </div>
      </div>
      </form>
    </div>
  );
}

export default Example;
