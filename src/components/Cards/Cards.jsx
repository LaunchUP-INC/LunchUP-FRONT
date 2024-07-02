import React from 'react';
import Card from "../Card/Card";
import style from "../Cards/Cards.module.css";
import Loader from '../Loader/Loader';
const Cards = ({ dishes }) => {
  return (
      <div className={style.container}>
          {dishes && dishes.length > 0 ? (
            dishes.map((dish) => (
              <Card
                  key={dish.id}
                  id={dish.id}
                  name={dish.name}
                  image={dish.image}
                  description={dish.description}
                  price={dish.price}
              />
          ))) : (
            <Loader />
          )}
      </div>
  );
};

export default Cards;
