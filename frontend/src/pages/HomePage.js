import React from 'react';
import {Container, Row} from 'react-bootstrap';
import Section1 from '../components/Section1.js';
import Section2 from '../components/Section2.js';
import Section3 from '../components/Section3.js';
import Section4 from '../components/Section4.js';
const HomePage = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
};

export default HomePage;
