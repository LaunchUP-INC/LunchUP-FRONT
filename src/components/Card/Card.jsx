// eslint-disable-next-line react/prop-types
const Card = ({ id, title, image }) => {
  return (
    <div>
      <label>ID: {id}</label>
      <h3>{title}</h3>
      <img src={image} alt={title} />
    </div>
  );
};

export default Card;
