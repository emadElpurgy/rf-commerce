import React from 'react'
import './Home.css';
import banner from './banner.jpg'
import Product from './Product';
function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img 
            src={banner}
            alt=""
            className='home__img'
            />

            <div className='home__row'>
                <Product 
                    id="1"
                    title="The Lean Startup - How Constant Innovation Creates Radically Successful Businesses by Eric Ries Paperback – 6 October"
                    price="19.99"
                    image="https://m.media-amazon.com/images/I/51aEhyjQGrL._AC_SY1000_.jpg"
                    rating={5}
                />
                <Product 
                    id="2"
                    title="Stand Mixer, 1000W Kitchen Mixer Electric Food Mixer, 6 Speeds with 304 Stainless Steel Bowl Tilt-Head Dough Mixer, Dough Hook, Whisk, Beater, Splash Guard & Scraper"
                    price="500"
                    image="https://m.media-amazon.com/images/I/71zC5wzysWS._AC_SL1500_.jpg"
                    rating={3}
                />
            </div>

            <div className='home__row'>
                <Product 
                    id="3"
                    title="Amazfit GTS 2 Smart Watch for Android iPhone, Bluetooth Phone Calls, Alexa GPS Built-In, Sports Watch for Men Women, 90 Sports Modes, Blood Oxygen Heart Rate Sleep Tracking, Waterproof, Midnight Black"
                    price="150"
                    image="https://m.media-amazon.com/images/I/61PxABaxpoL._AC_SX679_.jpg"
                    rating={2}
                />
                <Product 
                    id="4"
                    title="i12 Pro MAX Unlocked Smartphone, 6.26in HD Screen Mobile Phone, 1+8G Dual Sim Cell Phone for Android 8.1 Black(US)"
                    price="800"
                    image="https://m.media-amazon.com/images/I/716OmvUFy1L._AC_SX522_.jpg"
                    rating={4}
                />
                <Product 
                    id="5"
                    title="Apple iPhone 13 Pro Max with FaceTime - 256GB, 6GB RAM, 4G LTE, Sierra Blue, Single SIM & E-SIM"
                    price="1400"
                    image="https://m.media-amazon.com/images/I/614fbeOTjDL._AC_SY679_.jpg"
                    rating={5}
                />
            </div>

            <div className='home__row'>
                <Product 
                    id="6"
                    title="12.9-inchiPadProWi‑Fi256GB-SpaceGrey"
                    price="3000"
                    image="https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_SX522_.jpg"
                    rating={5}
                />
            </div>
            
        </div>
    </div>
  )
}

export default Home
