import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import CategoryMain from "./components/CategoryMain";
import ProductMain from "./components/ProductMain";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/category/:category_id" exact component={CategoryMain} />
          <Route path="/product/:product_id" exact component={ProductMain} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
