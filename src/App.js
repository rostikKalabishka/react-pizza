import { Header } from "./components/Header/Header";

import "./scss/app.scss";

import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Drawer from "./pages/Cart";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/cart" element={<Drawer />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
