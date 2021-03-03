import NavigationBar from './components/NavigationBar';
import Container from './components/Container';
import Bubbles from './components/Bubbles';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <div className="App">
      < NavigationBar />
      <Container>
        <Switch>
          <Route exact path="/" component={ Bubbles } />
          <Route exact path ="/bubbles" render={ () => <Redirect to="/" /> } />
          <Route exact path="/about" component= { About } />
        </Switch>
        
      </Container>
    </div>

  );
}

export default App;
