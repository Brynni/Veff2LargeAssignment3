import NavigationBar from './components/NavigationBar';
import Container from './components/Container';
import Bubbles from './components/Bubbles';
import Bundles from './components/Bundles';
import BubbleItemDetails from './components/BubbleItemDetails';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './components/About';
import BundleItemDetails from './components/BundleItemDetails';
import NotFound from './components/NotFound';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ReviewOrder from './components/ReviewOrder';

function App() {
  return (
    <div className="App">
      < NavigationBar />
      <Container>
        <Switch>
          <Route exact path="/" component={ Bubbles } />
          <Route exact path ="/bubbles" render={ () => <Redirect to="/" /> } />
          <Route exact path="/about" component= { About } />
          <Route exact path="/bundles" component= { Bundles } />
          <Route exact path="/bubbles/:bubbleItemId" component= { BubbleItemDetails } />
          <Route exact path="/cart" component= { Cart } />
          <Route exact path="/cart/checkout" component= { Checkout } />
          <Route exact path="/cart/checkout/reviewOrder" component= { ReviewOrder } />
          <Route exact path="/bundles/:bundleItemId" component= { BundleItemDetails } />
          <Route path="*" component={ NotFound} />

        </Switch>
        
      </Container>
    </div>

  );
}

export default App;
