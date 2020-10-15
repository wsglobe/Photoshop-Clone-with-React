import React from 'react'
import './App.css'
import Slider from "./Slider"
import SidebarItem from './SidebarItem'

const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },

function App() {
  return (
    <div className="container">
      <div className="main-image" />
      <div className="sidebar">
        <SidebarItem />
      </div>
      <Slider />
    </div>
  )
}

export default App;
