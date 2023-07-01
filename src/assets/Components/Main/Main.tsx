import React, { FC } from 'react'
import './Main.scss'
import Hello from './Hello/Hello'
import Comparison from './Comparison/Comparison'
import Advantages from './Advantages/Advantages'
// import DesignSlider from './DesignSlider/DesignSlider'
import Map from './Map/Map'
// import CardSlider from './CardSlider/CardSlider'
import Clients from './Clients/Clients'


// --------------------------------------------- //
//                    # Main                     //
// --------------------------------------------- //

const Main: FC = () => {
  return (
    <div className="main">
      <Hello />
      <Comparison />
      <Advantages />
      {/* <DesignSlider /> */}
      <Clients />
      <Map />
      {/* <CardSlider /> */}
    </div>
  );
};

// --------------------------------------------- //
//                    End Main                   //
// --------------------------------------------- //


export default Main;