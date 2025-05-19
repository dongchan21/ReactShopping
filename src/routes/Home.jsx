// src/Main.jsx
import Card from './Card.jsx';

export default function Home({ shoes }) {
  return (
    <>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {shoes.map((shoe) => (
            <Card key={shoe.id} shoe={shoe} />
          ))}
        </div>
      </div>
    </>
  );
}
