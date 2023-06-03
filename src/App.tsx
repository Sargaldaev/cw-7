import React, {useState} from 'react';
import {nanoid} from 'nanoid';
import './App.css';
import Burger from './assets/burger.png';
import Pepsi from './assets/pepsi.jpeg';
import Coffee from './assets/coffee.png';
import Fanta from './assets/fanta.jpeg';
import Cheeseburger from './assets/cheeseburger.jpeg';
import Fries from './assets/fries.jpeg';
import Order from './component/Order/Order';
import Menu from './component/Menu/Menu';

export interface IMenu {
  name: string;
  price: number;
  image: string;
}

export interface IOrdersState {
  name: string;
  count: number;
}

const MENU: IMenu[] = [
  {name: 'Burger', price: 60, image: Burger},
  {name: 'Fries', price: 50, image: Fries},
  {name: 'Cheeseburger', price: 80, image: Cheeseburger},
  {name: 'Coffee', price: 70, image: Coffee},
  {name: 'Fanta', price: 50, image: Fanta},
  {name: 'Pepsi', price: 50, image: Pepsi},
];

const PRICE: number = 0;
const App = () => {

    const [orders, setOrders] = useState<IOrdersState[]>([
        {name: 'Burger', count: 0},
        {name: 'Fries', count: 0},
        {name: 'Cheeseburger', count: 0},
        {name: 'Coffee', count: 0},
        {name: 'Fanta', count: 0},
        {name: 'Pepsi', count: 0},
      ]
    );

    const [price, setPrice] = useState<number>(PRICE);

    const setCount = (index: number) => {
      const copyOrders = [...orders];
      const copyOrder = {...copyOrders[index]};
      copyOrder.count++;
      copyOrders[index] = copyOrder;
      getPrice(copyOrders);
      setOrders(copyOrders);
    };

    const removeOrder = (index: number) => {
      const copyOrders = [...orders];
      const copyOrder = {...copyOrders[index]};
      copyOrder.count = 0;

      copyOrders[index] = copyOrder;
      getPrice(copyOrders);
      setOrders(copyOrders);

    };

    const getPrice = (ordersCopy: IOrdersState[]) => {
      let resultPrice: number = PRICE;
      for (let i = 0; i < ordersCopy.length; i++) {
        resultPrice += ordersCopy[i].count * MENU[i].price;
      }
      setPrice(resultPrice);

    };


    return (
      <div className="App">
        <div className="main">
          {
            orders.map((order, index) => {
              return (
                <Menu img={MENU[index].image}
                      name={MENU[index].name}
                      count={MENU[index].price + 'сом'}
                      onImgClick={() => {
                        setCount(index);
                      }}
                      key={nanoid()}
                />
              );
            })
          }
        </div>
        <Order
          price={price}
          MENU={MENU}
          ordersState={orders}
          onBtnClick={removeOrder}
        />
      </div>
    );
  }
;


export default App;

