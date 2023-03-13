import { Header } from "./components/Header/Header";

import "./scss/app.scss";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Drawer from "./pages/Cart";
import NotFound from "./pages/NotFound";

import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />} />

          <Route path="/cart" element={<Drawer />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
