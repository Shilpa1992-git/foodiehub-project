    import "./App.css";
import { useState } from "react";

function App() {

  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div>

      <nav className="navbar">
        <h1>FoodieHub 🍔</h1>

        <div>
          <button>Home</button>
          <button>Restaurants</button>
          <button>Cart ({cartCount})</button>
        </div>

        <input
          type="text"
          placeholder="Search Food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </nav>

      <div className="hero">
        <h2>Order Your Favorite Food</h2>
        <p>Fast Delivery At Your Doorstep 🚀</p>
      </div>

      <div style={{ padding: "20px" }}>
        <h2>Cart Items</h2>

        {cartItems.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      <div className="card-container">

        {/* Pizza */}
        {(search === "" || "pizza".includes(search.toLowerCase())) && (
          <div className="card">

            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
              alt="Pizza"
            />

            <h3>Pizza Hut</h3>
            <p>Cheesy Pizza 🍕</p>

            <button
              onClick={() => {
                setCartCount(cartCount + 1);
                setCartItems([...cartItems, "Pizza Hut"]);
              }}
            >
              Order Now
            </button>

          </div>
        )}

        {/* Burger */}
        {(search === "" || "burger".includes(search.toLowerCase())) && (
          <div className="card">

            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
              alt="Burger"
            />

            <h3>Burger King</h3>
            <p>Tasty Burger 🍔</p>

            <button
              onClick={() => {
                setCartCount(cartCount + 1);
                setCartItems([...cartItems, "Burger King"]);
              }}
            >
              Order Now
            </button>

          </div>
        )}

        {/* Pasta */}
        {(search === "" || "pasta".includes(search.toLowerCase())) && (
          <div className="card">

            <img
              src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9"
              alt="Pasta"
            />

            <h3>Italian Pasta</h3>
            <p>Creamy Pasta 🍝</p>

            <button
              onClick={() => {
                setCartCount(cartCount + 1);
                setCartItems([...cartItems, "Italian Pasta"]);
              }}
            >
              Order Now
            </button>

          </div>
        )}

        {/* Salad */}
        {(search === "" || "salad".includes(search.toLowerCase())) && (
          <div className="card">

            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
              alt="Salad"
            />

            <h3>Healthy Salad</h3>
            <p>Fresh Veggies 🥗</p>

            <button
              onClick={() => {
                setCartCount(cartCount + 1);
                setCartItems([...cartItems, "Healthy Salad"]);
              }}
            >
              Order Now
            </button>

          </div>
        )}

        {/* Momos */}
        {(search === "" || "momos".includes(search.toLowerCase())) && (
          <div className="card">

            <img
              src="https://images.unsplash.com/photo-1601050690597-df0568f70950"
              alt="Momos"
            />

            <h3>Steam Momos</h3>
            <p>Spicy Momos 🥟</p>

            <button
              onClick={() => {
                setCartCount(cartCount + 1);
                setCartItems([...cartItems, "Steam Momos"]);
              }}
            >
              Order Now
            </button>

          </div>
        )}

        {/* Juice */}
        {(search === "" || "juice".includes(search.toLowerCase())) && (
          <div className="card">

            <img
              src="https://images.unsplash.com/photo-1623065422902-30a2d299bbe4"
              alt="Juice"
            />

            <h3>Fresh Juice</h3>
            <p>Healthy Juice 🧃</p>

            <button
              onClick={() => {
                setCartCount(cartCount + 1);
                setCartItems([...cartItems, "Fresh Juice"]);
              }}
            >
              Order Now
            </button>

          </div>
        )}

      </div>

    </div>
  );
}

export default App;