import React, { useState, useEffect } from 'react';
import Card from "../Card/Card";
import style from "../Cards/Cards.module.css";
import Loader from '../Loader/Loader';

const Cards = (props) => {
  const {dishes} = props;
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (dishes.length === 0) {
      setLoader(true);
    } else {
      setLoader(false);
    }
  }, [dishes]);

  if (loader) {
    return <Loader />;
  }

  if (!dishes || dishes.length === 0) {
    return (
      <Container className="mt-4">
        <Alert variant="warning" className="text-center">
          No se encontraron platos.
        </Alert>
      </Container>
    );
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
          stock={dish.stock}
        />
      ))}
    </div>
  );
};

export default Cards;

