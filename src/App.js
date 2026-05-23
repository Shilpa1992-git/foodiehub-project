    import "./App.css";
import { useState } from "react";

function App() {

  const [search, setSearch] = useState("");
  const cartCount = 6;

  return (
    <div>

      <nav className="navbar">
        <h1>FoodieHub 🍔</h1>

        <div>
          <button>Home</button>
          <button>Restaurants</button>
          <button>Cart({cartCount})</button>
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

      <div className="card-container">

        {/* Pizza */}
        {search === "" || "pizza".includes(search.toLowerCase()) ? (
          <div className="card">

            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
              alt="Pizza"
            />

            <h3>Pizza Hut</h3>
            <p>Cheesy Pizza 🍕</p>

            <button onClick={() => alert("Pizza Added To Cart 🛒")}>
              Order Now
            </button>

          </div>
        ) : null}

        {/* Burger */}
        {search === "" || "burger".includes(search.toLowerCase()) ? (
          <div className="card">

            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
              alt="Burger"
            />

            <h3>Burger King</h3>
            <p>Tasty Burger 🍔</p>

            <button onClick={() => alert("Burger Added To Cart 🛒")}>
              Order Now
            </button>

          </div>
        ) : null}

        {/* Pasta */}
        {search === "" || "pasta".includes(search.toLowerCase()) ? (
          <div className="card">

            <img
              src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9"
              alt="Pasta"
            />

            <h3>Italian Pasta</h3>
            <p>Creamy Pasta 🍝</p>

            <button onClick={() => alert("Pasta Added To Cart 🛒")}>
              Order Now
            </button>

          </div>
        ) : null}

        {/* Salad */}
        {search === "" || "salad".includes(search.toLowerCase()) ? (
          <div className="card">

            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
              alt="Salad"
            />

            <h3>Healthy Salad</h3>
            <p>Fresh Veggies 🥗</p>

            <button onClick={() => alert("Salad Added To Cart 🛒")}>
              Order Now
            </button>

          </div>
        ) : null}

        {/* Momos */}
        {search === "" || "momos".includes(search.toLowerCase()) ? (
          <div className="card">

            <img
              src="https://images.unsplash.com/photo-1601050690597-df0568f70950"
              alt="Momos"
            />

            <h3>Steam Momos</h3>
            <p>Spicy Momos 🥟</p>

            <button onClick={() => alert("Momos Added To Cart 🛒")}>
              Order Now
            </button>

          </div>
        ) : null}

        {/* Juice */}
        {search === "" || "juice".includes(search.toLowerCase()) ? (
          <div className="card">

            <img
              src="https://images.unsplash.com/photo-1623065422902-30a2d299bbe4"
              alt="Juice"
            />

            <h3>Fresh Juice</h3>
            <p>Healthy Juice 🥤</p>

            <button onClick={() => alert("Juice Added To Cart 🛒")}>
              Order Now
            </button>

          </div>
        ) : null}

      </div>

    </div>
  );
}

export default App;
