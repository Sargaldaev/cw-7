import React from 'react';
import './Order.css';
import {IMenu, IOrdersState} from '../../App';
import {nanoid} from 'nanoid';

interface Iprops {
  ordersState: IOrdersState[];
  price: number;
  MENU: IMenu[];
  onBtnClick: (index: number) => void;
}

const Order: React.FC<Iprops> = props => {

  const getOrder = (count: number, name: string) => {
    const orderDivs = [];

    for (let i = 0; i < count; i++) {
      orderDivs.push(<div className={name} key={nanoid()}></div>);
    }
    return orderDivs;
  };


  const totalCount = props.ordersState.reduce((acc, value) => {
    return acc + value.count;
  }, 0);

  return (
    <div>
      {
        totalCount === 0 ? <div className="order">Вы пока еще ничего не выбрали

        </div>
          :
          <div className="order-wrapper">

            <p className="price"><b> Total Price:</b>{props.price}coм</p>{

            props.ordersState.map((order, index) => {
              return (
                order.count ? (
                  <div className="orders-name" key={nanoid()}>
                    <p className="orderCount">{order.name}</p>
                    <p className="orderCount">{order.count} x {props.MENU[index].price * order.count}
                      <button className="btn" onClick={() => props.onBtnClick(index)}>remove</button></p>
                  </div>
                ) : null

              );
            })
          }

            {
              props.ordersState.map(order => getOrder(order.count, order.name))
            }
          </div>
      }</div>
  );
};

export default Order;
