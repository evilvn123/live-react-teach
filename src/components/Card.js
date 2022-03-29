import "../styles/Card.css";

const Card = ({ image, title, name, price }) => {
  return (
    <div className="card">
      <img className="image" src={image} alt="" />
      <span className="title">{title}</span>
      <p className="name">{name}</p>
      <span className="price">{price}VNĐ</span>
    </div>
  );
};

export default Card;
