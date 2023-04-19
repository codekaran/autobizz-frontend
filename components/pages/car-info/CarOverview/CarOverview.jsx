import React, { useState } from 'react'
import {container,tabbedView,tabButtons,tabDetails,selectedTab} from './CarOverview.module.scss';
import Overview from './Overview'
import Specifications from './Specifications'
import Features from './Features'
function CarOverview(props) {
  const [selected,setSelected] = useState(1);
  const renderSwitch = (selected) =>{
    switch (selected) {
      case 1:
      return <Overview data={props.data}/>;
      break;
      case 2:
      return <Features data={props.data}/>;
      break;
      case 3:
      return <Specifications data={props.data}/>;
      break;
      default:
      return <Overview/>;
        break;
    }
  }
  return (
    <div className={container}>
       
        <div className={tabbedView}>
        <h4>Car Overview</h4>
            <div className={tabButtons}>
                <ul>
                    <li className={selected === 1 && selectedTab} onClick={()=>setSelected(1)}>Overview</li>
                    <li className={selected === 2 && selectedTab} onClick={()=>setSelected(2)}>Features</li>
                    <li className={selected === 3 && selectedTab} onClick={()=>setSelected(3)}>Specifications</li>
                </ul>
            </div>
            <div className={tabDetails}>
             {renderSwitch(selected)}
            </div>
        </div>
    </div>
  )
}

export default CarOverview