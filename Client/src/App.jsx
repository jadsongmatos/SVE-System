import React from "react";
import Header from "./components/common/header.jsx";
import Footer from "./components/common/footer.jsx";
import Home from "./view/Home.jsx";
import Clientes from "./view/Clientes.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/clientes" component={Clientes} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
