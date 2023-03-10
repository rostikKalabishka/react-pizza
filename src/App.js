import { Header } from "./components/Header/Header";

import "./scss/app.scss";

import Home from "./pages/Home";
import { Route } from "react-router-dom";
import Drawer from "./pages/Cart";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <NotFound />
        </div>
      </div>
    </div>
  );
}

export default App;
