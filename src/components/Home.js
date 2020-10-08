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
                        title="Samsung Smartphone Galaxy S9 (Single Sim) 64GB UK Version - Midnight Black"
                        price={239.99}
                        rating={5}
                        image="https://www.moneyforyourphone.com/wp-content/uploads/2019/05/78.png"
                    />
                    <Product
                        id="49538094"
                        title="Asus ROG Strix G (2019) Gaming Laptop, 15.6” IPS Type FHD, NVIDIA GeForce GTX 1650, Intel Core i7-9750H, 16GB DDR4, 1TB PCIe Nvme SSD, RGB KB, Windows 10 Home, GL531GT-EB76"
                        price={1148.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/811QpiYXe-L._AC_SL1500_.jpg"
                    />
                </div>

                {/* Product row 2 */}
                <div className="home__row">
                    <Product
                        id="4903850"
                        title="
                        Razer Kraken - Wired Gaming Headset for Multiplatform Gaming for PC, PS4, Xbox One and Switch, 50 mm Diaphragm, 3.5 mm Cable with Line Controls - Black"
                        price={56.4}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/71TGR0WCe-L._AC_SL1500_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                {/* Product row 2 */}
                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
