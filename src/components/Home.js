import React from 'react'
import '../css/Home.css';
import Product from './Product';
function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img 
            src="img/banner.jpg"
            alt=""
            className='home__img'
            />

            <div className='home__row'>
                <Product 
                    id="1"
                    title="The Lean Startup"
                    description="How Constant Innovation Creates Radically Successful Businesses by Eric Ries Paperback – 6 October"
                    price="19.99"
                    image="products/product1.jpg"
                    rating={5}
                />
                <Product 
                    id="2"
                    title="Stand Mixer"
                    description="1000W Kitchen Mixer Electric Food Mixer, 6 Speeds with 304 Stainless Steel Bowl Tilt-Head Dough Mixer, Dough Hook, Whisk, Beater, Splash Guard & Scraper"
                    price="500"
                    image="products/product2.jpg"
                    rating={3}
                />
            </div>

            <div className='home__row'>
                <Product 
                    id="3"
                    title="Amazfit GTS 2"
                    description="Smart Watch for Android iPhone Bluetooth Phone Calls, Alexa GPS Built-In, Sports Watch for Men Women, 90 Sports Modes, Blood Oxygen Heart Rate Sleep Tracking, Waterproof, Midnight Black"
                    price="150"
                    image="products/product3.jpg"
                    rating={2}
                />
                <Product 
                    id="4"
                    title="i12 Pro MAX Unlocked Smartphone"
                    description="6.26in HD Screen Mobile Phone, 1+8G Dual Sim Cell Phone for Android 8.1 Black(US)"
                    price="800"
                    image="products/product4.jpg"
                    rating={4}
                />
                <Product 
                    id="5"
                    title="Apple iPhone 13 Pro"
                    description="Max with FaceTime - 256GB, 6GB RAM, 4G LTE, Sierra Blue, Single SIM & E-SIM"
                    price="1400"
                    image="products/product5.jpg"
                    rating={5}
                />
            </div>

            <div className='home__row'>
                <Product 
                    id="6"
                    title="12.9-inchiPadProWi‑Fi256GB-SpaceGrey"
                    description="Max with FaceTime - 256GB, 6GB RAM, 4G LTE, Sierra Blue, Single SIM & E-SIM"
                    price="3000"
                    image="products/product6.jpg"
                    rating={5}
                />
            </div>
            
        </div>
    </div>
  )
}

export default Home
