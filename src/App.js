import Card from "./components/Card";
import products from "./mock_data/products";
import "./styles/App.css";

function App() {
  return (
    <div className="flex">
      {products.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          title={item.title}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default App;
