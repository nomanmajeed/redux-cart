import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Cart from './components/Cart';
import Details from './components/Details';

function App() {
  return (
    <Router>
        <Provider store={store}>
          <Nav />
          <Routes>
          <Route path="/" exact element={<Home />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/details/:id" exact element={<Details />} />
          </Routes>
        </Provider>      
    </Router>
  );
}

export default App;