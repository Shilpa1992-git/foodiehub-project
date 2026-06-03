    import "./App.css";
import { useState } from "react";

function App() {

  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

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
        <p>Total Price: ₹{totalPrice}</p>
        <p>Total Items: {cartCount}</p>
       {cartItems.length === 0 && (
  <p>Your Cart is Empty 🛒</p>
)}
       {cartItems.map((item, index) => (
        
  <div key={index}>
    <p>{item}</p>                   
    <button
      onClick={() => {
        const updatedItems = cartItems.filter(
          (_, i) => i !== index
        );

        setCartItems(updatedItems);
        setCartCount(cartCount - 1);
      }}
    >
      Remove
    </button>
  </div>
))} 
<button
  onClick={() => alert("Order Placed Successfully!")}
>
  Checkout
</button>

<button
  onClick={() => {
    setCartItems([]);
    setCartCount(0);
    setTotalPrice(0);
  }}
>
  Clear Cart
</button>
     <h3>Customer Details</h3>
<input
  type="text"
  placeholder="Enter Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

<br /><br />

<input
  type="text"
  placeholder="Enter Mobile Number"
  value={mobile}
  onChange={(e) => setMobile(e.target.value)}
/>

<br /><br />

<input
  type="text"
  placeholder="Enter Address"
  value={address}
  onChange={(e) => setAddress(e.target.value)}
/>
<br /><br />
<button
  onClick={() => alert("Order Confirmed Successfully!")}
>
  Place Order
</button>
 </div>
      <div 
      className="card-container">

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
                setTotalPrice(totalPrice + 299);
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
                setTotalPrice(totalPrice + 199);
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
                setTotalPrice(totalPrice + 249);
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
                setTotalPrice(totalPrice + 149);
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
                setTotalPrice(totalPrice + 129);
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
                setTotalPrice(totalPrice + 99);
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