import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useState} from 'react';
// components
import Navbar from './component/Navbar';
import BackDrop from './component/BackDrop';
import SideDrawer from './component/sideDrawer';

// SCREENs
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';


function App() {

    const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
          <Navbar click={()=> setSideToggle(true)}/>
          <SideDrawer show={sideToggle} click={()=> setSideToggle(false)}/>
          <BackDrop show={sideToggle} click={()=> setSideToggle(false)}/>
            <main>
                <Switch>
                    <Route exact path='/' component={HomeScreen}/>
                    <Route exact path='/product/:id' component={ProductScreen}/>
                    <Route exact path='/cart' component={CartScreen}/>
                </Switch>
            </main>
            {/* HOMESCREEN */}
            {/* PRODUCT SCREEN */}
            {/* CART SCREEN */}
    </Router>
  );
}

export default App;
