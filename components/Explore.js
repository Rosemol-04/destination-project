import React from 'react';
import CardItem from './CardItem';
import './Explore.css';
import {Link} from 'react-router-dom';

function Explore() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/explore'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/Slider'
              
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/explore'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himalayan Mountains'
              label='Adventure'
              path='/explore'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/explore'
            />
             <CardItem
              src='images/pexels-asad-photo-maldives-1450340.jpg'
              text='Define the idea of paradise in Maldives'
              label='Beach Pristine'
              path='/explore'
            />
            <CardItem
              src='images/color.png'
              text='Enjoy the greenery of Kerala'
              label='Gods own country'
              path='/explore'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}


            


export default Explore;