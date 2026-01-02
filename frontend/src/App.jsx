import React, { useEffect, useState } from "react";
import { fetchProducts } from "./api";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>Thrift Marketplace</h1>
        <p>Buy & sell pre-loved fashion</p>
      </header>

      <div className="grid">
        {products.map((p) => {
          const commission = p.price * 0.1;
          const sellerReceives = p.price - commission;

          return (
            <div className="card" key={p.id}>
              <img
                src={p.image_url || "https://via.placeholder.com/300"}
                alt={p.title}
                loading="lazy"
              />

              <div className="card-body">
                <h3>{p.title}</h3>

                <p className="price">₱{p.price}</p>

                <p className="fee">
                  Platform fee (10%): ₱{commission.toFixed(2)}
                </p>

                <p className="seller">
                  Seller receives: ₱{sellerReceives.toFixed(2)}
                </p>

                <button className="btn">View Item</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}