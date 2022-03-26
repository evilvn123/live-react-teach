import "../styles/Card.css";

const Card = ({ image, title }) => {
  return (
    <div className="card">
      <img className="image" src={image} alt="" />
      <span>{title}</span>
    </div>
  );
};

export default Card;
