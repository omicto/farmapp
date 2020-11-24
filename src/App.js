import React, { useEffect } from "react";
import {
  Widget,
  isWidgetOpened,
  toggleWidget,
} from "react-chat-widget";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer.component";
import Home from "./views/home/home.view";
import Shop from "./views/shop/shop.view";
import Cart from './views/cart/cart.view';
import { getItems } from "./services/item.service";
import { getResponse } from './mocks/bot-help.mock';
// TODO Delete
import ItemView from "./views/item/item.view";
import "fontsource-roboto";
import {launchOpenContainerListener, closeLauncher} from './script/rcw-container.script';
import "react-chat-widget/lib/styles.css";

import "./styles/style.scss";
function App() {
  const items = getItems();
  useEffect(() => {
    getResponse({ isGreeting: true })
    launchOpenContainerListener();
  }, []);

  const handleNewUserMessage = (newMessage) => {
    getResponse({ message: newMessage })
  };

  const handleFooterChange = () => {
    if (isWidgetOpened()) {
      toggleWidget();
      closeLauncher();
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Widget
          handleToggle
          title={"¿Necesitas ayuda?"}
          subtitle={""}
          handleNewUserMessage={handleNewUserMessage}
        />
        <Switch>
          <Route exact path="/">
            {/* probablemente aqui estaria bueno tener otro componente para el "tutorialito"
              que puso LC en los mockups, con un if si es la primera vez que se loggea o algo  */}
            <Home />
          </Route>
          <Route path="/labs"> </Route>
          <Route exact path="/shop">
            <Shop items={items}></Shop>
          </Route>
          <Route path="/shop/:id">
            <ItemView />
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
        </Switch>
        <Footer onChange={handleFooterChange} />
      </BrowserRouter>
    </div>
  );
}

export default App;
