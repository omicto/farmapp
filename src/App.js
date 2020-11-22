import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer.component";
import Home from "./views/home/home.view";
import Shop from "./views/shop/shop.view";
import ItemView from "./views/item/item.view";
import { getItems } from "./services/item.service";
// TODO Delete

function App() {
  const items = getItems();

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {/* probablemente aqui estaria bueno tener otro componente para el "tutorialito"
              que puso LC en los mockups, con un if si es la primera vez que se loggea o algo  */}
            <Home></Home>
          </Route>
          <Route path="/labs"> </Route>
          <Route exact path="/shop">
            <Shop items={items}></Shop>
          </Route>
          <Route path="/shop/:id">
            <ItemView />
          </Route>
          <Route path="/cart"></Route>
          <Route path="/chat"></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
