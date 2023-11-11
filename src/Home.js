import React from "react";

import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src="/ecommerce.jpg" alt="" className="home__image" />

        <div className="home__row">
          <Product
            id="1"
            title="Discover the Stylish Blue Backpack with 15.5 Laptop Pocket. The perfect blend of fashion and function."
            price={131.99}
            rating={2}
            image="/bag.jpg"
          />
          <Product
            id="2"
            title="Explore our cutting-edge oven, a culinary masterpiece that elevates your cooking experience. Precision, efficiency, and gourmet results await you!"
            price={879.99}
            rating={4}
            image="/oven.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Dive into JavaScript with our comprehensive guide: 'JavaScript from Beginner to Professional.' Master the language, build web apps, and unlock limitless coding possibilities."
            price={55.96}
            rating={3}
            image="/JavaScript from Beginner to Professional.jpg"
          />
          <Product
            id="4"
            title="Unleash music on the go with our Portable Bluetooth Speakers. Superior sound, sleek design, and ultimate convenience."
            price={234.96}
            rating={1}
            image="/Portable Bluetooth Speakers.jpg"
          />
          <Product
            id="5"
            title="Apple iPad Pro 10.5: Unleash creativity and productivity with stunning display, powerful performance, and versatility."
            price={111.96}
            rating={5}
            image="/apple-ipad-Apple iPad Pro 10.5.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Introducing the Ultimate Viewing Experience: Our Ultra-Wide TV. Immerse yourself in a world of cinematic excellence. With its expansive screen, crystal-clear visuals, and immersive sound, you'll feel like you're right in the action. Elevate your entertainment with smart features and connectivity options, all encased in a sleek, modern design. Transform your living room into a home theater and experience the future of TV today!"
            price={5876.96}
            rating={6}
            image="/ultra wide TV.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
