import "./Style/App.css";
import { Cart } from "./Components/Cart";
import { Footer } from "./Components/Footer";
import { ItemsPizza } from "./Components/ItemsPizza";
import { ItemsSallad } from "./Components/ItemsSallad";
import { Navbar } from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { ItemsSides } from "./Components/ItemsSides";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        {/* Items shown in frontpage depends on the Navlink in navbar that is connected to the route element. ItemsPiza component is shown by default */}
        <Routes>
          <Route index element={<ItemsPizza />} />
          <Route path="/pizza" element={<ItemsPizza />} />
          <Route path="/sallad" element={<ItemsSallad />} />
          <Route path="/sides" element={<ItemsSides />} />
        </Routes>
        <Cart />
      </div>
      <Footer />
    </>
  );
}
