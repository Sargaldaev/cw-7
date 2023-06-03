import React from 'react';
import './Menu.css';

interface Iprops {
  img: string;
  name: string;
  count: number | string;
  onImgClick: React.MouseEventHandler;
}

const Menu: React.FC<Iprops> = props => {
  return (

    <div className="menu" onClick={props.onImgClick}>
      <img src={props.img} alt={props.name} className="img"/>
      <p>{props.name}</p>
      <p>{props.count}</p>
    </div>

  );
};
export default Menu;
