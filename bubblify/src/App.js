import NavigationBar from './components/NavigationBar';
import Container from './components/Container';
import Bubbles from './components/Bubbles';

function App() {
  return (
    <div className="App">
      < NavigationBar />
      <Container>
        <Bubbles />
      </Container>
    </div>

  );
}

export default App;
