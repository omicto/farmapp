import React, { useEffect, useState } from "react";
import {
  Widget,
  isWidgetOpened,
  toggleWidget,
} from "react-chat-widget";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/footer/footer.component";
import Home from "./views/home/home.view";
import Shop from "./views/shop/shop.view";
import Laboratories from "./views/labs/labs.view";
import Cart from './views/cart/cart.view';
import ItemView from "./views/item/item.view";
import Checkout from './views/checkout/checkout.view';
import Disclaimer from './views/disclaimer/disclaimer.view';
import { getItems } from "./services/item.service";
import { getResponse, greet } from './mocks/bot-help.mock';
import { launchOpenContainerListener, closeLauncher } from './script/rcw-container.script';
import "./App.css";
import "fontsource-roboto";
import "react-chat-widget/lib/styles.css";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import "./styles/style.scss";

import { AppProvider } from "./components/context/app-context.component";

const useWindowWidth = () => {
  const [width, setWidth] = useState(0);
  useEffect( () => {
    const updateWidth = () => {
      setWidth((window.innerWidth > 0) ? window.innerWidth : window.screen.width);
    };
    window.addEventListener('resize', updateWidth )
    updateWidth();
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  return width;
}

function App() {
  const items = getItems();
  const width = useWindowWidth();
  useEffect(() => {
    greet();
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

  const renderMobileApp = () => (
    <AppProvider>
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
          <Route path="/labs">
            <Laboratories />
          </Route>
          <Route exact path="/shop">
            <Shop items={items}></Shop>
          </Route>
          <Route path="/shop/:id">
            <ItemView />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
        <Footer onChange={handleFooterChange} />
      </BrowserRouter>
    </AppProvider>
  )

  return (
    
    <div className="App">
      { width <= 800 ? renderMobileApp() : <Disclaimer text={"Por favor visita este sitio desde una app movil"} />}
    </div>
  );
}

export default App;
