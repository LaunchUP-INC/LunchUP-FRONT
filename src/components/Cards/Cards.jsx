import React, { useState, useEffect } from 'react';
import Card from "../Card/Card";
import style from "../Cards/Cards.module.css";
import Loader from '../Loader/Loader';

const Cards = (props) => {
  const {dishes} = props;

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loader) {
    return <Loader />
  }

  return (
    <div className={style.container}>
      {dishes && dishes.length > 0 && dishes.map((dish) => (
        <Card
          key={dish.id}
          id={dish.id}
          name={dish.name}
          images={dish.images}
          description={dish.description}
          price={dish.price}
        />
      ))}
    </div>
  );
};

export default Cards;

