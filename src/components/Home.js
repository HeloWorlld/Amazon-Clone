import React from "react";

import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                {/* Background image */}
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />

                {/* Product row 1 */}
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="Apple iPhone 11 Pro Max (256GB) - Silver"
                        price={1299.0}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/81hA4nb-%2BqL._AC_SL1500_.jpg"
                    />
                    <Product
                        id="49538094"
                        title="Apple MacBook Pro (16-Inch, 16GB RAM, 512GB Storage) - Space Grey"
                        price={2399.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._AC_SL1500_.jpg"
                    />
                </div>

                {/* Product row 2 */}
                <div className="home__row">
                    <Product
                        id="4903850"
                        title="
                        Apple Watch Series 5 (GPS, 44mm) - Space Gray Aluminum Case with Black Sport Band"
                        price={333.87}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71XlrIexnaL._AC_SL1500_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="PlayStation 5 Console"
                        rating={0}
                        image="https://images-na.ssl-images-amazon.com/images/I/619BkvKW35L._SL1500_.jpg"
                        unavailable
                    />
                    <Product
                        id="3254354345"
                        title="
                        Razer Seiren X USB Digital Microphone and Headphone Amplifier"
                        price={99.99}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51IIgpigr7L._AC_SL1200_.jpg"
                    />
                </div>

                {/* Product row 3 */}
                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71tZW1aa%2BPL._AC_SL1500_.jpg"
                    />
                </div>

                {/* Product row 4 */}
                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung Galaxy Note20 Ultra 5G Sim Free Android Mobile Phone Mystic Black 256 GB"
                        price={1179.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81%2BcPzE2KbL._AC_SL1500_.jpg"
                    />
                    <Product
                        id="90829332"
                        title="
                        Huawei P40 Pro 5G Dual Sim 8GB+256GB International Version - Deep Sea Blue"
                        price={888.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61VX0szn4aL._AC_SL1000_.jpg"
                    />
                    <Product
                        id="90829332"
                        title="
                        Samsung Galaxy S20 Ultra 5G Mobile Phone; Sim Free Smartphone - Cosmic Grey"
                        price={1199.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61LrB3GYdcL._AC_SL1500_.jpg"
                    />
                    <Product
                        id="90829332"
                        title="Xiaomi Mi 10 Pro 8/256GB 5G Smartphone alpine white EU"
                        price={1006.21}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/51ItsCcw%2B%2BL._AC_SL1000_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
