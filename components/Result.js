import React from 'react';
import CardItem from './CardItem';
import 'C:/Users/acer/destination-project/src/styles/Result.css'
import {Link} from 'react-router-dom';
import Slider from 'C:/Users/acer/destination-project/src/components/Slider/icons/Slider.js'

function Result(props) {
  return (
    <div className='cards'>
      <h1><i>Here is your Travel Hole!!!</i>!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
              src='/images/mountain1.jpg'
              text='Get into the magical journey and expect the unexpected'
              label='Mount Everest'
              path='/Final'
            />
            <CardItem
              src='/images/mountain2.jpg'
              text='Get into the magical journey and expect the unexpected'
              label='Mount Denali'
              path='/Happy'
              
            />
          </ul>
           
             
          
        </div>
      </div>
    </div>
  );
}


            


export default Result;