import React, { useEffect } from "react";
import {
  Widget,
  addResponseMessage,
  isWidgetOpened,
  toggleWidget,
} from "react-chat-widget";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer.component";
import Home from "./views/home/home.view";
import Shop from "./views/shop/shop.view";
import { getItems } from "./services/item.service";
// TODO Delete
import ItemView from "./views/item/item.view";
import "fontsource-roboto";

import "react-chat-widget/lib/styles.css";

import "./styles/style.scss";
function App() {
  const items = getItems();
  useEffect(() => {
    addResponseMessage("Welcome to this awesome chat!");
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  const handleFooterChange = () => {
    if (isWidgetOpened()) toggleWidget();
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
          <Route path="/cart"></Route>
        </Switch>
        <Footer onChange={handleFooterChange} />
      </BrowserRouter>
    </div>
  );
}

export default App;
