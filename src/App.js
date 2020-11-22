import React, { useEffect } from 'react';
import { Widget, addResponseMessage, isWidgetOpened, toggleWidget } from 'react-chat-widget';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer.component";
import Home from "./views/home/home.view";
import ItemView from "./views/item/item.view";
import 'fontsource-roboto';


import 'react-chat-widget/lib/styles.css';

import './styles/style.scss';
function App() {
  useEffect(() => {
    addResponseMessage('Welcome to this awesome chat!');
  }, []);
  
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  const handleFooterChange = () => {
    if (isWidgetOpened()) toggleWidget();
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {/* probablemente aqui estaria bueno tener otro componente para el "tutorialito"
              que puso LC en los mockups, con un if si es la primera vez que se loggea o algo  */}
            <Home/>
          </Route>
          <Route path="/labs"></Route>
          <Route path="/shop"></Route>
          <Route path="/cart"></Route>
        </Switch>
        <Widget
          handleToggle
          title={"¿Necesitas ayuda?"}
          subtitle={""}
          handleNewUserMessage={handleNewUserMessage}
          
        />
        <Footer onChange={handleFooterChange}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
