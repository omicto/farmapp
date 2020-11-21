import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/footer.component";
import Home from "./views/home/home.view";
// import ItemView from "./views/item/item.view";

// // TODO Delete
// const item = {
//   images: [
//     { imgUrl: "https://via.placeholder.com/149" },
//     { imgUrl: "https://via.placeholder.com/150" },
//     { imgUrl: "https://via.placeholder.com/151" },
//   ],
//   name : "IBUPROFENO 400 MG",
//   brand : "Algidol",
//   unitPrice : 25.00,
//   description: "Caja con 10 cápsulas"
// }

function App() {
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
          <Route path="/shop"></Route>
          <Route path="/cart">
          {/* <ItemView item={item}></ItemView> */}
          </Route>
          <Route path="/chat"></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
