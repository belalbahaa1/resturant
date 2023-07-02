import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-revers">
      <img src={images.chef} alt="" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="chef's word" />
      <h1 className="headtext__cormorant">what we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <p className="p__opensans">
          Expedita ipsa earum molestiae facilis ex beatae iure quibusdam
          accusantium iusto consequuntur, qui nam non fugit! Quod repudiandae
          est nihil adipisci amet.
        </p>
      </div>
      <div className="app__chef-sign">
        <p className="chef__name">John Doe</p>
        <p className="p__opensans">chef & founder</p>
        <img src={images.sign} alt="" />
      </div>
    </div>
  </div>
);

export default Chef;
