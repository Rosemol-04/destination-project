import React from 'react';
import "../styles/Result.css"


const Result = () => {
  return (
    <div>
      <form>
      <div class="container">
        <h1>Here is your Destination to EXPLORE</h1>
    
        <hr></hr>

        <label for="place"><b>Different Places</b></label>
        <input type="text" placeholder="" name="place" required></input>
        <label for="image"><b>Images</b></label>
        <input type="text" placeholder="" name="image" required></input>

        <label for="info"><b>Detailed Info</b></label>
        <input type="text" placeholder="" name="info" required></input>

        <label for="method"><b>Travel Method</b></label>
        <input type="text" placeholder="" name="method" required></input>



        <label for="distance"><b>Distance</b></label>
        <input type="text" placeholder="" name="distance" required></input>

        <label for="recommend"><b>Recommendations</b></label>
        <input type="text" placeholder="" name="recommend" required></input>

        

        <div class="clearfix">
          
          <button type="submit" class="signupbtn">!!!HAPPY JOURNEY!!!</button>
        </div>
      </div>
      </form>
    </div>
  );
}

export default Result;
