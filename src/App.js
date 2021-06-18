// import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contacts';
import Navbar from './components/Navbar';
import Support from './components/Support';
import Programs from './components/Programs';
import Events from './components/Events';


import './App.css'

import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {getAllProducts} from '../../../app/api/contacts'


function App() {

  const [product, setProduct] = useState([])
  const getProductData = async () => {
    try {
      const data = await axios.get("https://movieapp-server.herokuapp.com/users");
      // const data=  await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(data)
      setProduct(data.data)
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getProductData()
  }, []);
  console.log(product)


  return (

    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/support' component={Support} />
        <Route path='/events' component={Events} />
        <Route path='/programs' component={Programs} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>


  );
}

export default App;
