import React, { Fragment } from 'react';

import Home from './Home/Home';

import Service from './Service/Service';
import Facts from './Facts/Facts';
import Blog from './Chemical_Coatings/Chemicals_Coatings';
import Contact from './Contact/Contact';
import MapMarker from './MapMarker/MapMarker';
import Facillities from './Facilities/Facillities';

const sections = () => {
  return (
    <Fragment>
      <Home />
      <Facillities/>
      <Service />
      <Blog />
      <Facts />
      <Contact />
      <MapMarker />
    </Fragment>
  );
};

export default sections;
