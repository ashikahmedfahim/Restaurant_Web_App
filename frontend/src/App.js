import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import HomePage from './pages/HomePage';
import AdminHomePage from './pages/AdminHomePage';
import Footer from './components/Footer';

function App() {
  const [finalData, setData] = useState('');
  async function getUser() {
    try {
      const response = await axios.post('http://localhost:5000/api/foods', {
        name: 'Burger',
        price: 10,
      });
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Router>
      {/* <h1>{finalData.name}</h1> */}
      {/* <Navbar /> */}
      {/* <Route path="/" component={HomePage} exact /> */}
      <Route path="/" component={AdminHomePage} exact />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
