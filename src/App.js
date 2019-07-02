import React, { Component } from 'react'
import { Element } from 'react-scroll'
import './resources/styles.css'
import Header from './components/header-footer/Header'
import Featured from './components/featured'
import VenueNfo from './components/venueNfo'
import Highlights from './components/Highlights'
import Pricing from './components/pricing'
import Location from './components/location'
import Footer from './components/header-footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: "800px", background: "cornflowerblue" }}>
        <Header/>
        <Element name="event"><Featured/></Element>
        <Element name="venue"><VenueNfo/></Element>
        <Element name="highlights"><Highlights/></Element>
        <Element name="pricing"><Pricing/></Element>
        <Element name="location"><Location/></Element>
        <Footer/>
      </div>
    )
  }
}

export default App;
