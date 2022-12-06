import React from 'react';
import CardItem from './CardItem';
import 'C:/Users/acer/destination-project/src/styles/Result.css'
import {Link} from 'react-router-dom';
import Slider from 'C:/Users/acer/destination-project/src/components/Slider/icons/Slider.js'

function Result() {
  return (
    <div className='cards'>
      <h1><i>Here is your Travel Hole!!!</i>!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
              src=''
              text='Get into the magical journey and expect'
              label='Adventure'
              path='/Final'
            />
            <CardItem
              src=''
              text='Get into the magical journey and expect the unexpected'
              label='Luxury'
              path='/Final'
              
            />
          </ul>
           
             
          
        </div>
      </div>
    </div>
  );
}


            


export default Result;