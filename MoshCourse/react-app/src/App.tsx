import { useState } from "react";
import NavBar from "./components/navBar";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState(["prod1", "prod2"]);
  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default App;
