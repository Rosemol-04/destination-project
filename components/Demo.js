import React from 'react';
import CardItem from './CardItem';
import 'C:/Users/acer/destination-project/src/styles/demo.css'
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
              src='/images/beach1.jpg'
              text='Get into the magical journey and expect the unexpected'
              label=' Kovalam Beach'
              path='/New'
            />
            <CardItem
              src='/images/beach3.jpg'
              text='Get into the magical journey and expect the unexpected'
              label=' Bekal Beach '
              path='/Last'
              
            />
          </ul>
           
             
          
        </div>
      </div>
    </div>
  );
}


            


export default Result;